import "../css/Service.css";
import serviceData from "../api/serviceData.json";
import { ServiceData } from "./ServiceData";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Services = () => {
  const { scrollRef } = useRef(null);

  return (
    <div className="service" id="services">
      <motion.div
        className="service-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Our <span>Services</span>
        </h1>
        <span className="underline"></span>
        <p>
          Comprehensive political consulting services tailored to your electoral
          success
        </p>
      </motion.div>

      <ul className="service-align">
        {serviceData.map((curEle) => (
          <ServiceData key={serviceData.id} serviceData={curEle} />
        ))}
      </ul>
    </div>
  );
};
