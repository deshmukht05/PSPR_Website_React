import { IconContext } from "react-icons";
import { MdOutlineLocationOn, MdOutlineDateRange } from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";

export const UpComingData = ({ props }) => {
  const { heading, location, year, scope, rule, expected, note } = props;
  const {scrollRef} = useRef(null);

  return (
    <motion.li
      className="project-info"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.8 }}
    >
      <div className="p-heading">
        <h1 className="p-h">{heading}</h1>
        <p className="p-y">
          <div className="p-l">
            <IconContext.Provider value={{ color: "#a6ce38", size: "1.2rem" }}>
              <MdOutlineLocationOn />
            </IconContext.Provider>
            {location}
          </div>
          <div className="p-l">
            <IconContext.Provider value={{ color: "#a6ce38", size: "1.2rem" }}>
              <MdOutlineDateRange />
            </IconContext.Provider>
            {year}
          </div>
        </p>
      </div>

      <div className="p-col-1">
        <div className="p-o">
          <h1>Scope</h1>
          <p>{scope}</p>
        </div>
        <div className="p-m">
          <h1>PSPR's Role</h1>
          <p>{rule}</p>
        </div>
      </div>

      <div className="p-col-2">
        <div className="p-ot">
          <h1>Expected Deliverables</h1>
          <p>{expected}</p>
        </div>
      </div>

      <p className="p-n">Note: {note} </p>
    </motion.li>
  );
};
