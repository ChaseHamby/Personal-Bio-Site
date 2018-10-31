const createProjectCards = () => {
    let newString = '';
    projects.forEach((project) => {
    newString +=  `<div class="oroject-card m-5 p-5">`;
    newString +=    `<div class="card mb-3" style="max-width: 16rem;">`
    newString +=      `<h3 class="card-title">${project.title}</h3>`;
    newString +=        `<img class="card-img-top" src="${project.imageUrl}" alt="${project.title}">`;
    newString +=         `<div class="card-body">`;
    newString +=        `<p class="card-text">Technologies Used: ${project.technologiesUsed}</p>`
    newString +=      `<p class="card-text">${project.description}</p>`
    newString +=     `<a href="${project.githubUrl}" class="btn btn-primary">Github</a>`
    newString +=    `</div>`;
    newString +=  `</div>`;
    newString +=`</div>`;
  })
    printToDom(newString, 'projectsPage');
};
createProjectCards();
        
        
    // Technologies //

const techRedirect = document.getElementById('tech-link');

techRedirect.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "tech.html";
}, false);

    // Projects //

const projectRedirect = document.getElementById('project-link');

projectRedirect.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "project.html";
}, false);

    // Biography // 

const bioRedirect = document.getElementById('bio-link');

bioRedirect.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "bio.html";
}, false);



