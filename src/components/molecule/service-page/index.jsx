import styles from "./index.module.css";
import ServiceBody from "@/components/atom/service-body";
import ServiceExample from "@/components/atom/service-example";
import ServiceItemHeader from "@/components/atom/service-item-header";
import React from "react";

const ServicePage = ({ serviceData }) => {
  return (
    <div className={styles.container}>
      <ServiceItemHeader
        title={serviceData.title}
        method={serviceData.method}
        url={serviceData.url}
      />

      <ServiceBody title="Body" bodyData={serviceData.body} />

      {serviceData.responses.length > 0 && (
        <ServiceExample responseData={serviceData.responses} />
      )}
    </div>
  );
};

export default ServicePage;
