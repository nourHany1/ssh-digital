import React from 'react'
import Image from 'next/image'

import styles from './Studies.module.css'
import BtnComp from '../BtnComp/BtnComp'

export default function Studies({sectionName,image1 ,image2 ,image3,hideBTN}) {
  return (
    <div className='container' >
        <div className="row justify-center ">
            {sectionName==="subProjects" ?  <><h2 className={`${styles.titleStudies} text-center `} > our case studies</h2>
            <p className={` ${styles.studies_p} text-center text-white  `} >Some of the exceptional ideas we made our clients bring to life</p></>  :""
}
         
            <div className="col-lg-4 col-md-6">

                <div className="innerCol rounded-lg flex flex-col items-center ">

                    <Image src={image1} className='my-3' alt='studies image' />
                    <h4 className='text-white my-2' >Technology Website</h4>
                    <p className='text-white' >Cloud, , Mobile, Python</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">

                <div className="innerCol rounded-lg flex flex-col items-center ">

                    <Image src={image2} className='my-3' alt='studies image'/>
                    <h4 className='text-white my-2' >Technology Website</h4>
                    <p className='text-white' >Cloud, , Mobile, Python</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">

                <div className="innerCol rounded-lg flex flex-col items-center ">

                    <Image src={image3} className='my-3' alt='studies image'/>
                    <h4 className='text-white my-2' >Technology Website</h4>
                    <p className='text-white' >Cloud, , Mobile, Python</p>
                </div>
            </div>
     {hideBTN?     <div className='w-72 mx-auto flex justify-center ' >

<BtnComp text={'See More'}   />
</div> :""}

        </div> 
      
    </div>
  )
}
