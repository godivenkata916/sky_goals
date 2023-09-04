import React,{useState} from 'react'
import hamburgerMenu from '../assets/hamburgerMenu.svg'
import close from '../assets/close.svg'


export default function Header(){

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

    return(
        <div className='w-full h-[70px] bg-white border-b'>
            <div className='md:max-w-[1274px] max-w-[600px]  m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                <div className='hidden md:flex items-center m-96 '>
                    <ul className='flex gap-5'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Schedules</li>
                        <li>Membership</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                 <button className='flex justify-between items-center  bg-transparent  px-6 gap-2 text-slate-500'>Offers</button>
                 <button className='px-8 py-2 rounded-xl bg-[#F27A44] text-white font-bold'>Courses</button>
                 </div>

                  <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
                  </div>
            </div> 

            <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <li className='p-4 hover:bg-gray-100'>Support</li>
                    <li className='p-4 hover:bg-gray-100'>Platform</li>
                    <li className='p-4 hover:bg-gray-100'>Pricing</li>
                    <div className=' flex-col my-1 gap-2'>
                        <button className='flex justify-center items-center  bg-transparent  text-slate-500  px-6 gap-2 py-4'>
                         Offers
                        </button>
                        <button className='px-8 py-2 rounded-xl bg-[#F27A44] text-white font-bold'>Courses</button>
                    </div>
            </ul>
        </div>

        </div>
    )

}