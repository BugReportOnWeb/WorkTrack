import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

userSchema.statics.register = async function(email, password) {
    const userExist = await this.findOne({ email });

    if (userExist) throw Error('Email already registered');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await this.create({ email, password: hash });

    return newUser;
}

const User = mongoose.model('User', userSchema);

export { User };

