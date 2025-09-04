import React from 'react'
import styles from './FormComp.module.css'
import BtnComp from '../BtnComp/BtnComp'

export default function FormComp({sectionName}) {
  return (
    <div className='container mt-32 ' >
               

         <form className='row' > 


         {sectionName==='contactUs'?        <h2 className={`px-5 pb-4 ${styles.formTitle} `} >Get In Touch With <span className={styles.formSubTitle}  >Us</span></h2>
:""}

                <div className="col-lg-6 px-5 my-3 ">
                  <label className={`  ${styles.inpLabel} my-2 ` } htmlFor="yourName">Your Name {sectionName==='contactUs'?<i className="fa-solid fa-star-of-life text-[12px] text-[#e7267a] "></i>:""} </label>
                 <input id='yourName' type="text" className={`py-3 px-4 w-100 border border-white rounded-lg ${styles.formInp} `} placeholder="Your Name"  style={{backgroundColor:"unset"}} />
                </div>

                <div className="col-lg-6 text-end px-5 my-3 ">
                <label className={`  ${styles.inpLabel} my-2 text-start w-100 ` } htmlFor="yourEmail">Your Email  {sectionName==='contactUs'?<i className="fa-solid fa-star-of-life text-[12px] text-[#e7267a] "></i>:""}  </label>
                <input id='yourEmail' type="text" className={`py-3 px-4 w-100 border border-white rounded-lg ${styles.formInp}`} placeholder="Your Email"  style={{backgroundColor:"unset"}} />
                </div>

                <div className="col-lg-6 px-5 my-3 ">

                <label className={`  ${styles.inpLabel} my-2 ` } htmlFor="phone">Phone Number {sectionName==='contactUs'?<i className="fa-solid fa-star-of-life text-[12px] text-[#e7267a] "></i>:""} </label>
                <input id='phone' type="text" className="py-3 px-4 w-100 border border-white rounded-lg " placeholder="Phone Number"  style={{backgroundColor:"unset"}} />
                </div>

                <div className="col-lg-6 text-end px-5 my-3 ">
                  <label className={`  ${styles.inpLabel} my-2 text-start w-100 ` } htmlFor="companyName">Company Name</label>
                <input id='companyName' type="text" className="py-3 px-4 w-100 border border-white rounded-lg " placeholder="Company Name"  style={{backgroundColor:"unset"}} />
                </div>

           

         {sectionName!='contactUs'? <>     
         
         <div className="col-lg-6 px-5 my-3 ">
                  <label className={`  ${styles.inpLabel} my-2 ` } htmlFor="companyField">Company Field</label>
                <input id='companyField' type="text" className="py-3 px-4 w-100 border border-white rounded-lg " placeholder="Company Field"  style={{backgroundColor:"unset"}} />
                </div>
          <div className="col-lg-6 text-end px-5 my-3 ">
                  <label className={`  ${styles.inpLabel} my-2 text-start w-100 ` } htmlFor="companySize">Company Size </label>
                <input id='companySize' type="text" className="py-3 px-4 w-100 border border-white rounded-lg " placeholder="Company Size"  style={{backgroundColor:"unset"}} />
                </div>

             </>  : 
                
                
                ""}

                  <div className="px-5 my-3 ">
                  <label className={`  ${styles.inpLabel} my-2 ` } htmlFor="message">Message</label>
              <textarea name="Message" id="Message" className="py-3 px-4 w-100 border border-white rounded-lg " placeholder="Message..." style={{backgroundColor:"unset",maxHeight:"260px",minHeight:"210px"  }} ></textarea>
                </div>

               <div className='text-center' > <BtnComp text={'Send'} /></div>

      
          </form>

           
    </div>
  )
}
