import 'jquery';
import 'bootstrap';
import projectView from './javascripts/components/projects';
// import events from './javascripts/helpers/events';

import './index.scss';

const initializeMainView = () => {
  projectView.initializeProjectView();
  // events.setEvents();
};

initializeMainView();
