import "../css/Team.css";
import teamMemberInfo from "../api/teamMemberInfo.json";
import { TeamData } from "./TeamData";

export const OurTeam = () => {
  return (
    <div className="team" id="team">
      <div className="team-heading">
        <h1>Our Team</h1>
        <span className="underline"></span>
        <p>Meet the visionary leaders driving PSPR's mission and success</p>
      </div>

      <div className="team-m-1">
        <div className="team-i">
          <img src="" alt="Abhipsa" />
        </div>

        <div className="team-d">
          <div className="team-po">
            <p>CEO & Founder</p>
          </div>
          <div className="team-info">
            <h1>Abhipsa S.</h1>
            <p>
              Abhipsa S. founded PSPR with a passion for leveraging data to
              drive democratic processes. His expertise in political consulting
              and elections has led to partnerships with political leaders
              across multiple regions. Under his guidance, PSPR has pioneered
              innovative tools like AI-based voter prediction models.
            </p>
            <p className="team-y">8+ years in political consulting</p>
          </div>
          <div className="team-quote">
            <p>
              Politics is about people—our research ensures strategies reflect
              real voices.
            </p>
          </div>
        </div>
      </div>
      
      <div className="team-r-d">
        <ul className="team-po-1">
          {teamMemberInfo.map((curEle, id) => (
            <TeamData key={id} data={curEle} />
          ))}
        </ul>
      </div>
    </div>
  );
};
