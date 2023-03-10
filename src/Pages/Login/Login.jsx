import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { singIn, googleSignIn,setLoading}=useContext(AuthContext);

    //location 
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || '/';

//login handalar
    const handaleLogin=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        singIn(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user)

            
            const curentUser={
                email:user.email
            }
            console.log(curentUser)
            form.reset()
            //get jwt token
            fetch('https://cake-hut-server-ass11.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'

                },
                body:JSON.stringify(curentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                //local storage set
                localStorage.setItem('cake-Token',data.token);
                 navigate(from,{replace:true})
            })

            // navigate(from,{replace:true});
        })
        .catch(err=>{
            console.error(err)
            
        })
       
    }
//----------------
//google login
    const handaleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const user=result.user;
            console.log(user)
            // --------------

            const curentUser={
                email:user.email
            }
            console.log(curentUser)
          
            fetch('https://cake-hut-server-ass11.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'

                },
                body:JSON.stringify(curentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                //local storage set
                localStorage.setItem('cake-Token',data.token);
                 navigate(from,{replace:true})
            })



           
                
        })
        .catch(err=>console.error(err))
        
    }


    useEffect(()=>{
        document.title='Cake Hut Login';
    })


    return (
        <div className='m-12'>


<div className="w-full max-w-sm p-6 m-auto mx-auto bg-red-300 rounded-md shadow-md dark:bg-gray-800">
    <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Brand</h1>

    <form onSubmit={handaleLogin} className="mt-6">
        <div>
            <label  className="block text-sm text-gray-800 dark:text-gray-200">User Email</label>
            <input name='email' required type="email" placeholder='User Email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label  className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
               
            </div>

            <input name='password' placeholder='Password' required type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
            </button>
        </div>
    </form>

    <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
        </span>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>

    <div className="flex items-center mt-6 -mx-2">
        <button onClick={handaleGoogleSignIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>

        
    </div>

    <p className="mt-8 text-xs font-light text-center text-gray-600"> Don't have an account? <Link to='/signup' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
</div>
            



        </div>
    );
};

export default Login;