import "../css/About.css";
import aboutData from "../api/aboutData.json";
import { AboutData } from "./AboutData";
import { useRef } from "react"; // Added useRef import
import { motion } from "framer-motion"; // Added motion import

export const About = () => {
  const scrollRef = useRef(null);

  return (
    <div className="about" id="about">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          About <span>Us</span>
        </h1>
        <span className="underline"></span>
      </motion.div>

      <div className="about-content">
        <div className="about-box-content">
          <motion.div
            className="about-projects-done"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <img src="stars.png" alt="Icon" />
            </div>
            <div>
              <h1>10+</h1>
              <p>Successful Election Projects</p>
            </div>
          </motion.div>

          <motion.div
            className="about-projects-done"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <img src="competition.png" alt="Icon" />
            </div>
            <div>
              <h1>8+</h1>
              <p>Years of Excellence</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-para-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      </div>

      <div className="core-values">
        <motion.div
          className="core-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Core Values</h1>
        </motion.div>
        <ul className="about-align">
          {aboutData.map((curEle) => (
            <AboutData key={aboutData.id} data={curEle} />
          ))}
        </ul>
      </div>
    </div>
  );
};
