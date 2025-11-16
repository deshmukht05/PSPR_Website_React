import { motion } from "framer-motion";
import { useRef } from "react";

export const TeamData = ({ data }) => {
  const { position, name, info, years } = data;
  const { scrollRef } = useRef(null);

  return (
    <motion.div
      className="team-d-i"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.8 }}
    >
      <div className="team-d-img">
        <img src="" alt={name} />
      </div>

      <div className="team-info-d">
        <div className="team-d-po">
          <p>{position}</p>
        </div>

        <div className="team-b-i">
          <h1>{name}</h1>
          <p>{info}</p>
          <p className="team-y">{years}</p>
        </div>
      </div>
    </motion.div>
  );
};
