import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='h-50 bg-gray-100 mt-30'>
             <div className='flex justify-center items-center gap-10 pt-10'>
                <FaInstagram />
                <FaTelegramPlane />
                <FaFacebookF />
             </div>
             <h1 className='text-center mt-10'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                 Expedita, et minus. Fugiat, perferendis quam, veniam soluta <br />
                  enim nemo facilis ullam corporis libero deleniti accusantium quidem? Modi labore minus eos. Porro.
             </h1>
      </div>
    </div>
  )
}

export default Footer
