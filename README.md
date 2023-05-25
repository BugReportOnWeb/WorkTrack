# WorkTrack

WorkTrack is a web application for tracking workouts and achieving fitness goals. I built this project to learn about the MERN tech stack (MongoDB, Express, React, Node.js). WorkTrack allows users to create custom workouts and track their progress. With an intuitive interface, WorkTrack makes it easy to stay motivated and reach fitness goals.

## Features

WorkTrack includes the following features:

- User authentication: Users can sign up for an account, log in, and log out.
- Custom workouts: Users can create custom workouts by adding exercises, reps, and weights.
- Workout tracking: Users can log their workouts and track their progress over time.

## Installation

To use WorkTrack locally, follow these steps:

1. Clone the repository (dev branch) to your local machine using the command `git clone -b dev https://github.com/BugReportOnWeb/WorkTrack.git`.
2. Navigate to the root directory of the project in your terminal.
3. Head inside the server directory by running the command `cd server` and install server dependencies using command `npm install`.
4. Set up your environment variables by creating a `.env` file in the server directory of the project. You'll need to add the following variables:

```
PORT=<server-port>
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<jwt-secret-key>
```
Be sure to replace `<your-mongodb-uri>` with the URI of your MongoDB database, JWT_SECRET with a secret key and `<server-port>` with a port of your choice.

5. Start the server by running the command `npm run dev`. This will start the server on port `<server-port>`.
6. In a new terminal window, navigate to the client directory by running the command `cd client`. 
7. Install the client dependencies by running the command `npm install`. This will install the necessary packages for the client.
8. Start the client by running the command `npm run dev`. This will start the client on port 5173.
9. Open your web browser and navigate to `http://localhost:5173`. You should see the WorkTrack homepage.

## Technologies

WorkTrack was built using the following technologies:

### Main
- MongoDB: A NoSQL database used for storing user data and workout information.
- Express: A web application framework used for building the server-side of the application.
- React: A JavaScript library used for building the client-side of the application.
- Node.js: A JavaScript runtime used for building the server-side of the application.
### Extras
- Mongoose: An Object Data Modeling (ODM) library for MongoDB providing schema-based solution for modeling application data.
- Fetch API: A modern browser API used to make HTTP requests from the client-side of the application.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- JSON Web Token (JWT): Compact and self-contained way for securely transmitting information between parties as a JSON object.

## Work on progress

In order of their priority (most to least):

- [X] Responsiveness
- [X] Skeleton component when loading
- [X] Indication for ongoing server request -> (Need one for deletion)
- [X] Animation on component/page change -> (Need one for deletion)
- [ ] Redoing About page
- [ ] Validator on client-side (Test)

## Contributing

If you're interested in contributing to WorkTrack, you can create a pull request on the project's GitHub repository. Contributions are welcome and appreciated as I'm constantly looking for ways to improve the app. If you encounter any bugs or issues, please feel free to submit an issue on the GitHub repository.
