const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

let projects = [
    {
    title: "Sorting Hat", 
    imageUrl: "<img src='http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg'>",
    description: "A project that brings Hogwarts' Sorting Hat to life!", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:"HTML, CSS, Vanilla JavaScript, Version Control with Github",
    githubUrl: "https://github.com/ChaseHamby/Sorting-Hat"
    },
    {
    title: "Language Translator", 
    imageUrl: "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Sj5Az7s0LcfkSe_i3amfURfXhgL2dDMPO-JV_S23QsC2CMl9'>",
    description: "An app that uses a limited dictionary and then translates a holiday card message from English into another language.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    githubUrl: "https://github.com/ChaseHamby/Language-Translator"
    },
    {
    title: "Adoption Website", 
    imageUrl: "<img src='https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1071,q_50,w_1903/v1/clients/spokane17/Beer_1_5b32b17e-a63c-4941-b0e0-0e58ab169350.jpg'>",
    description: "An adoption website where you are able to sort based on pet type (cat, dino, dog, or all). Once you sort, you can view cards that match your pet type preference and see pictures and information about the pet.",
    technologiesUsed: "HTML, Bootstrap, Vanilla JavaScript, Github",
    githubUrl: "https://github.com/ChaseHamby/Adoption-Website"
    },
];

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



