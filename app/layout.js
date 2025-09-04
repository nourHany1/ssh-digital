"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/page";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/page";
import logo from "../public/Allimages/Logo.png";
import Icons from "./Components/FixedCenterComponent/FixedCenterComponent";
import "animate.css";
import global_en from "./translation/en/global.json";
import global_ar from "./translation/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";


i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: { global: global_en },
    ar: { global: global_ar },
  },
});

export default function RootLayout({ children }) {
  return (
    <I18nextProvider i18n={i18next}>
    
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <title>Alarab Soft</title>
      </head>

      <body className=" " style={{ backgroundColor: "rgba(1, 14, 40, 1)" }}>
        <Navbar />
        <Icons />

        <div className="pt-16">{children}</div>

        <Footer />
      </body>
    </html>
  </I18nextProvider>
  );
}
