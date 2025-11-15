export const TeamData = ({ data }) => {
  const { position, name, info, years } = data;

  return (
    <div className="team-d-i">
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
      
    </div>
  );
};
