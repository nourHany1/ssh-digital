import React from 'react'
import Image from 'next/image'
import vector1 from '../../../public/Allimages/approach/Vector.png'
import vector2 from '../../../public/Allimages/approach/Vector2.png'
import vector3 from '../../../public/Allimages/approach/Vector3.png'
import vector4 from '../../../public/Allimages/approach/Vector4.png'
import vector5 from '../../../public/Allimages/approach/Vector5.png'
import vector6 from '../../../public/Allimages/approach/Vector6.png'
import styles from '../AssistComp/AssistComp.module.css'
export default function Approach() {

const approach=[

  {text:'Identify Business Problem',vector:vector1},
  {text:'Collect and Prepare Data',vector:vector2},
  {text:'Reimagine the process end-to-end with the technology',vector:vector3},
  {text:'Model Development and Training',vector:vector4},
  {text:'Optimize and Implement',vector:vector5},
  {text:'Evaluate Models Performance',vector:vector6},

]

  return (
    <div className='container my-32 ' >
        <div className="row">

                <h3 className={` text-center my-14 ${styles.assistTitle}`} >our Approach</h3>


              {approach.map((text,idx)=>   <div className="col-lg-4 col-md-6 my-5 " key={idx} >

                                <div className="innerCol flex flex-col items-center ">

                                    <Image src={approach[idx].vector} alt='approach vector 1 ' className='mb-4' />
                                    <p className='text-center text-white' >{approach[idx].text}</p>
                                    
                                </div>

                      </div> )}
             

        </div>
      
    </div>
  )
}
