import React from "react";
import styles from "../AssistComp/AssistComp.module.css";
import Image from "next/image";
import assist2Image from "../../../public/Allimages/Assist2/image.png";
import { useTranslation } from "react-i18next";

export default function AssistCyrcle({ srcImage, altImage, text }) {
  const { t, i18n } = useTranslation("global");
  return (
    <div className="container my-44 ">
      <div className={`flex justify-between ${i18n.language === 'ar' ? 'flex-row-reverse dir' : ''}`}>
        <div className="w-[50%]">
          <div className="innerCol">
            <p className={`${styles.assist_paragraph1} text-white  `}>{text}</p>
            <ul className={` ps-5 ${styles.assist_ul} `}>
              <li>{t("sw.p-1")}</li>
              <li>{t("sw.p-2")}</li>
              <li>{t("sw.p-3")}</li>
              <li>{t("sw.p-4")}</li>
              <li>{t("sw.p-5")}</li>
              <li>{t("sw.p-6")}</li>
              <li>{t("sw.p-7")}</li>
              <li>{t("sw.p-8")}</li>
              <li>{t("sw.p-9")}</li>
            </ul>
          </div>
        </div>

        <div
          className="  flex justify-center py-5 "
          style={{
            background: " radial-gradient(circle, #e7267a5e 21%, #010e28 65%)",
          }}
        >
          <div className="innerCol  flex justify-center ">
            <Image src={srcImage} alt={altImage} className="w-75" />
          </div>
        </div>
      </div>
    </div>
  );
}
