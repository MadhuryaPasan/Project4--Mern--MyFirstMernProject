import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from "../pages/Home";
import ContactUs from "../pages/contactUs/ContactUs";
import Numbers from "../pages/contactUs/numbers/numbers";

const nav = () => {

  const navigate = useNavigate()


  return (
    <>
      <div className=' bg-emerald-600 py-5'>
        <div className=' text-4xl font-bold text-white  text-center'>
          nav bar
        </div>
        <br />
        < div className='flex justify-center gap-2' >
          <button id='HomeBtn' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to='/' >Home</Link>
          </button>

          <button onClick={()=>navigate('/')} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Home on click</button>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link to='/ContactUs'>Contact Us</Link>
          </button>


        </ div>




      </div>
    </>
  )
}

export default nav