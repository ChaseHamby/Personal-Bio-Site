import $ from 'jquery';
import 'firebase/auth';
import './navbar.scss';

const createNavbar = () => {
  const domString = `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><h5>Chase Hamby || Software Developer</h5></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <h5><a href="#bio-container" id="navbar-button-auth" class="nav-link">Bio</a></h5>
          </li>
          <li class="nav-item">
            <h5><a href="#project-container" id="navbar-button-tasks" class="nav-link">Projects</a></h5>
          </li>
          <li class="nav-item">
            <h5><a href="#technology-container" id="navbar-button-logout" class="nav-link">Technology</a></h5>
          </li>
          <li class="nav-item">
            <h5><a href="#contact-container" id="navbar-button-logout" class="nav-link">Contact</a></h5>
          </li>
        </ul>
      </div>
    </nav>
  `;
  $('#navbar').html(domString);
};

export default createNavbar;
