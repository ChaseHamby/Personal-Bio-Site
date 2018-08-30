console.log('hi');

let projects = {
    project: [
    {
    title: "Cool Project", 
    screenshot: "<img src='http://a57.foxnews.com/images.foxnews.com/content/fox-news/health/2018/07/10/czech-beer-brewed-to-aid-cancer-patients-with-loss-taste-appetite/_jcr_content/par/featured_image/media-0.img.jpg/1862/1048/1531243667671.jpg?ve=1&tl=1'>",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
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
    screenshot: "<img src='https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1071,q_50,w_1903/v1/clients/spokane17/Beer_1_5b32b17e-a63c-4941-b0e0-0e58ab169350.jpg' height: 100px; width: 100px;>",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
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
