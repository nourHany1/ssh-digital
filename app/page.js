"use client";
import 'bootstrap/dist/css/bootstrap.min.css'

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useFormik } from "formik";
import lineStyle from '../public/Allimages/Vector33.png'

import firstOfFifeIcon from '../public/Allimages/fifeIcons/Vector.png'
import thecondOfFifeIcon from '../public/Allimages/fifeIcons/Frame 2.png'
import thirdOfFifeIcon from '../public/Allimages/fifeIcons/Frame 3.png'
import fourthOfFifeIcon from '../public/Allimages/fifeIcons/Frame 4.png'
import fifthOfFifeIcon from '../public/Allimages/fifeIcons/Frame 5.png'

import EarthImg from '../public/Allimages/7.png'
import freelancerImg from '../public/Allimages/Iamge.png'

import cyrcleImage1 from '../public/Allimages/Clinetes/1.png'
import cyrcleImage2 from '../public/Allimages/Clinetes/2.png'
import cyrcleImage3 from '../public/Allimages/Clinetes/Ellipse74.png'
import imageQuote from '../public/Allimages/quote-right.png'

import BtnComp from './Components/BtnComp/BtnComp';
import AboutUs from './Components/AboutUs/AboutUs';

import glassOfMan from '../public/Allimages/Rectangle 36.png'




