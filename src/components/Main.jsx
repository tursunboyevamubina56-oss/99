import React from 'react'
import { BsPeopleFill } from "react-icons/bs";
import { SiBandsintown } from "react-icons/si";
import { FaHands } from "react-icons/fa6";
import second from '../assets/thebigone.png'
import thred from '../assets/logos.png'
const Main = () => {
  return (
    <div>
        <div>
            <h1 className=' text-3xl text-center mt-10'>Our Clients</h1>
            <p className='text-center mt-2'>We have been working with some Fortune 500+ clients</p>
            <div>
                <img src={thred} alt=""  className='ml-20 h-35 mt-15 '/>
            </div>
        </div>
        <div>
            <h1 className='text-center text-3xl mt-20'>Manage your entire community <br />
             in a single system</h1>
        </div>
        <div className=' flex justify-center items-center gap-50 mt-30'>
            <div className='h-60 w-80 shadow-md '>
                <div className='flex justify-center items-center ml-35 rounded-2xl bg-green-200 h-10 w-10'>
                     <BsPeopleFill  className='text-2xl '/>
                </div>
                
                <h1 className='text-center text-2xl'>
                    Membership <br />
                     Organisations
                </h1>
                <p className='text-center mt-5'>
                    Our membership management <br />
                     software provides full automation of  <br />
                     membership renewals and payments
                </p>
            </div>

              <div className='h-60 w-80 shadow-md '>
                 <div className='flex justify-center items-center ml-35 rounded-2xl bg-green-200 h-10 w-10'>
                    <SiBandsintown className='text-2xl' />

                </div>
                <h1 className='text-center text-2xl'>
                    Membership <br />
                     Organisations
                </h1>
                <p className='text-center mt-5'>
                    Our membership management <br />
                     software provides full automation of  <br />
                     membership renewals and payments
                </p>
            </div>

              <div className='h-60 w-80 shadow-md '>
                <div className='flex justify-center items-center ml-35 rounded-2xl bg-green-200 h-10 w-10'>
                    <FaHands className='text-2xl' />


                </div>
                <h1 className='text-center text-2xl'>
                    Membership <br />
                     Organisations
                </h1>
                <p className='text-center mt-5'>
                    Our membership management <br />
                     software provides full automation of  <br />
                     membership renewals and payments
                </p>
            </div> 
        </div>

        <div className='flex justify-center items-center gap-60 mt-40'>
              <div>
               <img src={second} alt="" className='h-80 w-80' />
              </div>
              <div>
                <h1 className='text-3xl mb-5'>The unseen of spending three <br />
                 years at Pixelgrade</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br />
                  sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. <br />
                  Pellentesque placerat vestibulum lorem sed porta. Nullam mattis <br />
                  tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. <br />
                  Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                  <button className=' bg-green-500 rounded-xl h-10 w-30 mt-10 text-white'>Learn More</button>
              </div>
        </div>
    </div>
  )
}

export default Main
