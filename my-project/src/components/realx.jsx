import React from "react";
import Ellipse56 from "../assets/Ellipse56.png";
import avatar from "../assets/avatar.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png"
import subtract1 from "../assets/Subtract1.png"
const Realx = () => {
  return (
    <div className="max-w-full  bg-white">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
      
        <div className="row-span-3 mt-[108px]">
          <div className="flex flex-col">
            <div className="w-[360px] h-[130px] mt-8 ml-16 bg-gray-50 border-r-1 rounded-xl">
              <div className="flex space-x-4 ">
                <img
                  className="w-[80px] h-[80px] rounded-r-full ml-10 mt-4"
                  src={avatar}
                />
                <div className="font-medium mt-4">
                  <div>Jenny Wilson</div>
                  <p className="font-sans font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[360px] h-[130px] mt-8 ml-16 bg-gray-50 border-r-1 rounded-xl">
              <div className="flex space-x-4 ">
                <img
                  className="w-[80px] h-[80px] rounded-r-full ml-10 mt-4"
                  src={avatar1}
                />
                <div className="font-medium mt-4">
                  <div>Jenny Wilson</div>
                  <p className="font-sans font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[360px] h-[130px] mt-8 ml-16 bg-gray-50 border-r-1 rounded-xl">
              <div className="flex space-x-4 ">
                <img
                  className="w-[80px] h-[80px] rounded-r-full ml-10 mt-4"
                  src={avatar2}
                />
                <div className="font-medium mt-4">
                  <div>Jenny Wilson</div>
                  <p className="font-sans font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-span-2 mt-4 ml-[774px]">
            <img  className='w-[168px] h-[168px]' src={subtract1} />
         </div>
         
        <div className="row-span-2 col-span-2 ml-[467px]">
        <img className="w-[33px] h-[33px] -rotate-75 absolute left-[760px]" src={Ellipse56}/> 
        <h3 className='font-sans font-bold text-[23px] mt-7 '>Tropical Adventure</h3>
                <h4 className="font-serif font-light">for Students</h4>
                <p className="font-sans font-medium">Student Tropical Vacation: Relax and Recharge</p>
                <ul className="font-mono list-disc list-inside">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit</li>
                    <li>tortor id euismod</li>
                    <li>habitant Sed suspendisse id in ultrices</li>
                </ul>
                <button className="p-2 bg-[#F27A44] rounded-full m-3">Explore More</button>
        </div>

      </div>
    </div>
  );
};
export default Realx;
