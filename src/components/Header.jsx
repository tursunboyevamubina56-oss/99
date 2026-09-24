import React from 'react'
import logo from '../assets/ecologo.png'
import first from '../assets/thebigone.png'
const Header = () => {
  return (
    <div>
      <header>
       
       <nav className='flex justify-around items-center h-20 '>
         <img src={logo} alt="" className='h-5 w-40' />
        <ul className=' flex justify-center items-center gap-10'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Fouvprits</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Direction</a></li>
            <li><a href="#">Pricing</a></li>
            <li><button className='p-3 bg-green-700 text-cyan-50 rounded-xl'>Register now</button></li>
        </ul>
       </nav>
       
       <div className='flex justify-center items-center gap-50  bg-gray-100 h-130'>
          <div>
            <h1 className=' text-black text-6xl'>Lessons and insights <br />
            <span className='text-6xl text-green-700 mt-10'>from 8 years</span></h1>
            <p className='text-black mt-10'>Where to grow your business as a photographer: site or social media?</p>
            <button className='text-white h-10 w-40 rounded-2xl mt-10 bg-emerald-800'>Register</button>
          </div>

          <div>
            <img src={first} alt=""  className='h-80 w-80'/>
          </div>
       </div>


      </header>
    </div>
  )
}

export default Header
