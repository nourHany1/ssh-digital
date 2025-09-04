import React from 'react'
import styles from './Exploring.module.css'
import smart2 from '../../../public/Allimages/smartHome/smart2.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Exploring() {
  const {t} = useTranslation("global")
  return (
    <div className='container' >
        <div className="row">

            <div className=' col-lg-12 text-center  '>
                <h2 className={`${styles.ExploringTitle} mx-auto `} >{t("sh.h-1")}  <span style={{color:'var(--main_fontColor)'}} > {t("sh.h-2")} </span> {t("sh.h-3")} </h2>
              <p className={`${styles.ExploringText} mx-auto mt-5 `}  > {t("sh.p2")} </p>

<div>

    <Image src={smart2} alt='smart2' className="w-75 mx-auto " />
</div>

            </div>
        </div>
      
    </div>
  )
}
