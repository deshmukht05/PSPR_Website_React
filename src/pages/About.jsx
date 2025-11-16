import "../css/About.css";
import aboutData from "../api/aboutData.json";
import { AboutData } from "./AboutData";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h1>About <span>Us</span></h1>
        <span className="underline"></span>
      </div>

      <div className="about-content">
        <div className="about-box-content">
          <div className="about-projects-done">
            <div>
              <img src="stars.png" alt="Icon" />
            </div>
            <div>
              <h1>10+</h1>
              <p>Successful Election Projects</p>
            </div>
          </div>
          <div className="about-projects-done">
            <div>
              <img src="competition.png" alt="Icon" />
            </div>
            <div>
              <h1>8+</h1>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="about-para-content">
          <p>
            At PSPR, we empower political leaders and organizations with
            cutting-edge research and strategies to navigate complex electoral
            landscapes.
          </p>
          <p>
            Founded in 2017, PSPR has grown from a small research team to a
            global consultancy, partnering with governments, parties, and NGOs
            across continents. Our mission is to strengthen democratic processes
            through data-driven insights and ethical political engagement.
          </p>
        </div>
      </div>

      <div className="core-values">
        <div className="core-heading">
          <h1>Our Core Values</h1>
        </div>
        <ul className="about-align">
          {aboutData.map((curEle) => (
            <AboutData key={aboutData.id} data={curEle} />
          ))}
        </ul>
      </div>
    </div>
  );
};
