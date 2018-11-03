import $ from 'jquery';
import 'bootstrap';
import projectView from './javascripts/components/projects';
import './index.scss';
import familyPhoto from './images/family.jpg';

$('#familyPhoto').attr('src', familyPhoto);

const initializeMainView = () => {
  projectView.initializeProjectView();
};

initializeMainView();
