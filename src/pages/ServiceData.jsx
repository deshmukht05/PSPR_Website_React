import { motion } from "framer-motion";
import { useRef } from "react";

export const ServiceData = ({ serviceData }) => {
  const { image, heading, paragraph } = serviceData;
  const {scrollRef} = useRef(null);

  return (
    <motion.li
      className="services-types"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <div className="service-box">
          <div className="service-img">
            <img src={image} alt={heading} />
          </div>
          <div className="service-content">
            <h1> {heading} </h1>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
