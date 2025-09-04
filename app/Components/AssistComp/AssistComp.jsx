import React from "react";
import styles from "./AssistComp.module.css";
import Image from "next/image";
import AssistImage from "../../../public/Allimages/AssistImages/AI image.png";
import { useTranslation } from "react-i18next";

export default function AssistComp() {
  const { t, i18n } = useTranslation("global");
  return (
    <div className="container">
        <h3 className={`${styles.assistTitle} text-center  mb-6 `}>
          {`${t("aiPage.assist.header")}`}{" "}
        </h3>
      <div className={`flex justify-between ${i18n.language === "ar" ? "flex-row-reverse dir list-none" : ""}`}>

        <div className="w-[50%] ">
          <div className="innerCol">
            <p className={`${styles.assist_paragraph1} text-white  `}>{`${t(
              "aiPage.assist.title"
            )}`}</p>
            <ul className={` ps-5 ${styles.assist_ul} ${i18n.language === "ar" ? " list-none " : ""} `}>
              <li>{`${t("aiPage.assist.p1")}`}</li>
              <li>{`${t("aiPage.assist.p2")}`}</li>
              <li>{`${t("aiPage.assist.p3")}`}</li>
              <li>{`${t("aiPage.assist.p4")}`}</li>
              <li>{`${t("aiPage.assist.p5")}`}</li>
              <li>{`${t("aiPage.assist.p6")}`}</li>
              <li>{`${t("aiPage.assist.p7")}`}</li>
              <li>{`${t("aiPage.assist.p8")}`}</li>
              <li>{`${t("aiPage.assist.p9")}`}</li>
            </ul>
          </div>
        </div>

        <div className={`   ${styles.assist_child2} `}>
          <div className="innerCol">
            <Image
              src={AssistImage}
              alt="Assist image"
              className={`${styles.assist_Image}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
