import React from 'react'
import ArtificialIntelligence from '../Components/ArtificialIntelligence/ArtificialIntelligence'
import AssistComp from '../Components/AssistComp/AssistComp'
import Approach from '../Components/Approach/Approach'
import Studies from '../Components/Studies/Studies'
import Ai_Image from '../../public/Allimages/ServicesImages/AIimage.png'
import borderCyrcle from '../../public/Allimages/ServicesImages/borderCyrcle.png'
import stars from '../../public/Allimages/ServicesImages/stars.png'
import studies1 from '../../public/Allimages/studies/studies1.jpg'
import studies2 from '../../public/Allimages/studies/studies2.jpg'
import FormComp from '../Components/FormComp/FormComp'

export default function Ai() {
  return (
<>
<ArtificialIntelligence first_mainTitle='Artificial' 
                        first_mainTitle2='intelligence (AI)'
                                    
                        first_paragraph="Artificial intelligence (AI)
                                is a field of computer science that deals with the 
                                creation of intelligent ents, which are systems that
                                can reason, learn, and act autonomously. AI includes
                                a wide range of techniques, including machine learning,
                                  deep learning, natural language processing, and computer vision"
                        first_btnText='Contact Us'
                        first_image_1={{src:Ai_Image,alt:"Ai_Image"}}
                        first_image_2={{src:borderCyrcle,alt:"borderCyrcle"}}
                        first_image_3={{src:stars,alt:"stars"}}  />



      <AssistComp  />

      <Approach />
      <Studies  hideBTN={true} sectionName='subProjects' image1={studies1} image2={studies2} image3={studies1} />
      <FormComp />

</>
  )
}
