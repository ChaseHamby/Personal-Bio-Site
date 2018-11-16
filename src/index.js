import 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import projectView from './javascripts/components/projects';
import './index.scss';

const initializeMainView = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectView.initializeProjectView();
};

initializeMainView();
