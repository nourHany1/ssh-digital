"use client";
import React from "react";
import Studies from "../Components/Studies/Studies";
import studies4 from "../../public/Allimages/studies/studies4.png";
import studies5 from "../../public/Allimages/studies/studies5.png";
import studies1 from "../../public/Allimages/studies/studies1.jpg";
import styles from "./Projects.module.css";
import clientImage from "../../public/Allimages/projects/image 6.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation("global");
  return (
    <div className={` container py-5 rounded-lg `}>
      <div className={`my-10 py-5 ${i18n.language === 'ar' ? 'flex-row-reverse dir' : ''} flex justify-between`}>
        <div className="col-lg-6">
          <div className="innerCol">
            <Image src={clientImage} alt="clientImage" className="w-100" />
          </div>
        </div>

        <div className="col-lg-6 flex items-center justify-center ">
          <div className="innerCol text-center ">
            <h2 className={styles.projTitle}>
              {t("projects.h1")} <br />{" "}
              <span style={{ color: "var(--main_fontColor)" }}>{t("projects.h2")}</span>{" "}
              {t("projects.h3")}
            </h2>
            <p className={styles.subTitle}>
            {t("projects.p1")} <br /> {t("projects.p2")}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="row py-5 rounded-lg" style={{ background: "#231837" }}>
        <Studies
          hideBTN={false}
          sectionName={"projects"}
          image1={studies4}
          image2={studies1}
          image3={studies4}
        />
        <Studies
          hideBTN={false}
          sectionName={"projects"}
          image1={studies4}
          image2={studies1}
          image3={studies4}
        />
        <Studies
          hideBTN={true}
          sectionName={"projects"}
          image1={studies4}
          image2={studies1}
          image3={studies4}
        />
      </div>
    </div>
  );
}
