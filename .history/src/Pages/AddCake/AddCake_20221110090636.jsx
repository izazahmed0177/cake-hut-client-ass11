import React from 'react';

const AddCake = () => {
    return (
        <div>
            {/* <h1>add cake</h1> */}


           



    



      <div className="mt-10 sm:mt-0 m-6">

        <div className="md:grid md:grid-cols-3 md:gap-6">


          


          <div className="mt-5 md:col-span-3  ">


            
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-slate-300 px-4 py-5 sm:p-6">

                  <div className="grid grid-cols-6 gap-6">


                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Cake name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1  w-full rounded-md border-gray-300 shadow-sm py-2 px-3  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>



                    



                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Cake Price
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>



                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Cake Image URL
                      </label>
                      <input
                        id="country"
                        name="country"
                      
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        

                      </input>
                    </div>



                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>



                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
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
                    Save
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