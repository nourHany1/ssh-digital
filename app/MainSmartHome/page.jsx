import React from 'react'
import smart1 from '../../public/Allimages/smartHome/smart1.png'
import Exploring from '../Components/Exploring/Exploring'
import ArtificialIntelligence from '../Components/ArtificialIntelligence/ArtificialIntelligence'
import AssistCyrcle from '../Components/AssistCyrcle/AssistCyrcle'
import smart3 from '../../public/Allimages/smartHome/smart3.png'
import FormComp from '../Components/FormComp/FormComp'

export default function MainSmartHome() {
  return (
<>

<ArtificialIntelligence first_mainTitle='Smart' 
                        first_mainTitle2='Home'
                                    
                        first_paragraph="The concept of home has evolved into something truly remarkable—smart homes. These technological marvels are not just residences; they are intelligent ecosystems that respond to your every need. Imagine walking into a well-lit, comfortably climate-controlled home, where your favorite music plays softly, and your security system ensures peace of mind."
                        first_btnText='Contact Us'
                        first_image_1={{src:smart1,alt:"smart home"}}
                        first_image_2={{src:"",alt:""}}
                        first_image_3={{src:"",alt:""}} 
                        sectionName='smartHome'
                        
                        />


<Exploring />

<AssistCyrcle srcImage={smart3} altImage={"smart3"} text='aLTC plays a pivotal role in turning futuristic concepts into tangible realities. These companies possess the technological prowess to craft user-friendly mobile applications, serving as the command center for smart devices.' />

<FormComp />

</>
  )
}
