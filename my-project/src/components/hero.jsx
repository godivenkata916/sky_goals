import React from 'react';
import Group from '../assets/Group 171.png';
import Ellipse46 from '../assets/Ellipse46.png';
const Hero =()=>{

    return(
        <div className='max-w-full h-[600px] bg-[#F8F1D3]'>
            <div className='md:max-w-[1274px] m-auto grid  md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            {/* <img src={Ellipse46} /> */}
                <div className='mt-[108px] w-[636px] h-[421px]  bg-[#F8F1D3]'>
                    <img className='w-[28px] mb-2' src={Ellipse46} />
                    <p className='font-sans font-semibold'>Discover the beauty of the tropics</p>
                    <h1 className='font-sans font-extrabold text-[63px]'>Tropical</h1>
                    <h1 className='font-sans font-extrabold text-[65px]'>Destinations</h1>
                    <h1 className='font-mono font-extrabold text-[65px]'>For Student</h1>
                    <p className='font-light md:line-clamp-3'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae</p>
                    <button className='px-8 py-2 rounded-xl bg-[#F27A44] text-white font-bold mt-2'>SIGN UP</button>
                </div>
               <img  className='md:order-last  order-first  col-end-7 max-h-[512px]' src={Group} />
            </div>
        </div>
    )
}
export default Hero