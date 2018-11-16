// import $ from 'jquery';
// import techData from '../../data/techData';

// const writeTech = (arrayOfTechnologies) => {
//   let domString = '';
//   arrayOfTechnologies.forEach((tech) => {
//     domString += `
//       <div id='tech-cards' class='card col-3 p-3 m-5'>
//         <img class='card-img-top border border-dark' src=${tech.imageUrl}
//       </div>`;
//   });
//   $('#technology-container').html(domString);
// };

// const initializeTechView = () => {
//   techData.loadTech()
//     .then((data) => {
//       writeTech(data.data);
//     }).catch((error) => {
//       console.error(error);
//     });
// };

// export default { initializeTechView };
