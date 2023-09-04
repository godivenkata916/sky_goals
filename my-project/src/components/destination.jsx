import React from "react";
import Ellipse56 from "../assets/Ellipse56.png";
import Maskgroup1 from '../assets/Maskgroup1.png'
const Our=()=>{
    return(
     <div className="max-w-full  bg-white">

        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-start-2 row-span-2 ml-[56px]">
            <img className="w-[33px] h-[33px] -rotate-75 relative -left-5 top-1" src={Ellipse56}/> 
        <h3 className='font-mono font-thin  ml-2'>Get 20% off for student</h3>
                <h4 className="font-sans font-bold text-[43px]">Student discounts available.</h4>
                <p className="font-mono  font-medium text-[23px] ml-1 mb-3">Get ready for some fun in the sun!</p>
                <ul className="font-mono list-disc list-inside">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit</li>
                    <li>tortor id euismod</li>
                    <li>habitant Sed suspendisse id in ultrices</li>
                </ul>
                <button className="p-2 bg-[#F27A44] rounded-full m-5">Explore More</button>
            </div>

            <div class="row-end-3 row-span-2 ...">
                <img className="relative top-[85px] w-[350px]" src={Maskgroup1} />
            </div>

        </div>

     </div>
    )
}
export default Our