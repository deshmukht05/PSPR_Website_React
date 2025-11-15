import "../css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="f-a">
        <div className="f-i">
          <img src="Logo.png" alt="Logo" />
        </div>

        <div className="f-b">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Licensing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="f-c">© 2025 PSPR</div>
    </div>
  );
};
