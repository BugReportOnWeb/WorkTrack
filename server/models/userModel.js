import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.login = async function(email, password) {
    if (!email || !password) throw Error('All fields must be filled');

    const user = await this.findOne({ email });

    if (!user) throw Error('Email is not registered');

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw Error('Password is incorrect');

    return user;
}

userSchema.statics.register = async function(email, password, confirmPassword) {
    if (!email || !password) throw Error('All fields must be filled');
    if (!validator.isEmail(email)) throw Error('Email is not valid');

    const userExist = await this.findOne({ email });
    if (userExist) throw Error('Email already registered');

    if (password !== confirmPassword) throw Error('Password doesn\'t match');
    if (!validator.isStrongPassword(password)) throw Error('Password is not strong enough');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await this.create({ email, password: hash });

    return newUser;
}

const User = mongoose.model('User', userSchema);

export { User };

