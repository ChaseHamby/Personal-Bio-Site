console.log('hi');

let projects = {
    project: [
    {
    title: "Cool Project", 
    screenshot: "<img src='https://media.newyorker.com/photos/59097998ebe912338a378282/4:3/w_960,c_limit/160905_r28637.jpg'>",
    description: "^^That is a coyote^^^", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:"HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux",   // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
    title: "Cool Project", 
    screenshot: "<img src='https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1071,q_50,w_1903/v1/clients/spokane17/Beer_1_5b32b17e-a63c-4941-b0e0-0e58ab169350.jpg'>",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
    title: "Cool Project", 
    screenshot: "<img src='http://allaboutbeer.com/wp-content/uploads/2017/10/The-Bruery-Black-Tuesday-500.png'>",
    description: "What is this other beer? It is called Black Tuesday so it must be good...", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
]
};

const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}
const createProjectCards = () => {
let newString = '';
for(i = 0; i < projects.project.length; i++){
    if (projects.project[i].available === true) {
    newString += `<div class="fullPage">`;
    newString += `<h1>${projects.project[i].title}</h1>`;
    newString += `<h3>${projects.project[i].screenshot}</h3>`;      
    newString += `<h3>${projects.project[i].description}</h3>`;       
    newString += `<h3>${projects.project[i].technologiesUsed}</h3>`;
    newString += `<h3>${projects.project[i].available}</h3>`;
    newString += `<h3>${projects.project[i].url}</h3>`;
    newString += `<h3>${projects.project[i].githubUrl}</h3>`;
    newString += `</div>`; 
    }
    writeToDom(newString, 'projectsPage');
}
};

createProjectCards();
