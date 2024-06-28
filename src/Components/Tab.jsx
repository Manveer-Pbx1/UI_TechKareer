import React from 'react'

export default function Tab() {
  return (
    <div className='px-[100px] py-[18px] border-b-[2px] shadow-sm z-0'>
      <ul className='inline-flex space-x-20 text-xl  text-gray-500'>
        <li><span className='font-bold  text-[#d3452f] '>
            Job preview
        </span>
        <div className='bg-[#d3452f] w-[61px] flex ml-auto mr-auto h-[2px] relative top-[18px] rounded-full'></div>
        </li>
        <li><span>
            Applicants
        </span></li>
        <li><span>
            Match
        </span></li>
        <li><span>
            Messages
        </span></li>
      </ul>
    </div>
  )
}
