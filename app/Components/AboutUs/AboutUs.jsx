import React from "react";
import glassOfMan from "../../../public/Allimages/Rectangle 36.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";


export default function AboutUs({
  sectionName,
  title,
  textImage,
  srcImage,
  altImage,
  className,
}) {
  const {t,i18n} = useTranslation('global')
  const AboutText = (
    <div className={`about ps-5 xl:col-span-2 ${className}`}>
      {title ? (
        <h3 className={`aboutUs forMiniMize mb-[-22px] ${i18n.language === 'ar' ? 'translate-x-[80%]' : ''}`}>{title}</h3>
      ) : (
        ""
      )}
      <p className={`forMiniMize2 pt-5 ${i18n.language === 'ar' ? 'dir pr-9' : ''}`}>{textImage}</p>
    </div>
  );

  const ImageAbout = (
    <div className="imgAbout">
      <Image className=" w-[100%] h-80" alt={altImage} src={srcImage} />
    </div>
  );

  // function renderJSX () {

  //   if(sectionName==='Services') {

  //   }

  // }

  return (
    <section className="  container section2 mt-24 lg:px-8 xl:px-10 md:px-36 sm:px-24 ">
      <div className=" grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 text-white rounded-lg overflow-hidden ">
        {sectionName === "Services" || i18n.language === 'ar' ? (
          <>
            {AboutText} {ImageAbout}
          </>
        ) : (
          <>
            {" "}
            {ImageAbout} {AboutText}
          </>
        )}

        {/* {AboutText} {ImageAbout} */}
      </div>
    </section>
  );
}
