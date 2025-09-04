import React from "react";
import { useTranslation } from "react-i18next";

const FixedCenterComponent = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div
      className={`m-12 ${i18n.language === 'ar' ? '-right-12' : ''}`}
      style={{
        position: "fixed",
        top: "53%",
        zIndex: "9999",
        transform: "translate(-50%, -50%)",
      }}
    >
      
      <a
        href="https://wa.me/201016585607"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/whatsappfexed.png"
          alt="Whatsapp"
          style={{ width: "50px", marginRight: "10px", paddingTop: "10px" }}
        />
      </a>

      <br />

      <a href="" target="_blank" rel="noopener noreferrer">
        <img
          src="/phone-call (1).png" 
          alt="Phone"
          style={{ width: "50px" }}
        />
      </a>
    </div>
  );
};

export default FixedCenterComponent;
