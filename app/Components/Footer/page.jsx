"use client";

import React from 'react'
import { ColorRing } from 'react-loader-spinner';
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useState } from 'react';
import Image from 'next/image';
import footerImage from '../../../public/Allimages/Footer/Home1.png'

export default function Footer() {

    const [isLoadingBtn,setIsLoadingBtn]=useState(false)

    const validationSchema = Yup.object({
        email: Yup.string()
          .required("email is required")
          .email("please enter a valid email")
      });
      
      const formik = useFormik({
        initialValues: {
          email: ""
        },
      
        validationSchema,
      
        onSubmit: async function (values) {
          setIsLoadingBtn(true);
           await storeSubscrip(values);
           setIsLoadingBtn(false);
      
        },
      });
      

    async function storeSubscrip(email) {

        await fetch('https://ssh.mqawilk.com/api/projects/page/index',{ method:'post', body:email })
        
        }





  return (
    <div className='container' >
      
<section className=' contactUs  grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-28' >

<div className="logo  ">
  <Image src={footerImage} alt="" />

</div>


<div className="list2 flex justify-around">

  <ul className=' text-[#ffffff5e] ' >

  <li>Information</li>
  <li>Ai</li>
  <li>SoftWare Services</li>
  <li>CRM System</li>
  <li>E-Commerce</li>
  <li>E-learning</li>
  <li>UXUI Design</li>
  </ul>
  <ul className=' text-[#ffffff5e]' >

  <li className='text-white' >Company</li>
  <li>Home</li>
  <li>Services</li>
  <li>Solutions</li>
  <li>Projects</li>
  <li>About Us</li>
  <li>Contact us</li>
  </ul>


</div>


<div className="subscribe flex justify-center pt-3 pb-4  ">

        <div className='flex flex-col ' >
        <label className='text-white ' htmlFor="subscrip">Subscrip</label>
        <div className='' >     
         <form onSubmit={formik.handleSubmit} className='flex' >
           <input 
           
           type="email"
           placeholder="Email"
           name="email"
           id="email"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email}
                className='w-[100%] p-2 rounded-l-md mt-4 focus:outline-none focus:border-none ' />
                 
                   <button type="submit" className='p-2 px-3 mt-4 rounded-r-md' style={{backgroundColor:"#0c1933"}} >
                     

                      {isLoadingBtn ? (
           <i className="fa-solid fa-spinner fa-spin text-white"></i>
         ) : (
           <i className="fa-solid fa-arrow-right text-white "></i>

         )}
                      
                      
                       </button>

           
         </form>
        </div>

        {formik.errors.email && formik.touched.email ? ( <p className="error text-red-600 ">{formik.errors.email}</p>   ) : ""        }
                    
              {formik.touched.email&&!formik.errors.email?<p className="error text-green-500 ">success subscribed</p>:"" }                                    
                                                              
                                                                  
        </div>

  
</div>

</section>

<hr className='text-white w-full  ' />



<footer className=' grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ' >

        <div className="AllRight col-span-2 pe-24 mt-28">

        <p className='text-[#ffffff5e] text-end text-[24px] ' >&copy; 2023  All rights reserved.</p>
          
        </div>

        <div className='flex items-center justify-center text-white mb-6 ' >

          <div className='mx-2 border border-white  w-12 h-12 rounded-full flex justify-center items-center ' > <i className="fa-brands fa-facebook-f"></i> </div>
          <div className='mx-2 border border-white  w-12 h-12 rounded-full flex justify-center items-center ' > <i className="fa-solid fa-bell"></i> </div>
          <div className='mx-2 border border-white  w-12 h-12 rounded-full flex justify-center items-center ' > <i className="fa-brands fa-linkedin-in"></i> </div>
          <div className='mx-2 border border-white  w-12 h-12 rounded-full flex justify-center items-center ' > <i className="fa-brands fa-twitter"></i> </div>
        </div>






</footer>

    </div>
  )
}
