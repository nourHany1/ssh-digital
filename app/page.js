"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useFormik } from "formik";
import lineStyle from "../public/Allimages/Vector33.png";

import firstOfFifeIcon from "../public/Allimages/fifeIcons/Vector.png";
import thecondOfFifeIcon from "../public/Allimages/fifeIcons/Frame 2.png";
import thirdOfFifeIcon from "../public/Allimages/fifeIcons/Frame 3.png";
import fourthOfFifeIcon from "../public/Allimages/fifeIcons/Frame 4.png";
import fifthOfFifeIcon from "../public/Allimages/fifeIcons/Frame 5.png";

import EarthImg from "../public/Allimages/7.png";
import freelancerImg from "../public/Allimages/Iamge.png";

import cyrcleImage1 from "../public/Allimages/Clinetes/1.png";
import cyrcleImage2 from "../public/Allimages/Clinetes/2.png";
import cyrcleImage3 from "../public/Allimages/Clinetes/Ellipse74.png";
import imageQuote from "../public/Allimages/quote-right.png";

import BtnComp from "./Components/BtnComp/BtnComp";
import AboutUs from "./Components/AboutUs/AboutUs";

import glassOfMan from "../public/Allimages/Rectangle 36.png";

import { explore } from "./Api/page";

import { useTranslation } from "react-i18next";

