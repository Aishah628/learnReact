import React from "react"
const Login=()=>{
return(
    <div className="main-h-screen flex bg-[#f8f6f5] items-center justify-center p-4">
        <div className="flex max-w-6xl w-full bg-white rounded-2xl overflow-hidden ">
            <div className="flex-1 p-8 shadow-xl sm:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-8">Welcome Back</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email"
                         className="block text-sm font-medium text-gray-700">Email</label>
                        
                    </div>
                    <div className='relative'>
                        <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'></span>
                        <input type='email' id='email' className='w-full border border-grey-300 rounded-lg px-12 py-3 '
                         placeholder='enter your email' 
                         autoComplete='off'/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="password">
                        </input>
                    </div>

                    </form> 


            </div>
            <div>

            </div>
        </div>

    </div>
)
}

export default Login