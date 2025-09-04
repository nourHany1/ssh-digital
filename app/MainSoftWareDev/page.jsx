"use client"
import React from 'react'
import ArtificialIntelligence from '../Components/ArtificialIntelligence/ArtificialIntelligence'
import AboutUs from '../Components/AboutUs/AboutUs'
import AssistCyrcle from '../Components/AssistCyrcle/AssistCyrcle'
import softWareDevImage1 from '../../public/Allimages/softwareDevImages/softWare1.png'
import softWareDevImage2 from '../../public/Allimages/softwareDevImages/softWare2.png'
import softWareDevImage3 from '../../public/Allimages/softwareDevImages/softWare3.png'
import assistCyrcle1_image from '../../public/Allimages/Assist2/image.png'
import FormComp from '../Components/FormComp/FormComp'
import { useTranslation } from 'react-i18next'

export default function MainSoftWareDev() {
  const {t, i18n} = useTranslation("global")  
  return (
<>

<ArtificialIntelligence first_mainTitle={t("sw.h1")} 
                        first_mainTitle2={t("sw.h2")}
                                    
                        first_paragraph={t("sw.p1")}
                        first_btnText={t("sw.btn")}
                        first_image_1={{src:softWareDevImage1,alt:"softWareDevImage"}}
                        first_image_2={{src:"",alt:""}}
                        first_image_3={{src:"",alt:""}} 
                        sectionName='softwareDev'
                        
                        />
 

<AboutUs sectionName='Services' title='' textImage={t("sw.p2")} 

          srcImage={softWareDevImage3} altImage={'softWareDevImage3'} />

<ArtificialIntelligence first_mainTitle={t("sw.h3")} 
                        first_mainTitle2={t("sw.h4")}
                        first_paragraph={t("sw.p3")}
                        first_btnText={t("sw.btn")}
                        first_image_1={{src:softWareDevImage2,alt:"Digital Transformation"}}
                        first_image_2={{src:"",alt:""}}
                        first_image_3={{src:"",alt:""}} 
                        sectionName='DigitalTransformation'                        
                        />

<AssistCyrcle srcImage={assistCyrcle1_image} altImage={"assistCyrcle1_image"} text={t("sw.p4")}/>

<FormComp />

</>
  )
}
