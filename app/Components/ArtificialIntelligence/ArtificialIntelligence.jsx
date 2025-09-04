"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";

import styles from "./ArtificialIntelligence.module.css";
import { useTranslation } from "react-i18next";

export default function ArtificialIntelligence({
  first_mainTitle,
  first_mainTitle2,
  first_paragraph,
  first_btnText,
  first_image_1,
  first_image_2,
  first_image_3,
  sectionName,
}) {
  const { t, i18n } = useTranslation("global");
  const child2 = useRef("");
  const [gradiant, setGradiant] = useState("");

  useEffect(() => {
    sectionName === "softwareDev"
      ? (child2.current.style.background =
          "radial-gradient(circle, #e7267a5e 28%, #010e28c9 63%)")
      : "";
    sectionName === "DigitalTransformation"
      ? (child2.current.style.background =
          "radial-gradient(circle, #e7267a3d 42%, #010e28 72%)")
      : "";

    first_mainTitle === "Smart Home"
      ? setGradiant(
          "radial-gradient(circle, rgb(231 38 122 / 25%) 37%, rgb(1, 14, 40) 73%)"
        )
      : setGradiant("");
  });

  return (
    <div className={` container text-white ${styles.Artificial_Intelligence} `}>
      <div className={`flex justify-between ${i18n.language === 'ar' ? ' flex-row-reverse dir' : ''}`}>
        <div
          className={`${styles.child1} w-[50%]`}
          style={{ background: gradiant }}
        >
          <h2 className={styles.Artificial_Intelligence_h2}>
            {first_mainTitle}{" "}
            <span className={`${styles.Artificial_Intelligence_span}`}>
              {first_mainTitle2}
            </span>{" "}
          </h2>
          <p className={styles.Artificial_Intelligence_p}>{first_paragraph} </p>
          <button
            className={`${styles.Artificial_Intelligence_button} px-5 py-3 rounded-md mt-3`}
          >
            {first_btnText}
          </button>
        </div>

        <div
          ref={child2}
          className={`${styles.child2}     `}
        >
          <div className={`${styles.roundedBorder} relative `}>
            <Image
              src={first_image_1.src}
              alt={first_image_1.alt}
              className={`m-auto `}
            />
            <Image
              src={first_image_2.src}
              alt={first_image_2.alt}
              className={` ${styles.cyrcleImage}`}
              style={{
                position: "absolute",
                left: "52%",
                top: "43%",
                translate: "-50% -50%",
              }}
            />
            <Image
              src={first_image_3.src}
              alt={first_image_3.alt}
              className={` ${styles.stars}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
