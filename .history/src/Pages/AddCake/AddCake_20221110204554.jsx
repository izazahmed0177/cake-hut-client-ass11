import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const AddCake = () => {




  const handlePlaceCakeAdd=event=>{
    event.preventDefault();
    const form=event.target;
  
    const name=form.name.value;
    const img=form.img.value;
    const price=form.price.value;
    const rating=form.rating.value;
    const details=form.details.value;

    // console.log(name,img,price,rating,details)
   

    const cakeAdd={
        name,
        img,
        price,
        rating,
        details

    }

    fetch('https://cake-hut-server-ass11.vercel.app/addcake',{
        method:'POST',
        headers:{
            'content-type':'application/json',
            authorization:`Bearer ${localStorage.getItem('cake-Token')}`
        },
        body:JSON.stringify(cakeAdd)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if (data.acknowledged) {
            alert('Cake Add successfully')
            toast.success('Cake Add Successfully')
            form.reset();
        }
    })

    .catch(err=>console.error(err));




}


useEffect(()=>{
  document.title='Cake Hut Add Cake ';
})





    return (
        <div>
            {/* <h1>add cake</h1> */}
            <div className='text-center text-4xl'>
              <h1>Admin Panel</h1>
            </div>
            <div className='text-center text-2xl'>
              <h1>Only admin can add data</h1>
            </div>

      <div className="mt-10 sm:mt-0 m-6">

        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-3  "> 
            <form onSubmit={handlePlaceCakeAdd}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-slate-300 px-4 py-5 sm:p-6">

                  <div className="grid grid-cols-6 gap-6">


                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Cake name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder='Cake Name'
                        required
                       
                       
                        className="mt-1  w-full rounded-md border-gray-300 shadow-sm py-2 px-3  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Cake Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder='Cake Price'
                        required
                       
                       
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Cake Image URL
                      </label>
                      <input
                        
                        name="img"
                        placeholder='Cake Image URL'
                        required
                      
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        
                      </input>
                    </div>

                    <div className="col-span-6 lg:col-span-3 md:col-span-3">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Cake Rating
                      </label>
                      <input
                        type="text"
                        name="rating"
                        placeholder='Cake Rating'
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Cake Details
                      </label>
                      <textarea
                        type="text"
                        name="details"
                        placeholder='Cake Details'
                        required
                        
                        rows="8"
                       
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>
                </div>


                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save Cake
                  </button>
                </div>

                
              </div>
            </form>



          </div>
        </div>
      </div>







      







        </div>
    );
};

export default AddCake;