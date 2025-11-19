import "../css/Projects.css";
import completedProjectsData from "../api/completedProjectsData.json";
import upcomingProjectsData from "../api/upcomingProjectsData.json";
import { ProjectData } from "./ProjectData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UpComingData } from "./UpComingData";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const { scrollRef } = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  const upsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: true,
    adaptiveHeight: true,
  };

  if (!completedProjectsData || !Array.isArray(completedProjectsData)) {
    return (
      <div className="projects" id="projects">
        <motion.div
          className="project-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Projects</h1>
          <span className="underline"></span>
          <p>No projects data available</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="projects" id="projects">
      <motion.div
        className="project-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Our <span>Projects</span>
        </h1>
        <span className="underline"></span>
        <p>
          Track record of successful election campaigns and upcoming strategic
          initiatives
        </p>
      </motion.div>

      <div className="project-content">
        <motion.h1>
          <h1>Projects Completed</h1>
        </motion.h1>

        <div className="slider-container">
          <Slider {...settings} className="project-details">
            {completedProjectsData.map((curEle, id) => (
              <ProjectData key={id} data={curEle} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="project-content">
        <h1>
          Upcoming Projects <sup className="superscript-new">New</sup>
        </h1>

        <div className="slider-container">
          <Slider {...upsettings} className="project-details">
            {upcomingProjectsData.map((curElem, id) => (
              <UpComingData key={id} props={curElem} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
