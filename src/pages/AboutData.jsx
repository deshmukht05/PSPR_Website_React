import { useRef } from "react";
import { motion } from "framer-motion";

export const AboutData = ({ data }) => {
  const { image, heading, paragraph } = data;
  const scrollRef = useRef(null);

  return (
    <motion.li
      className="inner-core-values"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <div className="integrity">
          <div className="integrity-img">
            <img src={image} alt={heading} />
          </div>
          <div class="integrity-content">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