export default function Home() {
  const [allLogos, setAllLogos] = useState([]);
  const [latest, setLatest] = useState("");
  const [isLoading, setIsLoading] = useState(false);



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
      <>
        <section className="  container p-0 HomeSection mt-16  ">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 text-white ">
            <div className="me-2 md:text-center ">
              <h2 className="homeTitle mb-7  forMiniMize ">
                Turn your thoughts to reality
              </h2>

              <div className="w-full ">
                {" "}
                <Image 
                  src={lineStyle}
                  alt=" Vector error"
                  className="mb-5 w-full "
                />
              </div>
              <p className="paragraph1 mb-5 forMiniMize2 ">
                We are driven by the relentless pursuit of technological
                excellence. Our mission is to empower companies with a deep
                understanding of the latest technologies.
              </p>

              <div className="flex justify-start">
                {" "}
                <input
                  type="text"
                  className="w-64  p-3 rounded-full inp_1 "
                  placeholder="Enter You Phone|     Request Call"
                />
              </div>
            </div>
            <div className=" ms-2 flex items-center justify-end Earth rounded-full">
              <Image src={EarthImg}  alt="EarthImg"/>
            </div>
          </div>

          <div className="fifeIcons items-center w-full grid  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-3 sm:gap-y-5 ">
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
                src={thecondOfFifeIcon}                alt="thecondOfFifeIcon"
              />{" "}
              <span className="text-white">IXON</span>{" "}
            </div>
            <div className="icon-2 flex items-center justify-center logoMinMize ">
              {" "}
              <Image
                className="me-1"
                src={fifthOfFifeIcon}                alt="fifthOfFifeIcon"
              />{" "}
              <span className="text-white">GammaLap</span>{" "}
            </div>
            <div className="icon-3 flex items-center justify-center logoMinMize ">
              {" "}
              <Image
                className="me-1"
                src={fourthOfFifeIcon}                alt="fourthOfFifeIcon"
              />{" "}
              <span className="text-white">O-Chip</span>{" "}
            </div>
            <div className="icon-4 flex items-center justify-center logoMinMize ">
              {" "}
              <Image
                className="me-1"
                src={thirdOfFifeIcon}                alt="thirdOfFifeIcon"
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

        <AboutUs sectionName='Home' title='AboutUs' textImage='We are a leading force in technology promotion. With our roots in Saudi Arabia and a new chapter revealing itself in Egypt, we bring a wealth of experience and knowledge to empower businesses and organizations. Our primary interest is in exploiting the potential of modern concepts such as big data analytics, artificial intelligence, computer vision, and Internet of Things solutions' 

srcImage={glassOfMan} altImage={'glassOfMan'} />

<div className="fourRating grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28 ">
      <div className="rating flex flex-col ">
        {" "}
        <span className="num">782</span>{" "}
        <span className="text-white textNum">clients </span>{" "}
      </div>
      <div className="rating flex flex-col ">
        {" "}
        <span className="num">782</span>{" "}
        <span className="text-white textNum">Completed projects </span>{" "}
      </div>
      <div className="rating flex flex-col ">
        {" "}
        <span className="num">782</span>{" "}
        <span className="text-white textNum">It projects </span>{" "}
      </div>
      <div className="rating flex flex-col ">
        {" "}
        <span className="num">782</span>{" "}
        <span className="text-white textNum">Sending Projects </span>{" "}
      </div>
    </div>


        <section className=" container workingTeam  grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-28 lg:px-8 xl:px-10 md:px-36 sm:px-24  ">
          <div className="textWorking flex flex-col justify-center ">
            <p className="work_p_1">What We Do</p>
            <p className="work_p_2 forMiniMize">
              We create experiences that put people in Primrly
            </p>
            <p className="work_p_3 forMiniMize2 ">
              Experiences are only as good as their weakest points. Its about
              more than just creating shiny things. It is all about the quality
              of your brand
            </p>
          </div>

          <div className=" ">
            <div className="p-4 pe-8 imgWorking">
              <Image src={freelancerImg} className="w-[90%]" alt="freelancerImg" />
            </div>
          </div>
        </section>

        <section className=" container clinetes mt-40  ">
          <div className="introText flex flex-col justify-center items-center  ">
            <p className="work_p_1 forMiniMize2">Clinentes Recommendations</p>
            <p className="work_p_2 text-center forMiniMize ">
              {" "}
              our clients success stories{" "}
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
                <p className="EngName mb-0 text-center">Marwan Ahmed</p>
                <p className="JobName text-center "> Entrepreneur</p>
              </div>

              <Image src={imageQuote} alt="imageQuote" />
              <p className=" mb-0 w-[75%] ">
                ALTC is a truly pioneering company in the field of technology,
                and we cooperated with them a year ago to do a CRM system for my
                company, and we have achieved great success, and the company has
                a very distinguished team in all fields.
              </p>

              <div className="stars flex items-center justify-center gap-2  mb-5">
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star"></i>
                <i className=" text-yellow-300 fa-solid fa-star-half-stroke"></i>
              </div>
            </div>

            <div className="card2 flex flex-col items-center justify-center gap-6 px-0 pt-8  relative ">
              <Image
                src={cyrcleImage2}
                width={"80px"}
                height={"80px"}
                className="rounded-full absolute left-[50%] top-[100%] translate-x-[-50%] translate-y-[-50%] "
                alt="cyrcleImage2"
              />
              <div className=" absolute left-[50%] top-[115%] translate-x-[-50%] ">
                <p className="EngName mb-0 text-center">Eng/Ahmed Mohamed</p>
                <p className="JobName text-center "> Entrepreneur</p>
              </div>
              <Image src={imageQuote} alt="imageQuote" />

              <p className=" mb-0 w-[75%] ">
                ALTC is a truly pioneering company in the field of technology,
                and we cooperated with them a year ago to do a CRM system for my
                company, and we have achieved great success, and the company has
                a very distinguished team in all fields.
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
                <p className="EngName mb-0 text-center">Eng/Sara Ahmed </p>
                <p className="JobName text-center "> Entrepreneur</p>
              </div>
              <Image src={imageQuote} alt="imageQuote" />

              <p className=" w-[75%] mb-0 ">
                ALTC is a truly pioneering company in the field of technology,
                and we cooperated with them a year ago to do a CRM system for my
                company, and we have achieved great success, and the company has
                a very distinguished team in all fields.
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

        <section className=" container fourProjects  grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-56  ">
          <div className="textWorking flex flex-col justify-center ">
            <p className="work_p_1 text-start ">Projects</p>
            <p className="work_p_2 forMiniMize">
              our completed wonderful projects{" "}
              <Image 
              width={91}
              height={91}
                className=" ms-[-30px] inline-block w-auto h-auto"
                src="/Allimages/fourProj/rocket-iso-color.png"
                alt="alt img"
              />
            </p>
            <p className="work_p_3 w-[80%] forMiniMize2 ">
              There is no limit to creativity. With a strong presence in the
              Kingdom of Saudi Arabia, we are proud to expand our reach with a
              new branch in Egypt. Our expertise lies in driving improvement and
              innovation through the latest technology trends.
            </p>

            <BtnComp text={'Latest Projects'} />
          </div>

          <div className=" ms-auto innerFourProj ">
            <div className=" xl:p-4 lg:p-4 imgWorking flex flex-wrap gap-6 lg:justify-center xl:justify-center sm:justify-start md:justify-start ">
              <Image
              height={400} width={75}  src={latest[0]?.images} className="w-[40%]" alt="alt image" />
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

        <section className=" container AiProjects mt-40  ">
          <div className="introText flex flex-col justify-center items-center  ">
            <p className="work_p_1">our services</p>
            <p className="work_p_2 text-center forMiniMize ">
              {" "}
              ALTC has experts in all disciplines{" "}
            </p>
          </div>

          <div className="cards grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28 gap-5 mb-8 ">
            <div className="card1 gap-6 px-0 pt-8  ps-5 pb-4 ">
              <Image
              width={64}
              height={64}
                className="mb-3 w-auto h-auto "
                src="/Allimages/AiProjects/chat-bot.png"
                alt="alt image"
              />

              <h3 className="text-white">AI</h3>
              <p className=" mb-0 w-[90%] text-[#ffffff5e]">
                Artificial Intelligence technology unlocks limitless
                possibilities. AI solutions offer intelligent data analysis,
                enhance customer communication, and guide accurate
                decision-making
              </p>
            </div>

            <div className="card2 gap-6 px-0 pt-8  ps-5 pb-4 ">
              <Image
                width={64}
              height={64}
                className="mb-3"
                src="/Allimages/AiProjects/chat-bot.png"
                alt="alt image"
              />

              <h3 className="text-white">Software services</h3>
              <p className=" mb-0 w-[90%] text-[#ffffff5e]">
                Websites and apps represent your online presence. Through
                attractive design and outstanding user experience, you can reach
                a wide audience and build a strong presence.{" "}
              </p>
            </div>

            <div className="card3 gap-6 px-0 pt-8  ps-5 pb-4 ">
              <Image  
                            height={64}
                            width={64}
                className="mb-3"
                src="/Allimages/AiProjects/chat-bot.png"
                alt="alt image"
              />

              <h3 className="text-white">E-commerce</h3>
              <p className=" mb-0 w-[90%] text-[#ffffff5e]">
                E-commerce opens doors to expansion and online customer reach.
                Simply put, you can sell your products and services globally.{" "}
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
              See More{" "}
            </button>
          </div>
        </section>

 
      </>
    );
  }
}
