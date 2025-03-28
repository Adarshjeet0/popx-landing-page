import React,{useState} from 'react'

const Login = () => {
    const [credentials, setCredentials] = useState({email:"", password:""});
    const handleSubmit ()
    return (
        <>
            <div className='h-[100vh] max-w-[400px] relative px-5 py-5 mx-auto bg-gray-100'>

                <div className="flex flex-col gap-2">
                    <h2 className='font-bold w-[60%] text-3xl'>Signin to your PopX Account</h2>
                    <p className='w-[75%] text-gray-400 font-semibold text-lg'>This a demo prototype for login and signup</p>

                    <form action="" className='my-5'>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium text-purple-600">Email Address</label>
                            <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter email address" 
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={credentials.name} 
                            onChange={()=>{(e)=> setCredentials({...credentials, name:e.target.value})}} />
                        </div>

                        <div className="flex flex-col my-4">
                            <label htmlFor="password" className="text-sm font-medium text-purple-600">Password</label>
                            <input type="password" id="password" placeholder="Enter password" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>

                        <button className='bg-[#7B3FF6] w-full hover:bg-[#5b15e8] text-white font-semibold py-3 rounded-lg cursor-pointer'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
