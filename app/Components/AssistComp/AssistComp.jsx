
import React from 'react'
import styles from './AssistComp.module.css'
import Image from 'next/image'
import AssistImage from '../../../public/Allimages/AssistImages/AI image.png'

export default function AssistComp() {
  return (
    <div className='container' >
      <div className="row">
        <h3 className={`${styles.assistTitle} text-center mb-6`} >how can we assist?</h3>

        <div className="col-lg-6">
          <div className="innerCol">
            <p className={`${styles.assist_paragraph1} text-white`} >
              we can help customers provide an artificial intelligence (AI) service by offering a range of expertise and services tailored to their specific needs. Here&apos;s a roadmap for how a software company can assist customers in offering AI services:
            </p>
            <ul className={`ps-5 ${styles.assist_ul}`} >
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

        <div className={`col-lg-6 ${styles.assist_child2}`}>
          <div className="innerCol">
            <Image src={AssistImage} alt='Assist image' className={`${styles.assist_Image}`} />
          </div>
        </div>
      </div>
    </div>
  )
}



// import React from 'react'
// import styles from './AssistComp.module.css'
// import Image from 'next/image'
// import AssistImage from '../../../public/Allimages/AssistImages/AI image.png'

// export default function AssistComp() {
//   return (
//     <div className='container' >
// <div className="row">

// <h3  className={`${styles.assistTitle} text-center  mb-6 `}  >how can we assist ? </h3>




// <div className="col-lg-6">

//     <div className="innerCol">

//         <p className={`${styles.assist_paragraph1} text-white  ` }>we can help customers provide an artificial intelligence (AI) service by offering a range of expertise and services tailored to their specific needs. Here's a roadmap for how a software company can assist customers in offering AI services:</p>
//        <ul className={` ps-5 ${styles.assist_ul}`}  >

//         <li>AI Strategy and Consulting.</li>
//         <li>Data Collection and Preparation.</li>
//         <li>AI Model Development.</li>
//         <li>Training and Testing.</li>
//         <li>Integration and Deployment.</li>
//         <li>Monitoring and Maintenance.</li>
//         <li>Security and Compliance.</li>
//         <li>AI Ecosystem Integration.</li>
//         <li>Performance Analytics.</li>

//        </ul>

//     </div>
// </div>

// <div className={`  col-lg-6 ${styles.assist_child2} ` } >

//     <div className="innerCol">

//         <Image src={AssistImage} alt='Assist image'  className={`${styles.assist_Image}`} />
//     </div>
// </div>

// </div>
//     </div>
//   )
// }
