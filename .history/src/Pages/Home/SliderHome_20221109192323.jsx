import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'

const SliderHome = () => {








    return (
        <div>
            <div className="relative flex items-center justify-center w-full dark:text-gray-50">
	<button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
		<svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
	<div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">

		              <PhotoProvider>
                        <PhotoView src={img1}>
                       
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" style={{ objectFit: 'cover' }} src={img1}alt="Image 1" />
                        </PhotoView>

                        </PhotoProvider>


			{/* <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={img1}alt="Image 1" /> */}
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			{/* <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={img2} alt="Image 2" /> */}

			<PhotoProvider>
                        <PhotoView src={img2}>
                       
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" style={{ objectFit: 'cover' }} src={img2}alt="Image 1" />
                        </PhotoView>

                        </PhotoProvider>

			
			
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			{/* <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={img3} alt="Image 3" /> */}

			<PhotoProvider>
                        <PhotoView src={img3}>
                       
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" style={{ objectFit: 'cover' }} src={img3}alt="Image 1" />
                        </PhotoView>

                        </PhotoProvider>



		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			{/* <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={img4} alt="Image 4" /> */}

			<PhotoProvider>
                        <PhotoView src={img4}>
                       
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" style={{ objectFit: 'cover' }} src={img4}alt="Image 1" />
                        </PhotoView>

                        </PhotoProvider>
		</div>
		<div className="relative flex flex-shrink-0 w-full sm:w-auto">
			{/* <img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" src={img5} alt="Image 5" /> */}

			<PhotoProvider>
                        <PhotoView src={img5}>
                       
						<img className="object-cover object-center h-96 aspect-square dark:bg-gray-500" style={{ objectFit: 'cover' }} src={img5}alt="Image 1" />
                        </PhotoView>

                        </PhotoProvider>
		</div>
	</div>
	<button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
		<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
			<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
		</svg>
	</button>
</div>
            
        </div>
    );
};

export default SliderHome;