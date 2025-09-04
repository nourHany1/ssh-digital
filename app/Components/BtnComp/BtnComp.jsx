import React from 'react'

export default function BtnComp({text}) {
  return (
    <button
    className="px-4 py-3 rounded-lg w-48 md:p-2 sm:p-1 text-[#e7267a] mt-8 LatestProjects sm:mb-6 md:mb-6 "
    style={{ border: "1px solid #e7267a" }}
  >
   {text}
  </button>
  )
}
