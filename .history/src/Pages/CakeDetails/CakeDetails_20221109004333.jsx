import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CakeDetails = () => {
    const cakaDetails=useLoaderData();
    const {_id,name,img,price,rating,details}=cakaDetails;
    return (
        <div>
            {/* <h1>det</h1>
            <h1>{name}</h1> */}

            <div>

            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}</h1>
      <p className="mb-8 leading-relaxed">{details}</p>
      <div className="flex justify-center">
        <span className="inline-flex   border-0 py-2 px-6  rounded text-lg">Price: ${price}</span>
        <button className="ml-4 inline-flex   border-0 py-2 px-6  rounded text-lg">Rating: {rating}</button>
      </div>
    </div>
  </div>
</section>





            </div>



            <div>



            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">Leroy Jenkins</h4>
				<span className="text-xs dark:text-gray-400">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
		<p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
		<p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
	</div>
</div>





            </div>


{/*  */}

            <div>





    

<section class="bg-gray-100">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <p class="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally
          independent from manufacturer and other group control gives you
          confidence that we will only recommend what is right for you.
        </p>

        <div class="mt-8">
          <a href="" class="text-2xl font-bold text-pink-600">
            0151 475 4450
          </a>

          <address class="mt-2 not-italic">
            282 Kevin Brook, Imogeneborough, CA 58517
          </address>
        </div>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input class="sr-only" id="option1" type="radio" tabindex="-1" />
              <label
                for="option1"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 1 </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option2" type="radio" tabindex="-1" />
              <label
                for="option2"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 2 </span>
              </label>
            </div>

            <div>
              <input class="sr-only" id="option3" type="radio" tabindex="-1" />
              <label
                for="option3"
                class="block w-full rounded-lg border border-gray-200 p-3"
                tabindex="0"
              >
                <span class="text-sm font-medium"> Option 3 </span>
              </label>
            </div>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Send Enquiry </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>





            </div>





        </div>
    );
};

export default CakeDetails;