"use client"
import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import styles from './Navbar.module.css';

export default function Navbar() {
  const { t, i18n } = useTranslation("global");
  const drowpDownRef = useRef();
  const navLinks = [
    { title: t("navBar.home"), path: "/" },
    { title: t("navBar.services"), path: "/Services" },
    { title: t("navBar.projects"), path: "/Projects" },
    { title: t("navBar.contactUs"), path: "/ContactUs" },
  ];

  const changeLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    Cookies.set("lang", newLang);
  };

  const pathname = usePathname();
  const navContet = useRef(null);
  const barsIcon = useRef(null);
  const close_x = useRef(null);

  const showSidebar = () => {
    navContet.current.style.transform = 'translateX(0%)';
    close_x.current.style.display = "block";
    barsIcon.current.style.display = "none";
  };

  const hideSidebar = () => {
    navContet.current.style.transform = 'translateX(100%)';
    close_x.current.style.display = "none";
    barsIcon.current.style.display = "block";
  };

  const isArabic = i18n.language === "ar";
  
  const showDrowbDown = (title) => {
    const serviceTitle = isArabic ? "الخدمات" : "Services";
    if (title === serviceTitle && drowpDownRef.current) {
      drowpDownRef.current.classList.add("animate__animated", "animate__backInDown");
      drowpDownRef.current.classList.remove('d-none');
    }
  };

  const hideDrowbDown = (title) => {
    const serviceTitle = isArabic ? "الخدمات" : "Services";
    if (title === serviceTitle && drowpDownRef.current) {
      drowpDownRef.current.classList.add('d-none');
    }
  };

  return (
    <nav className={`fixed-top flex items-center justify-between container mt-2 ${styles.nav} ${isArabic ? styles.ltr : ''}`} style={{ backgroundColor: "rgba(1, 14, 40, 1)" }}>
      <div>
        <h1 className="text-white mb-0">SSH Digital</h1>
      </div>

      <div ref={navContet} className={`flex justify-between ${styles.navContent} `}>
        <ul className={`${styles.navContent_ul} m-0 p-0 flex links ${isArabic ? styles.ltr : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className={`mx-3 ${link.title === t("navBar.services") ? 'relative' : ""} ${styles.navContent_ul_li}`}>
              <div onMouseMove={() => { showDrowbDown(link.title) }} onMouseLeave={() => { hideDrowbDown(link.title) }}>
                <Link href={link.path} className={`${styles.navLink} text-[#a4a8b2] no-underline ${pathname === link.path ? styles.active : ""}`}>{link.title}</Link>
                {link.title === t("navBar.services") && (
                  <div>
                    <ul ref={drowpDownRef} className={`w-56 py-4 mt-0 rounded-lg px-3 d-none ${styles.drowpDown} relative`} style={{ position: "absolute", left: isArabic ? 'auto' : "0", right: isArabic ? '0' : 'auto', background: "#ffffff1a", zIndex: "5" }}>
                      <li className="my-2 py-1 px-3 rounded-md" style={{ background: "var(--main_fontColor)" }}>
                        <Link className="text-white no-underline" href={'/Ai'}>{t("navBar.ai")}</Link>
                      </li>
                      <li className="my-2 py-1 px-3 rounded-md" style={{ background: "var(--main_fontColor)" }}>
                        <Link className="text-white no-underline" href={'/MainSoftWareDev'}>{t("navBar.softWare")}</Link>
                      </li>
                      <li className="my-2 py-1 px-3 rounded-md" style={{ background: "var(--main_fontColor)" }}>
                        <Link className={`text-white no-underline `} href={'/MainSmartHome'}>{t("navBar.smart")}</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className={`mx-2 flex items-center justify-center ${styles.mainIconsNav1}`}>
          <i className="fa-solid fa-earth-americas ps-3 text-white fa-xl" onClick={changeLanguage}></i>
          <span className={`ps-2 text-[18px] text-white ${styles.AR}`}>{isArabic ? 'AR' : 'EN'}</span>
        </div>

        <div className={`${styles.ToggleIcon}`} style={{ display: "none" }}>
          <i ref={barsIcon} className={`fa-solid fa-bars text-white fa-2xl ${styles.barsIcon}`} onClick={showSidebar}></i>
          <i ref={close_x} className={`${styles.x_close} fa-regular fa-circle-xmark text-white fa-2xl`} onClick={hideSidebar} style={{ display: "none" }}></i>
        </div>
      </div>

      <div className={`mx-2 flex items-center justify-center ${styles.mainIconsNav2}`} onClick={changeLanguage}>
        <i className="fa-solid fa-earth-americas ps-3 text-white fa-xl cursor-pointer"></i>
        <span className={`ps-2 text-[18px] text-white ${styles.AR} cursor-pointer`}>{i18n.language === "ar" ? "AR" : "EN"}</span>
      </div>
    </nav>
  );
}
