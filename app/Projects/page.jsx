import React from 'react'
import Studies from '../Components/Studies/Studies'
import studies4 from '../../public/Allimages/studies/studies4.png'
import studies5 from '../../public/Allimages/studies/studies5.png'
import studies1 from '../../public/Allimages/studies/studies1.jpg'
import styles from './Projects.module.css'
import clientImage from '../../public/Allimages/projects/image 6.png'
import Image from 'next/image'

export default function Projects() {
  return (
    <div className={` container py-5 rounded-lg `}  >

      <div className="row my-10 py-5">

        <div className="col-lg-6">
              <div className="innerCol">
              <Image src={clientImage} alt="clientImage" className='w-100' />

              </div>
        </div>

        <div className="col-lg-6 flex items-center justify-center ">
              <div className="innerCol text-center ">
                <h2 className={styles.projTitle} >Work across all <br /> <span style={{color:"var(--main_fontColor)"}} >major</span>  industries</h2>
                <p className={styles.subTitle} >Glance over some of our successful project <br /> executions </p>

              </div>
        </div>



      </div>
     
<div className="row py-5 rounded-lg" style={{background:"#231837"}} >
<Studies  hideBTN={false} sectionName={'projects'} image1={studies4} image2={studies1} image3={studies4} />
<Studies hideBTN={false} sectionName={'projects'} image1={studies4} image2={studies1} image3={studies4} />
<Studies hideBTN={true} sectionName={'projects'} image1={studies4} image2={studies1} image3={studies4} />
</div>

    </div>
  )
}
