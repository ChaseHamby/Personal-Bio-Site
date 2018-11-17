import axios from 'axios';

import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjectsFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((result) => {
      // problem:  result is an object and I need it to be an array
      const allProjectsObject = result.data;
      const allProjectsArray = [];
      if (allProjectsObject != null) {
        Object.keys(allProjectsObject).forEach((project) => {
          const newProject = allProjectsObject[project];
          newProject.id = project;
          allProjectsArray.push(newProject);
        });
      }
      resolve(allProjectsArray);
      console.log('here', allProjectsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getProjectsFromDb;
