import 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import projectView from './javascripts/components/projects';
// import techView from './javascripts/components/Tech/tech';
import './index.scss';
import createNavbar from './javascripts/components/Navbar/navbar';

const initializeMainView = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectView.initializeProjectView();
  // techView.initializeTechView();
  createNavbar();
};

initializeMainView();
