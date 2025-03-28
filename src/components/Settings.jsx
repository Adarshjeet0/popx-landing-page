import React from 'react'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const Settings = () => {
    return (
        <>
            <div className='h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100'>
                <div className="header flex justify-between items-center">
                    <h2 className='font-bold text-xl'>Account Settings</h2>
                    <Link to='/' className='cursor-pointer'><MdHome size={23}/></Link>
                </div>

                <div className="info flex flex-col gap-3 my-8">
                    <div className="flex gap-3">
                        <div className="h-20 w-20 rounded-full bg-gray-200 relative">
                            <div className='h-7 w-7 flex items-center justify-center rounded-full text-white bg-[#7B3FF6] absolute right-0 -bottom-0'>
                                <FaCamera />
                            </div>
                        </div>


                        <div className="info flex flex-col ">
                            <h3 className='font-semibold text-lg'>Marry Doe</h3>
                            <span className='text-gray-600 font-semibold hover:underline cursor-pointer'>Marry@gmail.com</span>
                        </div>
                    </div>

                    <p className='text-gray-600 font-semibold pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores numquam, voluptas omnis voluptate voluptates ipsum dolor sit.</p>
                </div>
            </div>
        </>
    )
}

export default Settings
