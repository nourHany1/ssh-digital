
'use client'
import React from 'react'
import FormComp from '../Components/FormComp/FormComp'

export default function ContactUs() {
  return (
<div className='py-7' >

<FormComp sectionName="contactUs" />

<div className="container mt-20 ">

  <div className="row">

    <div className="col-lg-6 py-24 ">
      <div className="innerCol">

        <ul>

          <li className='my-3 text-white text-2xl' > <i class="text-[#e7267a] me-4 fa-solid fa-location-dot"></i> Nile Street - Giza - Egypt</li>
          <li className='my-3 text-white text-2xl' > <i class="text-[#e7267a] me-3 fa-solid fa-phone"></i> +20 01155856594</li>
          <li className='my-3 text-white text-2xl' > <i class="text-[#e7267a] me-3 fa-regular fa-envelope-open"></i> altc@info.com</li>
        </ul>
      </div>
    </div>
    <div className="col-lg-6 py-24 ">
      <div className="innerCol">
      <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d879729.6919331676!2d31.63196774625943!3d30.536754249492354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d31.1011627!2d30.6871199!4m5!1s0x14584f62a3aea979%3A0xc9d3f0a64066bda9!2z2KrZhdir2KfZhCDYo9io2Ygg2KfZhNmH2YjZhCDYqNin2YTYrNmK2LLYqdiMINin2YTZh9ix2YXYjCDZhdit2KfZgdi42Kkg2KfZhNis2YrYstipIDM1MTIyMDE!3m2!1d29.975268699999997!2d31.1375674!5e0!3m2!1sar!2seg!4v1712424432816!5m2!1sar!2seg" width="400" height="360" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</div>


</div>
  )
}
