
"use client";

import React, {useRef} from "react";
import Link from "next/link";
// import NavImage from "../../../public/Allimages/Footer/Home1.png";
// import Image from "next/image";
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {

  // const [drowpDown,setDrowpDown]=useState(false)
  const drowpDownRef=useRef()
const navLinks= [

  {title:"Home" ,path:"/"},
  {title:"Services" ,path:"/Services"},
  {title:"Soluations" ,path:"/Soluations"},
  {title:"Projects" ,path:"/Projects"},
  {title:"About Us" ,path:"/AboutUs"},
  {title:"Contact Us" ,path:"/ContactUs"},
 ]

 let pathname = usePathname()
 let navContet=useRef(null)
 let barsIcon=useRef(null)
 let close_x=useRef(null)

 function showSidebar(){
navContet.current.style.translate='0%'
close_x.current.style.display="block"
barsIcon.current.style.display="none"


 }
 function hideSidebar(){
navContet.current.style.translate='100%'
close_x.current.style.display="none"
barsIcon.current.style.display="block"

 }

 function showDrowbDown (title) {

  if(title=='Services'){

    drowpDownRef.current.classList.add("animate__animated","animate__backInDown")
    drowpDownRef.current.classList.remove('d-none')

  }


 }
 function hideDrowpDown (title) {

  if(title=='Services'){

    drowpDownRef.current.classList.add('d-none') 
  }

 }

  return (
    <nav
      className={`fixed-top flex items-center justify-between container mt-2 ${styles.nav}`}style={{ backgroundColor: "rgba(1, 14, 40, 1)" }}>
      <div>
        {" "}
        {/* <Image src={NavImage} alt="navbar image" />{" "} */}
        <h1 className="text-white mb-0 " > SSH Digital</h1>
      </div>
     
     <div ref={navContet} className= {`flex justify-between ${styles.navContent}`}  >
          <ul className= {`${styles.navContent_ul} m-0 p-0 flex  `}>
          {navLinks.map((link,index)=>    <li key={index} className={`mx-3 ${link.title==='Services'?'relative':""}  ${styles.navContent_ul_li}`}>
                  <div onMouseMove={()=>{showDrowbDown(link.title)}} onMouseLeave={ ()=>{hideDrowpDown(link.title)}}  >
                        <Link href={link.path}   className={`${styles.navLink} text-[#a4a8b2] no-underline ${pathname===link.path?styles.active:""}`} > {link.title}  </Link>
                        
                        {link.title==='Services'? <div> <ul ref={drowpDownRef} className={` w-56 py-4 mt-0 rounded-lg px-3 d-none ${styles.drowpDown}`} style={{position:"absolute",left:"0",background:"#ffffff1a",zIndex:"5"}} > 
                        
                        <li className="my-2 py-1 px-3 rounded-md " style={{background:"var( --main_fontColor)"}}  ><Link  className="text-white no-underline  " style={{boxSizing:"unset"}} href={'/Ai'} >Artificial Intelligence</Link></li>
                        <li className="my-2 py-1 px-3 rounded-md " style={{background:"var( --main_fontColor)"}}  > <Link  className="text-white no-underline  " style={{boxSizing:"unset"}} href={'/MainSoftWareDev'} >SoftWare Dev...</Link> </li>
                        <li className="my-2 py-1 px-3 rounded-md " style={{background:"var( --main_fontColor)"}}  > <Link  className="text-white no-underline  " style={{boxSizing:"unset"}} href={'/MainSmartHome'} >Smart Home</Link> </li>
                        
                         </ul></div>:""}
                        </div>{" "}  

                        </li> )  }
                
          
            </ul>

     
              <div className={` mx-2 flex items-center justify-center ${styles.mainIconsNav1}`}>
                {" "}
                <i className="fa-solid fa-earth-americas ps-3 text-white fa-xl"> </i>{" "}
                <span className={`ps-2 text-[18px]  text-white ${styles.AR}`} >AR</span>
              </div>

                <div className={`${styles.ToggleIcon}`}  style={{display:"none"}} >

                      <i ref={barsIcon} className={`fa-solid fa-bars text-white fa-2xl ${styles.barsIcon}`} onClick={showSidebar} ></i>
                      <i ref={close_x} className={`${styles.x_close} fa-regular fa-circle-xmark text-white fa-2xl`} onClick={hideSidebar}  style={{display:"none"}} ></i>

                </div>

     </div>

     <div className={` mx-2 flex items-center justify-center ${styles.mainIconsNav2}`}>
                {" "}
                <i className="fa-solid fa-earth-americas ps-3 text-white fa-xl"> </i>{" "}
                <span className={`ps-2 text-[18px]  text-white ${styles.AR}`} >AR</span>
              </div>
    
    </nav>
  );
}
