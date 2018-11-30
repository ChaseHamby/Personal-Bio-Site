import $ from 'jquery';
import './projects.scss';
import getProjectsFromDb from '../../data/projectData';

const writeProjects = (arrayOfProjects) => {
  let domString = '';
  arrayOfProjects.forEach((project) => {
    domString += `<div id='${project.id}' class='card col-3 p-3 m-5'>
        <img class='card-img-top border border-dark' src=${project.imageUrl}
        <div class="card-body">
            <h5 class="card-title pt-3">${project.title}</h5>
            <h6 class="card-text">${project.description}</h6>
            <p class="technologies-used">${project.technologiesUsed}</p>
            <a href="${project.githubUrl}" class="btn btn-warning d-flex justify-content-center"><b>GitHub</b></a>
        </div>
    </div>`;
  });
  $('#project-container').html(domString);
};

const initializeProjectView = () => {
  getProjectsFromDb()
    .then((data) => {
      writeProjects(data);
    }).catch((error) => {
      console.error(error);
    });
};

export default { initializeProjectView };
