import React from 'react'
import Image from 'next/image'

import styles from './Studies.module.css'
import BtnComp from '../BtnComp/BtnComp'
import { useTranslation } from 'react-i18next'

export default function Studies({sectionName,image1 ,image2 ,image3,hideBTN}) {
    const {t, i18n} = useTranslation("global")
  return (
    <div className='container' >
        <div className="row justify-center ">
            {sectionName==="subProjects" ?  <><h2 className={`${styles.titleStudies} text-center `} >{t("aiPage.studies.header")}</h2>
            <p className={` ${styles.studies_p} text-center text-white  `} >{t("aiPage.studies.title")}</p></>  :""
}
         
            <div className="col-lg-4 col-md-6">

                <div className="innerCol rounded-lg flex flex-col items-center ">

                    <Image src={image1} className='my-3' />
                    <h4 className='text-white my-2' >{t("aiPage.studies.p1")}</h4>
                    <p className='text-white' >{t("aiPage.studies.p2")}</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">

                <div className="innerCol rounded-lg flex flex-col items-center ">

                    <Image src={image2} className='my-3' />
                    <h4 className='text-white my-2' >{t("aiPage.studies.p1")}</h4>
                    <p className='text-white' >{t("aiPage.studies.p2")}</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">

                <div className="innerCol rounded-lg flex flex-col items-center ">

                    <Image src={image3} className='my-3' />
                    <h4 className='text-white my-2' >{t("aiPage.studies.p1")}</h4>
                    <p className='text-white' >{t("aiPage.studies.p2")}</p>
                </div>
            </div>
     {hideBTN?     <div className='w-72 mx-auto flex justify-center ' >

<BtnComp text={t("aiPage.studies.btn")}   />
</div> :""}

        </div> 
      
    </div>
  )
}
