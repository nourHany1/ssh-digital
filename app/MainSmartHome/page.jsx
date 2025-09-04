'use client'
import React from 'react'
import smart1 from '../../public/Allimages/smartHome/smart1.png'
import Exploring from '../Components/Exploring/Exploring'
import ArtificialIntelligence from '../Components/ArtificialIntelligence/ArtificialIntelligence'
import AssistCyrcle from '../Components/AssistCyrcle/AssistCyrcle'
import smart3 from '../../public/Allimages/smartHome/smart3.png'
import FormComp from '../Components/FormComp/FormComp'
import { useTranslation } from 'react-i18next'

export default function MainSmartHome() {
  const {t} = useTranslation("global")
  return (
<>

<ArtificialIntelligence first_mainTitle={t("sh.h1")} 
                        first_mainTitle2={t("sh.h2")} 
                                    
                        first_paragraph={t("sh.p1")} 
                        first_btnText={t("sh.btn")} 
                        first_image_1={{src:smart1,alt:"smart home"}}
                        first_image_2={{src:"",alt:""}}
                        first_image_3={{src:"",alt:""}} 
                        sectionName='smartHome'
                        
                        />


<Exploring />

<AssistCyrcle srcImage={smart3} altImage={"smart3"} text={t("sh.p3")}  />

<FormComp />

</>
  )
}
