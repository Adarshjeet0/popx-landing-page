// import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import {signup} from './../redux/reducers/authReducer';

// const Signup = () => {
//     const [credentials, setCredentials] = useState({name:"", email:"", password:"",phone:"",companyName:"", isAgency:false})
//     const navigate = useNavigate();
//     const handleSubmit = (e)=>{
//         console.log("Received data:",credentials);
//         e.preventDefault();
//         setCredentials({...credentials, loggedIn:true});
//         dispatch(signup(credentials));
//         navigate('/login');
//     };
//     return (
//         <>
//             <div className='h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100'>

//                 <div className="flex flex-col gap-2">
//                     <h2 className='font-bold w-[60%] text-3xl'>Create your PopX Account</h2>

//                     <form action="" className='flex flex-col gap-3 my-5' onSubmit={handleSubmit}>
//                         <div className="flex flex-col">
//                             <label htmlFor="email" className="text-sm font-medium text-purple-600">Full Name</label>
//                             <input 
//                             type="text" 
//                             id="name" 
//                             placeholder="Enter full name" 
//                             className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             value={credentials.name} 
//                             onChange={()=>{(e)=> setCredentials({...credentials, name:e.target.value})}}
//                             />
//                         </div>

//                         <div className="flex flex-col">
//                             <label htmlFor="email" className="text-sm font-medium text-purple-600">Phone Number</label>
//                             <input 
//                             type="number" 
//                             id="number" 
//                             placeholder="Enter phone number" 
//                             className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             value={credentials.phone} 
//                             onChange={()=>{(e)=> setCredentials({...credentials, phone:e.target.value})}} />
//                         </div>

//                         <div className="flex flex-col">
//                             <label htmlFor="email" className="text-sm font-medium text-purple-600">Email Address</label>
//                             <input 
//                             type="email" 
//                             id="email" 
//                             placeholder="Enter email address" 
//                             className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             value={credentials.email} 
//                             onChange={()=>{(e)=> setCredentials({...credentials, email:e.target.value})}} />
//                         </div>

//                         <div className="flex flex-col">
//                             <label htmlFor="password" className="text-sm font-medium text-purple-600">Password</label>
//                             <input 
//                             type="password" 
//                             id="password" 
//                             placeholder="Enter password" 
//                             className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             value={credentials.password} 
//                             onChange={()=>{(e)=> setCredentials({...credentials, password:e.target.value})}} />
//                         </div>

//                         <div className="flex flex-col">
//                             <label htmlFor="text" className="text-sm font-medium text-purple-600">Company Name</label>
//                             <input 
//                             type="text" 
//                             id="company" 
//                             placeholder="Enter Company" 
//                             className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                             value={credentials.company} 
//                             onChange={()=>{(e)=> setCredentials({...credentials, company:e.target.value})}} />
//                         </div>

//                         <div className="flex flex-col">
//                             <label htmlFor="email" className="text-sm font-medium text-purple-600">Are you an Agency?</label>
//                             <div className="flex items-center gap-2">
//                                 <div className='flex items-center gap-2'>
//                                     <label htmlFor="">Yes</label>
//                                     <input type="radio" name="yes" id="yes" />
//                                 </div>
//                                 <div className='flex items-center gap-2'>
//                                     <label htmlFor="">No</label>
//                                     <input type="radio" name="yes" id="no" />
//                                 </div>
//                             </div>
//                         </div>

//                         <button className='bg-[#7B3FF6] my-3 w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer'>Create Account</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Signup




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from './../redux/reducers/authReducer';

const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: "", 
        email: "", 
        password: "", 
        phone: "", 
        companyName: "", 
        isAgency: false
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Received data:", credentials);
        dispatch(signup(credentials));
        navigate('/login');
    };

    return (
        <div className='h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100'>
            <div className="flex flex-col gap-2">
                <h2 className='font-bold w-[60%] text-3xl'>Create your PopX Account</h2>

                <form className='flex flex-col gap-3 my-5' onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium text-purple-600">Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Enter full name" 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={credentials.name} 
                            onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-sm font-medium text-purple-600">Phone Number</label>
                        <input 
                            type="number" 
                            id="phone" 
                            placeholder="Enter phone number" 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={credentials.phone} 
                            onChange={(e) => setCredentials({ ...credentials, phone: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-purple-600">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter email address" 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={credentials.email} 
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium text-purple-600">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter password" 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={credentials.password} 
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="companyName" className="text-sm font-medium text-purple-600">Company Name</label>
                        <input 
                            type="text" 
                            id="companyName" 
                            placeholder="Enter Company" 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={credentials.companyName} 
                            onChange={(e) => setCredentials({ ...credentials, companyName: e.target.value })} 
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-purple-600">Are you an Agency?</label>
                        <div className="flex items-center gap-2">
                            <div className='flex items-center gap-2'>
                                <label htmlFor="yes">Yes</label>
                                <input 
                                    type="radio" 
                                    name="isAgency" 
                                    id="yes" 
                                    value="true"
                                    checked={credentials.isAgency === true} 
                                    onChange={() => setCredentials({ ...credentials, isAgency: true })}
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor="no">No</label>
                                <input 
                                    type="radio" 
                                    name="isAgency" 
                                    id="no" 
                                    value="false"
                                    checked={credentials.isAgency === false} 
                                    onChange={() => setCredentials({ ...credentials, isAgency: false })}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className='bg-[#7B3FF6] my-3 w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer'>
                        Create Account
                    </button>
                    <Link to="/signup" className="text-purple-600 block mt-3">I am a New User</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
