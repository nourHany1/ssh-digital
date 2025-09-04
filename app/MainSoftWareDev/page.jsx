import React from 'react'
import ArtificialIntelligence from '../Components/ArtificialIntelligence/ArtificialIntelligence'
import AboutUs from '../Components/AboutUs/AboutUs'
import AssistCyrcle from '../Components/AssistCyrcle/AssistCyrcle'
import softWareDevImage1 from '../../public/Allimages/softwareDevImages/softWare1.png'
import softWareDevImage2 from '../../public/Allimages/softwareDevImages/softWare2.png'
import softWareDevImage3 from '../../public/Allimages/softwareDevImages/softWare3.png'
import assistCyrcle1_image from '../../public/Allimages/Assist2/image.png'
import FormComp from '../Components/FormComp/FormComp'

export default function MainSoftWareDev() {
  return (
<>

<ArtificialIntelligence first_mainTitle='SoftWare' 
                        first_mainTitle2='Development'
                                    
                        first_paragraph="We are technology partners for enterprises that lean on software to accomplish their business goals. For over 2 decades, we have crafted many custom-solutions to help our clients overcome challenges and respond aptly to competition."
                        first_btnText='Contact Us'
                        first_image_1={{src:softWareDevImage1,alt:"softWareDevImage"}}
                        first_image_2={{src:"",alt:""}}
                        first_image_3={{src:"",alt:""}} 
                        sectionName='softwareDev'
                        
                        />
 

<AboutUs sectionName='Services' title='' textImage='We are a leading force in technology promotion. With our roots in Saudi Arabia and a new chapter revealing itself in Egypt, we bring a wealth of experience and knowledge to empower businesses and organizations. Our primary interest is in exploiting the potential of modern concepts such as big data analytics, artificial intelligence, computer vision, and Internet of Things solutions' 

          srcImage={softWareDevImage3} altImage={'softWareDevImage3'} />

<ArtificialIntelligence first_mainTitle='Digital' 
                        first_mainTitle2='Transformation'
                                    
                        first_paragraph="Digital transformation is a strategic process that leverages digital technologies to fundamentally change how organizations operate, deliver value to customers, and remain competitive in the digital age. It involves reimagining business processes, adopting new technologies, and fostering a culture of innovation to drive meaningful and sustainable change"
                        first_btnText='Contact Us'
                        first_image_1={{src:softWareDevImage2,alt:"Digital Transformation"}}
                        first_image_2={{src:"",alt:""}}
                        first_image_3={{src:"",alt:""}} 
                        sectionName='DigitalTransformation'
                        
                        />

<AssistCyrcle srcImage={assistCyrcle1_image} altImage={"assistCyrcle1_image"} text="we are dedicated to being a driving force behind our clients' digital transformation endeavors. We understand that each organization's path to digitalization is unique, and we approach every project with a tailored strategy. Our team of experts brings a wealth of knowledge in cutting-edge technologies, custom software development, and digital strategy." />

<FormComp />

</>
  )
}
