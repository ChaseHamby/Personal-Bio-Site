import 'jquery';
import 'bootstrap';
import projectView from './javascripts/components/projects';
import './index.scss';

const initializeMainView = () => {
  projectView.initializeProjectView();
  // events.setEvents();
};

initializeMainView();
