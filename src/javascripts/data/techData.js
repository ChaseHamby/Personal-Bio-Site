import axios from 'axios';

import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/tech.json`)
    .then((result) => {
      // problem:  result is an object and I need it to be an array
      const allTechObject = result.data;
      const allTechArray = [];
      if (allTechObject != null) {
        Object.keys(allTechObject).forEach((tech) => {
          const newTech = allTechObject[tech];
          newTech.id = tech;
          allTechArray.push(newTech);
        });
      }
      resolve(allTechArray);
      console.log('here', allTechArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getTechFromDb;
