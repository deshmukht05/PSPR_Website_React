import { IconContext } from "react-icons";
import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";

export const ProjectData = ({ data }) => {
  const { heading, location, year, objective, methodology, outcome, results } =
    data;

  return (
    <li className="project-info">
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
          <h1>Objective</h1>
          <p>{objective}</p>
        </div>
        <div className="p-m">
          <h1>Methodology</h1>
          <p>{methodology}</p>
        </div>
      </div>

      <div className="p-col-2">
        <div className="p-ot">
          <h1>Outcomes</h1>
          <p>{outcome}</p>
        </div>
        <div className="p-r">
          <h1>Results</h1>
          <p>{results}</p>
        </div>
      </div>
    </li>
  );
};
