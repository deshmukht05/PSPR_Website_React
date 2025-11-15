import "../css/Header.css";

export const Header = () => {
  return (
    <nav>
      <div class="navbar-components">
        <div class="logo">
          <img src="Logo.png" alt="Logo" />
        </div>
        <div class="components">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#services">Service</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-button">
        <button><a href="#contact">Contact Us</a></button>
      </div>
    </nav>
  );
};
