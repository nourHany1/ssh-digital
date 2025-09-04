import React from 'react'
import styles from '../AssistComp/AssistComp.module.css'
import Image from 'next/image'
import assist2Image from '../../../public/Allimages/Assist2/image.png'

export default function AssistCyrcle({srcImage,altImage, text}) {
  return (
    <div className='container my-44 ' >
        <div className="row">

                    <div className="col-lg-5 col-md-12">

                                <div className="innerCol">

                                            <p className={`${styles.assist_paragraph1} text-white  ` }>{ text}</p>
                                            <ul className={` ps-5 ${styles.assist_ul}`}  >

                                                <li>AI Strategy and Consulting.</li>
                                                <li>Data Collection and Preparation.</li>
                                                <li>AI Model Development.</li>
                                                <li>Training and Testing.</li>
                                                <li>Integration and Deployment.</li>
                                                <li>Monitoring and Maintenance.</li>
                                                <li>Security and Compliance.</li>
                                                <li>AI Ecosystem Integration.</li>
                                                <li>Performance Analytics.</li>

                                            </ul>

                                </div>
                </div>

                <div className="col-lg-7 col-md-12  flex justify-center py-5 " style={{background:" radial-gradient(circle, #e7267a5e 21%, #010e28 65%)"}} >

                    <div className="innerCol  flex justify-center ">

                        <Image src={srcImage} alt={altImage} className='w-75'  />
                    </div>
            </div>

  


        </div>
      
    </div>
  )
}
