import ServicePage from "@/components/molecule/service-page";
import styles from "./index.module.css";
import React from "react";

const ServiceList = ({ serviceData }) => {
  return (
    <div className={styles.container}>
      {serviceData.map((item, index) => (
        <ServicePage key={index.toString()} serviceData={item} />
      ))}
    </div>
  );
};

export default ServiceList;
