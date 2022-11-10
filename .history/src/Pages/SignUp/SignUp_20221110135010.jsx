import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile,setLoading}=useContext(AuthContext)

    const handaleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const photoURL=form.photoURL.value;

        console.log(email,password)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            // setAuthToken(user)

            handleUpdateUserProfil(name,photoURL)
            form.reset();
        })
        .catch(err=>console.error(err))
        .finally(()=>{
            setLoading(false)
        })
    }



    const handleUpdateUserProfil=(name,photoURL)=>{
        const profile={
            displayName:name,
            photoURL:photoURL


        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(err=>console.error(err))
    }







    return (
        <div className='m-12 '>


<div className="w-full max-w-sm p-6 m-auto mx-auto bg-red-300 rounded-md shadow-md dark:bg-gray-800">
    <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Sing Up</h1>

    <form onSubmit={handaleSignUp} className="mt-6">
        <div>
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
            <input name='name'placeholder='User Name' type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Photo URL</label>
            <input name='photoURL' placeholder='Photo URL'required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        <div>
            <label className="block text-sm text-gray-800 dark:text-gray-200">User Email</label>
            <input name='email' placeholder='User Email' required type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label  className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                
            </div>

            <input name='password' required placeholder='Password' type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Sign Up
            </button>
        </div>
    </form>

   

   

    <p className="mt-8 text-xs font-light text-center text-gray-600"> Already have an account? <Link to='/login' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
</div>
            



        </div>
    );
};

export default SignUp;