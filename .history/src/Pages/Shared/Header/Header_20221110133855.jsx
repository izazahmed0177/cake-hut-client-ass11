import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import img1 from '../../../assets/images/header/1.png'

const Header = () => {
    const {user,logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.error(err))
    }

    const menuItems=<>
    <NavLink to='/' className="mr-5 hover:text-gray-900">Home</NavLink>
      <NavLink to='/ourcake' className="mr-5 hover:text-gray-900">Our Cake</NavLink>

      {
         user?.uid ?
         <>
           <NavLink to='/myreview' className="mr-5 hover:text-gray-900">My Review</NavLink>
           <NavLink to='/addcake' className="mr-5 hover:text-gray-900">Add Cake</NavLink>
         </>
         :
         <>
         
         </>

      }




      {/* <NavLink className="mr-5 hover:text-gray-900">Third Link</NavLink> */}
      <NavLink to='/blog' className="mr-5 hover:text-gray-900">Blog</NavLink>
    
    
    </>
    return (
        <div>
            
            <header className="text-gray-600 bg-slate-300 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={img1} alt="" srcset="" />
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {/* <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
      {menuItems}
    </nav>
    <div className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none   text-base mt-4 md:mt-0">
        <div className='m-6'>
            <button  className="btn btn-outline btn-secondary">
                {
                    user?.uid ?
                    <>
                    <button onClick={handleLogOut}>Log Out</button>
                    </>
                    :
                    <>
                     <Link to='/login'>Login</Link>
                    </>
                }
               
            </button>
        </div>
      <div className=" overflow-hidden border-2 border-gray-400 rounded-full w-9 flex items-center">
        {
            user?.photoURL ?
            <img className='w-8 h-8'title={user?.displayName} src={user?.photoURL}></img>
            :
            <div className='flex items-center'>
                
                <FaUser className='w-8 h-8' title='Please Log in'></FaUser>
            </div>
        }
      </div>
    </div>
  </div>
</header>



        </div>
    );
};

export default Header;