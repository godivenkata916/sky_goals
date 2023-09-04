import React from "react";
import Group167 from '../assets/Group167.png'
const Forms=()=>{
    return(
        <div className="w-full bg-white">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                    <img className="w-[350px] h-[450px] ml-[45px]" src={Group167} />
                </div>
                <div className="row-start-1 row-end-4 ">
                    <div className="w-[320px] h-[380px] p-4 ml-44 mt-8 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-1" action="#">
                         <h1 className="font-mono font-bold text-[18px]">Book now</h1>
                         <p className="font-mono font-light text-[12px] ">Lorem ipsum dolor sit amet,consectetur adipiscing elid</p>
                         <label className="block font-mono font-normal text-[12px] " htmlFor="city">CITY</label>
                         <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="placeholder" name="city" required></input>
                         <div className="flex gap-10">
                            <label htmlFor="arrival" className="block font-mono font-normal text-[12px]"> ARRIVAL</label>
                            <label htmlFor="Derarture" className="ml-12 block font-mono font-normal text-[12px]">DEPARTURE</label>
                         </div>
                         <div className="flex gap-2">
                            <input type="text" name="arrival" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10 october" required/>
                            <input type="text" name="Derarture" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="11 october" required/>
                            </div>

                            <div className="flex gap-10">
                            <label htmlFor="arrival" className="block font-mono font-normal text-[12px]">STAR</label>
                            <label htmlFor="Derarture" className="ml-16 block font-mono font-normal text-[12px]">ROOM</label>
                         </div>
                         <div className="flex gap-2">
                            <input type="number" name="arrival" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10 " required/>
                            <input type="number" name="Derarture" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="11" required/>
                            </div>

                            <input type="button" value="BOOK" className="p-2 bg-black text-zinc-50 rounded" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forms