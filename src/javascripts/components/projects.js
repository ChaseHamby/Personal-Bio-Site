import $ from 'jquery';
import projectData from '../data/projectData';

const writeProjects = (arrayOfProjects) => {
  let domString = '';
  arrayOfProjects.forEach((project) => {
    domString += `<div id='${project.id}' class='card col-3 p-3 m-5'>
        <img class='card-img-top' src='${project.imageUrl}
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <h6 class="card-text">${project.description}</h6>
            <p class="technologies-used">${project.technologiesUsed}</p>
            <a href="${project.githubUrl}" class="btn btn-primary justift-content-center">GitHub</a>
        </div>
    </div>`;
  });
  $('#project-container').html(domString);
};

const initializeProjectView = () => {
  projectData.loadProjects()
    .then((data) => {
      writeProjects(data.data);
    }).catch((error) => {
      console.error(error);
    });
};

initializeProjectView();

export default { initializeProjectView };
