export const ServiceData = ({ serviceData }) => {
  const { image, heading, paragraph } = serviceData;

  return (
    <li className="services-types">
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
    </li>
  );
};
