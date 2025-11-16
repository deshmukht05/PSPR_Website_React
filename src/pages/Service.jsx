import "../css/Service.css";
import serviceData from "../api/serviceData.json";
import { ServiceData } from "./ServiceData";

export const Services = () => {
  return (
    <div className="service" id="services">
      <div className="service-heading">
        <h1>Our <span>Services</span></h1>
        <span className="underline"></span>
        <p>
          Comprehensive political consulting services tailored to your electoral
          success
        </p>
      </div>
      <ul className="service-align">
        {serviceData.map((curEle) => (
          <ServiceData key={serviceData.id} serviceData={curEle} />
        ))}
      </ul>
    </div>
  );
};
