"use client";

import styles from "./page.module.css";
import CustomSpinner from "@/components/atom/spinner";
import DocSpecHeader from "@/components/molecule/doc-spec-header";
import ServiceList from "@/components/organism/service-list";
import MainContainer from "@/containers/main-container";
import ScrollContainer from "@/containers/scroll-container";
import useApiController from "@/controllers/apiController";
import { apiSelector } from "@/models/apiModel";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

const APIPage = () => {
  const api = useRecoilValue(apiSelector);

  const { retrievePostmanService } = useApiController();

  useEffect(() => {
    retrievePostmanService();
  }, []);

  return (
    <MainContainer containerStyles={styles.mainContainer}>
      {api.loading ? (
        <CustomSpinner />
      ) : (
        <ScrollContainer scrollContainerStyles={styles.container}>
          <DocSpecHeader
            title={api.data.title}
            description={api.data.description}
          />

          <ServiceList serviceData={api.data.services} />
        </ScrollContainer>
      )}
    </MainContainer>
  );
};

export default APIPage;
