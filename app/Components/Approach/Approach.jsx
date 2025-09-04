'use client'
import React from "react";
import Image from "next/image";
import vector1 from "../../../public/Allimages/approach/vector.png";
import vector2 from "../../../public/Allimages/approach/vector2.png";
import vector3 from "../../../public/Allimages/approach/vector3.png";
import vector4 from "../../../public/Allimages/approach/vector4.png";
import vector5 from "../../../public/Allimages/approach/vector5.png";
import vector6 from "../../../public/Allimages/approach/vector6.png";
import styles from "../AssistComp/AssistComp.module.css";
import { useTranslation } from 'react-i18next';

export default function Approach() {
  const { t } = useTranslation("global");

  const approach = [
    { text: t("aiPage.approach.p1"), vector: vector1 },
    { text: t("aiPage.approach.p2"), vector: vector2 },
    { text: t("aiPage.approach.p3"), vector: vector3 },
    { text: t("aiPage.approach.p4"), vector: vector4 },
    { text: t("aiPage.approach.p5"), vector: vector5 },
    { text: t("aiPage.approach.p6"), vector: vector6 },
  ];

  return (
    <div className="container my-32">
      <div className="row">
        <h3 className={`text-center my-14 ${styles.assistTitle}`}>
          {t("aiPage.approach.header")}
        </h3>

        {approach.map(({ text, vector }, idx) => (
          <div key={idx} className="col-lg-4 col-md-6 my-5">
            <div className="innerCol flex flex-col items-center">
              <Image
                src={vector}
                alt={`approach vector ${idx + 1}`}
                className="mb-4"
              />
              <p className="text-center text-white">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
