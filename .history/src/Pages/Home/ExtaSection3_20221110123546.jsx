import React from 'react';
import img2 from '../../assets/images/home/2.jpg'
import img3 from '../../assets/images/home/3.jpg'
import img4 from '../../assets/images/home/4.jpg'

const ExtaSection3 = () => {
    return (
        <div>
          
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				
				<h3 className="text-3xl font-bold">Get Online Cake Delivery for a Variety of Cake Flavors</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				
			</div>
		</div>

		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={img3} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				
				<h3 className="text-3xl font-bold">Get Online Cake Delivery for a Variety of Cake Flavors</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
			
			</div>
		</div>


		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img4} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				
				<h3 className="text-3xl font-bold">Get Online Cake Delivery for a Variety of Cake Flavors</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
			
			</div>
		</div>
	</div>
</section>



            
        </div>
    );
};

export default ExtaSection3;