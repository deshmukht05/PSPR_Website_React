import { useRef } from "react";
import "../css/Home.css";
import { motion } from "framer-motion";

export const Home = () => {
  const { scrollRef } = useRef(null);

  return (
    <div className="home-content">
      <motion.div
        className="small-headline"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.8 }}
      >
        <p>Leading Political Consultancy</p>
      </motion.div>

      <div className="heading">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.8 }}
        >
          Shaping Political Futures Through <br />{" "}
          <span>Strategic Research</span> and Insight
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.8 }}
        >
          PSPR is a leading consultancy in political strategy, offering
          data-driven research, <br /> campaign planning, voter analysis, and
          predictive modeling for elections worldwide.
        </motion.p>

        <motion.div
          className="explore-button"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.8 }}
        >
          <button>
            <a href="#projects">Explore Our Projects</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
