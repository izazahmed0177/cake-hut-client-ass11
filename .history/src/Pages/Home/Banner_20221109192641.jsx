import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
<div className="p-6 py-12 bg-violet-400 text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to 50% Off
				
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free buy cake! Use code:</span>
				<span className="font-bold text-lg">HERO</span>
			</div>
			<Link to='/ourcake'  rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Buy Now</Link>
		</div>
	</div>
</div>
  
        </div>
    );
};

export default Banner;