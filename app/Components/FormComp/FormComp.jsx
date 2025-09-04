import React from "react";
import styles from "./FormComp.module.css";
import BtnComp from "../BtnComp/BtnComp";
import { useTranslation } from 'react-i18next'

export default function FormComp({ sectionName }) {
  const {t, i18n} = useTranslation("global")
  return (
    <div className={`container mt-32 `}>
      <form className={`row `}>
        {sectionName === "contactUs" ? (
          <h2 className={`px-5 pb-4 ${styles.formTitle} ${i18n.language === 'ar' ? 'dir' : ''}`}>
            {t("contact.header")} <span className={styles.formSubTitle}>{t("contact.span")}</span>
          </h2>
        ) : (
          ""
        )}

        <div className="col-lg-6 px-5 my-3 ">
          <label className={`  ${styles.inpLabel} my-2 `} htmlFor="yourName">
          {t("contact.name")}{" "}
            {sectionName === "contactUs" ? (
              <i className="fa-solid fa-star-of-life text-[12px] text-[#e7267a] "></i>
            ) : (
              ""
            )}{" "}
          </label>
          <input
            id="yourName"
            type="text"
            className={`py-3 px-4 w-100 border border-white rounded-lg ${styles.formInp} `}
            placeholder={t("contact.name")}
            style={{ backgroundColor: "unset" }}
          />
        </div>

        <div className="col-lg-6 text-end px-5 my-3 ">
          <label
            className={`  ${styles.inpLabel} my-2 text-start w-100 `}
            htmlFor="yourEmail"
          >
            {t("contact.email")}{" "}
            {sectionName === "contactUs" ? (
              <i className="fa-solid fa-star-of-life text-[12px] text-[#e7267a] "></i>
            ) : (
              ""
            )}{" "}
          </label>
          <input
            id="yourEmail"
            type="text"
            className={`py-3 px-4 w-100 border border-white rounded-lg ${styles.formInp}`}
            placeholder={t("contact.email")}
            style={{ backgroundColor: "unset" }}
          />
        </div>

        <div className="col-lg-6 px-5 my-3 ">
          <label className={`  ${styles.inpLabel} my-2 `} htmlFor="phone">
          {t("contact.phone")}{" "}
            {sectionName === "contactUs" ? (
              <i className="fa-solid fa-star-of-life text-[12px] text-[#e7267a] "></i>
            ) : (
              ""
            )}{" "}
          </label>
          <input
            id="phone"
            type="text"
            className="py-3 px-4 w-100 border border-white rounded-lg "
            placeholder={t("contact.phone")}
            style={{ backgroundColor: "unset" }}
          />
        </div>

        <div className={`col-lg-6 text-end px-5 my-3 ${i18n.language === 'ar' ? 'dir' : ''}`}>
          <label
            className={`  ${styles.inpLabel} my-2 text-start w-100 `}
            htmlFor="companyName"
          >
            {t("contact.companyName")}
          </label>
          <input
            id="companyName"
            type="text"
            className="py-3 px-4 w-100 border border-white rounded-lg "
            placeholder={t("contact.companyName")}
            style={{ backgroundColor: "unset" }}
          />
        </div>

        {sectionName != "contactUs" ? (
          <>
            <div className="col-lg-6 px-5 my-3 ">
              <label
                className={`  ${styles.inpLabel} my-2 `}
                htmlFor="companyField"
              >
                {t("contact.companyField")}
              </label>
              <input
                id="companyField"
                type="text"
                className="py-3 px-4 w-100 border border-white rounded-lg "
                placeholder={t("contact.companyField")}
                style={{ backgroundColor: "unset" }}
              />
            </div>
            <div className="col-lg-6 text-end px-5 my-3 ">
              <label
                className={`  ${styles.inpLabel} my-2 text-start w-100 `}
                htmlFor="companySize"
              >
                {t("contact.companySize")}{" "}
              </label>
              <input
                id="companySize"
                type="text"
                className="py-3 px-4 w-100 border border-white rounded-lg "
                placeholder={t("contact.companySize")}
                style={{ backgroundColor: "unset" }}
              />
            </div>
          </>
        ) : (
          ""
        )}

        <div className="px-5 my-3 ">
          <label className={`  ${styles.inpLabel} my-2 `} htmlFor="message">
          {t("contact.message")}
          </label>
          <textarea
            name="Message"
            id="Message"
            className="py-3 px-4 w-100 border border-white rounded-lg "
            placeholder={`${t("contact.message")}...`}
            style={{
              backgroundColor: "unset",
              maxHeight: "260px",
              minHeight: "210px",
            }}
          ></textarea>
        </div>

        <div className="text-center">
          {" "}
          <BtnComp text={t("contact.btn")} />
        </div>
      </form>
    </div>
  );
}
