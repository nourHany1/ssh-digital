import React from 'react'
import styles from './Exploring.module.css'
import smart2 from '../../../public/Allimages/smartHome/smart2.png'
import Image from 'next/image'

export default function Exploring() {
  return (
    <div className='container' >
        <div className="row">

            <div className=' col-lg-12 text-center  '>
                <h2 className={`${styles.ExploringTitle} mx-auto `} >Exploring the World of <span style={{color:'var(--main_fontColor)'}} > Smart</span> Home Technology</h2>
              {/* <p className={`${styles.ExploringText} mx-auto mt-5 `}  > Welcome to the future, where your home is not just a place; it's your personal, smart sanctuary.</p> */}
              <p className={`${styles.ExploringText} mx-auto mt-5 `}  > Welcome to the future, where your home is not just a place; it&apos;s your personal, smart sanctuary.</p>

<div>

    <Image src={smart2} alt='smart2' className="w-75 mx-auto " />
</div>

            </div>
        </div>
      
    </div>
  )
}
