# Personal Bio Site

This project is to get us started building our own personal bio site over the next 6 months. Each time we contribute, we will be adding new lessons from class. This time around, we began using firebase and the CRUD axios methods. 

## Screenshots
<img width="1378" alt="screen shot 2018-11-29 at 8 14 32 pm" src="https://user-images.githubusercontent.com/16019344/49264347-85bb4a00-f413-11e8-98e5-445230152b0c.png">
<img width="1330" alt="screen shot 2018-11-29 at 8 14 45 pm" src="https://user-images.githubusercontent.com/16019344/49264354-881da400-f413-11e8-9133-93ce84bbcd85.png">
<img width="1350" alt="screen shot 2018-11-29 at 8 15 00 pm" src="https://user-images.githubusercontent.com/16019344/49264357-8a7ffe00-f413-11e8-8f9a-ec4884cc5e68.png">
<img width="1342" alt="screen shot 2018-11-29 at 8 15 06 pm" src="https://user-images.githubusercontent.com/16019344/49264360-8c49c180-f413-11e8-8f3c-86bfc6d3259b.png">

## Technologies Used
* Webpack
* Axios
* Firebase
* ES6 Modules
* SASS
* Bootstrap

## How to run this app
Note: To run this app you will need a firebase account and a new project.

### 1. Configure Firebase
1. Clone the repository to a local machine.
2. Run the following command in terminal to download the web dependencies: `npm install`
3. In the db folder, rename apiKeys.json.example to apiKeys.json.
4. In Firebase, create a new project.
5. Navigate to your config object, and copy the keys from Firebase into the apiKeys.json file.
6. Create a realtime databse in Firebase, and start in test mode.
7. Import the `./db/projects.json` file into the database to seed data.
7. Import the `./db/tech.json` file into the database to seed data.

### 2. Serve up the app
* Run `npm start` in your terminal to initiate the app.
