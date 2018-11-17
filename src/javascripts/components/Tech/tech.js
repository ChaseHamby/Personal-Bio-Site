import $ from 'jquery';
import 'bootstrap';
import './tech.scss';
import getTechFromDb from '../../data/techData';


const writeTech = (arrayOfTechnologies) => {
  let domString = '';
  arrayOfTechnologies.forEach((tech) => {
    domString += `<div id='${tech.tech}' class='t-card col-1 p-1 m-5'>
    <img class='tech-cards' src=${tech.imageUrl}
      <div class="card-body">
      </div>
    </div>`;
  });
  $('#technology-container').html(domString);
};

const initializeTechView = () => {
  getTechFromDb()
    .then((data) => {
      writeTech(data);
    }).catch((error) => {
      console.error(error);
    });
};

export default { initializeTechView };
