import '../css/Home.css';

export const Home = () => {
  return (
    <div className="home-content">
      <div className="small-headline">
        <p>Leading Political Consultancy</p>
      </div>
      <div className="heading">
        <h1>
          Shaping Political Futures Through <br /> <span>Strategic Research</span> and Insight
        </h1>
        <p>
          PSPR is a leading consultancy in political strategy, offering data-driven research, <br /> campaign planning, voter analysis, and predictive modeling for elections worldwide.
        </p>
        <div className="explore-button">
          <button><a href="#projects">Explore Our Projects</a></button>
        </div>
      </div>
    </div>
  );
};
