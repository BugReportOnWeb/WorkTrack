import { Link } from 'react-router-dom';
import image_man from '../assets/man_running.jpg';
import image_women from '../assets/women_workout.jpg';

const About = () => {
    return (
        <div className='About'>
            <h1 className='font-extrabold text-5xl my-5 mt-10 text-center'>About Us</h1> 
            <div className='flex max-w-3xl mx-auto flex-col gap-3 text-xl my-10 leading-9'>
                <p>Welcome to WorkTrack, the ultimate workout tracker! Our platform is designed to help you achieve your fitness goals by tracking and recording your workouts. Whether you're a fitness enthusiast or just getting started, WorkTrack makes it easy to stay motivated and on track.</p>
                <img className='rounded-lg my-5' src={image_man} alt='Man running' />
                <p>Our platform allows you to create custom workouts, track your progress, and set goals for yourself. With our intuitive interface, you can easily log your workouts, record your sets, reps, and weights, and track your progress over time. We provide personalized recommendations based on your workout history and progress, making it easy to stay motivated and reach your goals.</p>
                <img className='rounded-lg my-5' src={image_women} alt='Worman working out' />
                <p>At WorkTrack, we believe that fitness is more than just a workout. It's a lifestyle. That's why we've created a community of like-minded individuals who share your passion for fitness. Our platform allows you to connect with others, share tips, advice, and support, and stay accountable. So why wait? <Link to='/sign-up' className='underline-offset-8 decoration-2 decoration-[#007bff] underline'>Sign up</Link> for WorkTrack today and start tracking your workouts like a pro!</p>
            </div>
        </div>
    )
}

export default About;
