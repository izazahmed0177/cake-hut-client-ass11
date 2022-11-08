import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='m-12'>


<div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md bg-gray-800">
    <h1 className="text-3xl font-semibold text-center text-gray-700 text-white">Sing Up</h1>

    <form className="mt-6">
        <div>
            <label  className="block text-sm text-gray-800 text-gray-200">Username</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
            <label  className="block text-sm text-gray-800 text-gray-200">Photo Url</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
            <label  className="block text-sm text-gray-800 text-gray-200">User Email</label>
            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label for="password" className="block text-sm text-gray-800 text-gray-200">Password</label>
                
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
            </button>
        </div>
    </form>

   

   

    <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to='/login' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
</div>
            



        </div>
    );
};

export default SignUp;