export default function Home({}) {
  const { t, i18n } = useTranslation("global");
  const [allLogos, setAllLogos] = useState([]);
  const [latest, setLatest] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [slides, setSlides] = useState([]);
  const isArabic = i18n.language === 'ar'

  useEffect(() => {
    fetchData()
      .then((result) => {
        setSlides(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []);
    
  const fetchData = async () => {
    try {
      const response = await explore();
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);

      return [];
    }
  };

  const handleSlideChange = (id) => {
    const updatedSlides = slides.map((slide) => {
      if (slide.id === id) {
        return { ...slide, isOpen: !slide.isOpen }; // Toggle isOpen property
      }
      return { ...slide, isOpen: false }; // Close all other slides
    });
    setSlides(updatedSlides);
  };

  async function getLatestProjects() {
    setIsLoading(true);

    const res = await fetch("https://ssh.mqawilk.com/api/projects/page/index");
    return res;
  }

  if (isLoading) {
    return (
      <div className="vh-100  d-flex justify-content-center align-items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperclassName="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }


  if (!isLoading) {
    return (
      <div>
        <section className={`  container p-0 HomeSection mt-16 ${isArabic ? 'rtl' : ''}  `}>
        <div className={`grid lg:grid-cols-2 sm:grid-cols-1 text-white `}>

            <div className="me-2 md:text-center ">
              <h2 className="homeTitle mb-7  forMiniMize ">
                {t("homePage.welcome")}
              </h2>

              <div className="w-full ">
                {" "}
                <Image
                  src={lineStyle}
                  alt=" Vector error"
                  className="mb-5 w-full "
                />
              </div>
              <p className="paragraph1 mb-5 forMiniMize2">
                {t("homePage.title")}
              </p>

              <div className="flex justify-start">
                {" "}
                <input
                  type="text"
                  className="w-64  p-3 rounded-full inp_1 "
                  placeholder={t("homePage.input")}
                />
              </div>
            </div>
            <div className=" ms-2 flex items-center justify-end Earth rounded-full">
              <Image src={EarthImg} alt="EarthImg" />
            </div>
          </div>

          <div className={`fifeIcons items-center w-full grid  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-3 sm:gap-y-5 ${isArabic ? 'rtl' : ''}`}>
            <div className="icon-1 flex items-center justify-center sm:mt-7   ">
              {" "}
              <Image
                className="me-1"
                src={firstOfFifeIcon}
                alt="logo of our site"
              />{" "}
              <span className="text-white">PRISM</span>{" "}
            </div>

            <div className="icon-5 flex items-center justify-center logoMinMize ">
              {" "}
              <Image
                className="me-1"
                src={thecondOfFifeIcon}
                alt="thecondOfFifeIcon"
              />{" "}
              <span className="text-white">IXON</span>{" "}
            </div>
            <div className="icon-2 flex items-center justify-center logoMinMize ">
              {" "}
              <Image
                className="me-1"
                src={fifthOfFifeIcon}
                alt="fifthOfFifeIcon"
              />{" "}
              <span className="text-white">GammaLap</span>{" "}
            </div>
            <div className="icon-3 flex items-center justify-center logoMinMize ">
              {" "}
              <Image
                className="me-1"
                src={fourthOfFifeIcon}
                alt="fourthOfFifeIcon"
              />{" "}
              <span className="text-white">O-Chip</span>{" "}
            </div>
            <div className="icon-4 flex items-center justify-center logoMinMize ">
              {" "}
              <Image
                className="me-1"
                src={thirdOfFifeIcon}
                alt="thirdOfFifeIcon"
              />{" "}
              <span className="text-white">Internus</span>{" "}
            </div>

            {allLogos.map((element, index) => (
              <div
                key={index}
                className="icon-4 flex items-center justify-center mt-3 logoMinMize "
              >
                <Image
                  width={62}
                  height={37}
                  className="me-1 w-20 h-20 "
                  src={`${element.logo}`}
                  alt={`${element.alt}`}
                />{" "}
                <span className="text-white">{element.name}</span>{" "}
              </div>
            ))}
          </div>
        </section>

        <AboutUs
          className={`${i18n.language === 'ar' ? ' align-middle' : ''}`}
          sectionName="Home"
          title={t("aboutComponent.header")}
          textImage={t("aboutComponent.title")}
          srcImage={glassOfMan}
          altImage={"glassOfMan"}
        />

        <div className={`fourRating grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28 ${isArabic ? 'rtl' : ''}`}>
          <div className="rating flex flex-col ">
            {" "}
            <span className="num">782</span>{" "}
            <span className="text-white textNum">{t("clients")} </span>{" "}
          </div>
          <div className="rating flex flex-col ">
            {" "}
            <span className="num">782</span>{" "}
            <span className="text-white textNum">{t("completedProjects")} </span>{" "}
          </div>
          <div className="rating flex flex-col ">
            {" "}
            <span className="num">782</span>{" "}
            <span className="text-white textNum">{t("itProjects")} </span>{" "}
          </div>
          <div className="rating flex flex-col ">
            {" "}
            <span className="num">782</span>{" "}
            <span className="text-white textNum">{t("sendingProjects")} </span>{" "}
          </div>
        </div>

        <div className={`solution container mt-36 text-white ${isArabic ? 'rtl' : ''}`}>
          <div className="sol_info mr-8">
            <h3>{t("solutionsComponent.header")}</h3>
            <p className="work_p_3 forMiniMize2 mb-5">
              {t("solutionsComponent.title")}
            </p>
          </div>
          <ul className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1  md:grid-cols-2 text-center gap-4 mr-9 text-lg">
            <li className="p-9 list-item bg-pink-600 ">
            {t("solutionsComponent.enterprise")}
            </li>
            <li className="p-9 list-item bg-pink-600 ">{t("solutionsComponent.erb")}</li>
            <li className="p-9 list-item bg-pink-600 ">{t("solutionsComponent.crm")}</li>
            <li className="p-9 list-item bg-pink-600 ">{t("solutionsComponent.hr")}</li>
          </ul>
          <ul className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 text-center gap-4 mt-4 mb-4 mr-9 text-lg">
            <li className="p-9 text-center list-item bg-pink-600 ">
            {t("solutionsComponent.ecommerce")}
            </li>
            <li className="p-9 text-center list-item bg-pink-600 ">
            {t("solutionsComponent.elearning")}
            </li>
            <li className="p-9 text-center list-item bg-pink-600 ">
            {t("solutionsComponent.mobile")}
            </li>
            <li className="p-9 text-center list-item bg-pink-600 ">
            {t("solutionsComponent.collaboration")}
            </li>
          </ul>
          <ul className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 text-center gap-4 mr-9 text-lg">
            <li className="p-9 text-center list-item bg-pink-600 ">
            {t("solutionsComponent.fleet")}
            </li>
            <li className="p-9 text-center list-item bg-pink-600 ">
            {t("solutionsComponent.data")}
            </li>
            <li className="p-9 text-center list-item bg-pink-600 ">
            {t("solutionsComponent.web")}
            </li>
            <li className="p-9 text-center list-item bg-pink-600 ">{t("solutionsComponent.itsm")}</li>
          </ul>
        </div>

        <section className={` container workingTeam  grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-28 lg:px-8 xl:px-10 md:px-36 sm:px-24  ${isArabic ? 'rtl' : ''}`}>
          <div className="textWorking flex flex-col justify-center ">
            <p className="work_p_1">{t("whatWeDo.header")}</p>
            <p className="work_p_2 forMiniMize">
            {t("whatWeDo.title1")}
            </p>
            <p className="work_p_3 forMiniMize2 ">
            {t("whatWeDo.title2")}
            </p>
          </div>

          <div className=" ">
            <div className="p-4 pe-8 imgWorking">
              <Image
                src={freelancerImg}
                className="w-[90%]"
                alt="freelancerImg"
              />
            </div>
          </div>
        </section>

        <div className="text-white hidden md:block">
          <div className=" text-center">
            <h3 className="mt-10 mb-4 work_p_2 text-center forMiniMize !tracking-wider">
              {t("softwareComponent.header")}
            </h3>
            <p className="tracking-wide text-[#ffffff5e]">
            {t("softwareComponent.history")}
            </p>
          </div>
          <h5 className={`work_p_1 container mb-5 ${isArabic ? 'dir' : ''}`}>
          {t("softwareComponent.title")}
          </h5>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="grid grid-cols-2 relative container "
            >
              <div className="bg-[#0c1933] w-80">
                <h4
                  className={`mb-10 pl-4 ${slide.isOpen ? "active" : ""} ${
                    index === 0 ? "pt-3" : ""
                  }  relative`}
                  onClick={() =>
                    !slide.isOpen ? handleSlideChange(slide.id) : ""
                  }
                >
                  {slide.name.en}
                </h4>
              </div>

              {slide.isOpen && (
                <div
                  style={{ top: `${index * -70}px` }}
                  className={`absolute w-1/2 right-0`}
                >
                  <p className="work_p_3">{slide.name.en}</p>
                  <p className="text-[#ffffffb5] leading-7 tracking-wider">
                    {slide.description.en}
                  </p>
                  <ul>
                    {slide.list.en?.map((item, index) => (
                      <li
                        className=" mb-3 list-[square] marker:text-[#E7267A]"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className={`container clinetes mt-40 ${isArabic ? 'rtl' : ''}`}>
          <div className="introText flex flex-col justify-center items-center  ">
            <p className="work_p_1 forMiniMize2">{t("clientsRecommendations.header")}</p>
            <p className="work_p_2 text-center forMiniMize ">
              {" "}
              {t("clientsRecommendations.title")}{" "}
            </p>
          </div>

          <div className="cards grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28 gap-5 mb-16 ">
            <div className="card1 flex flex-col items-center justify-center gap-6 px-0 pt-8  relative ">
              <Image
                src={cyrcleImage1}
                width={80}
                height={80}
                className="rounded-full absolute left-[50%] top-[100%] translate-x-[-50%] translate-y-[-50%] "
                alt="cyrcleImage1"
              />

              <div className=" absolute left-[50%] top-[115%] translate-x-[-50%] ">
                <p className="EngName mb-0 text-center">{t("clientsRecommendations.marwan")}</p>
                <p className="JobName text-center "> {t("clientsRecommendations.entrepreneur")}</p>
              </div>

              <Image src={imageQuote} alt="imageQuote" />
              <p className=" mb-0 w-[75%] ">
              {t("clientsRecommendations.p")}
              </p>

              <div className="stars flex items-center justify-center gap-2  mb-5">
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star-half-stroke"></i>
              </div>
            </div>

            <div className={`card2 flex flex-col items-center justify-center gap-6 px-0 pt-8  relative `}>
              <Image
                src={cyrcleImage2}
                width={"80px"}
                height={"80px"}
                className="rounded-full absolute left-[50%] top-[100%] translate-x-[-50%] translate-y-[-50%] "
                alt="cyrcleImage2"
              />
              <div className=" absolute left-[50%] top-[115%] translate-x-[-50%] ">
                <p className="EngName mb-0 text-center">{t("clientsRecommendations.ahmed")}</p>
                <p className="JobName text-center "> {t("clientsRecommendations.entrepreneur")}</p>
              </div>
              <Image src={imageQuote} alt="imageQuote" />

              <p className=" mb-0 w-[75%] ">
              {t("clientsRecommendations.p")}
              </p>

              <div className="stars flex items-center justify-center gap-2  mb-5">
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
            <div className="card3 flex flex-col items-center justify-center gap-6 px-0 pt-8 relative ">
              <Image
                src={cyrcleImage3}
                width={80}
                height={80}
                className="rounded-full absolute left-[50%] top-[100%] translate-x-[-50%] translate-y-[-50%] "
                alt="cyrcleImage3"
              />
              <div className=" absolute left-[50%] top-[115%] translate-x-[-50%] ">
                <p className="EngName mb-0 text-center">{t("clientsRecommendations.sara")}</p>
                <p className="JobName text-center "> {t("clientsRecommendations.entrepreneur")}</p>
              </div>
              <Image src={imageQuote} alt="imageQuote" />

              <p className=" w-[75%] mb-0 ">
              {t("clientsRecommendations.p")}
              </p>

              <div className="stars flex items-center justify-center gap-2  mb-5">
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
          </div>
        </section>

        <section className={` container fourProjects  grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-56 ${isArabic ? 'rtl' : ''}`}>
          <div className={`textWorking flex flex-col justify-center ${isArabic ? 'dir' : ''}`}>
            <p className="work_p_1 ">{t("projectsComponent.header")}</p>
            <p className="work_p_2 forMiniMize">
            {t("projectsComponent.title1")}{" "}
              <Image
                width={91}
                height={91}
                className=" ms-[-30px] inline-block w-auto h-auto"
                src="/Allimages/fourProj/rocket-iso-color.png"
                alt="alt img"
              />
            </p>
            <p className="work_p_3 w-[80%] forMiniMize2 ">
            {t("projectsComponent.title2")}
            </p>

            <BtnComp text={t("projectsComponent.btn")} />
          </div>

          <div className={` ms-auto innerFourProj ${isArabic ? 'rtl' : ''}`}>
            <div className={`xl:p-4 lg:p-4 imgWorking flex flex-wrap gap-6 lg:justify-center xl:justify-center sm:justify-start md:justify-start `}>
              <Image
                height={400}
                width={275}
                src="/Allimages/fourProj/Rectangle 26.png"
                className="w-[40%]"
                alt="alt image"
              />
              <Image
                height={400}
                width={275}
                src="/Allimages/fourProj/Rectangle 27.png"
                className="w-[40%]"
                alt="alt image"
              />
              <Image
                height={400}
                width={275}
                src="/Allimages/fourProj/Rectangle 28.png"
                className="w-[40%]"
                alt="alt image"
              />
              <Image
                height={400}
                width={275}
                src="/Allimages/fourProj/Rectangle 29.png"
                className="w-[40%]"
                alt="alt image"
              />
            </div>
          </div>
        </section>

        <section className={` container AiProjects mt-40 ${isArabic ? 'rtl ' : ''}`}>
          <div className={`introText flex flex-col justify-center items-center  ${isArabic ? 'mr-8' : ''}`}>
            <p className="work_p_1">{t("ourServices.header")}</p>
            <p className="work_p_2 text-center forMiniMize ">
              {" "}
              {t("ourServices.title")}{" "}
            </p>
          </div>

          <div className={`cards grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28 gap-5 mb-8 `}>
            <div className={`card1 gap-6 px-0 pt-8  ps-5 pb-4 `}>
              <Image
                width={64}
                height={64}
                className="mb-3 w-auto h-auto mr-10"
                src="/Allimages/AiProjects/chat-bot.png"
                alt="alt image"
              />

              <h3 className={`text-white ${isArabic ? 'mr-10' : ''}`}>{t("ourServices.ai.title")}</h3>
              <p className={`mb-0 w-[90%] text-[#ffffff5e] ${isArabic ? 'mr-10' : ''}`}>
              {t("ourServices.ai.p")}
              </p>
            </div>

            <div className="card2 gap-6 px-0 pt-8  ps-5 pb-4 ">
              <Image
                width={64}
                height={64}
                className="mb-3 mr-10"
                src="/Allimages/AiProjects/chat-bot.png"
                alt="alt image"
              />

              <h3 className={`text-white ${isArabic ? 'mr-10' : ''}`}>{t("ourServices.softwareServices.title")}</h3>
              <p className={` mb-0 w-[90%] text-[#ffffff5e] ${isArabic ? 'mr-10' : ''}`}>
              {t("ourServices.softwareServices.p")}.{" "}
              </p>
            </div>

            <div className="card3 gap-6 px-0 pt-8  ps-5 pb-4 ">
              <Image
                height={64}
                width={64}
                className="mb-3 mr-10"
                src="/Allimages/AiProjects/chat-bot.png"
                alt="alt image"
              />

              <h3 className={`text-white ${isArabic ? 'mr-10' : ''}`}>{t("ourServices.ecommerce.title")}</h3>
              <p className={` mb-0 w-[90%] text-[#ffffff5e] ${isArabic ? 'mr-10' : ''}`}>
              {t("ourServices.ecommerce.p")}{" "}
              </p>
            </div>
          </div>

          <div className="seeMoreBtn text-center ">
            {" "}
            <button
              className="px-4 py-3 rounded-lg w-64 md:w-56 sm:w-44 text-[#e7267a] mt-8 md:mb-6 sm:mb-16 "
              style={{ border: "1px solid #e7267a" }}
            >
              {" "}
              {t("ourServices.btn")}{" "}
            </button>
          </div>
        </section>
      </div>
    );
  }
}
