import $ from 'jquery';
import 'firebase/auth';
import './navbar.scss';

const createNavbar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Chase Hamby || Software Developer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#bio-container" id="navbar-button-auth" class="nav-link">Bio</a>
          </li>
          <li class="nav-item">
            <a href="#project-container" id="navbar-button-tasks" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
          <a href="#technology-container" id="navbar-button-logout" class="nav-link">Technology</a>
          </li>
          <li class="nav-item">
            <a href="#contact-container" id="navbar-button-logout" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
  $('#navbar').html(domString);
};

export default createNavbar;
