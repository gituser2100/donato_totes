import React from 'react';
import toteBag1 from '../images/tote_bags/PHOTO-2024-12-22-19-10-24 5.jpg';
import toteBag2 from '../images/tote_bags/PHOTO-2025-03-10-22-15-57 11.jpg';
import toteBag3 from '../images/tote_bags/PHOTO-2025-03-10-22-15-57 58.jpg';
import toteBag4 from '../images/tote_bags/PHOTO-2025-03-10-22-15-57 10.jpg';
import toteBag5 from '../images/tote_bags/PHOTO-2025-03-10-22-15-57 68.jpg';
import toteBag6 from '../images/tote_bags/PHOTO-2025-03-10-22-15-57 20.jpg';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- MOCK PRODUCT DATA ---
const mockProducts = [
    { imageUrl: toteBag1 },
    { imageUrl: toteBag2},
    { imageUrl: toteBag3 },
    { imageUrl: toteBag4 },
    { imageUrl: toteBag5 },
    { imageUrl: toteBag6 },
];

const ProductGalleryPreview: React.FC = () => {
    const handleViewMore = () => {
        console.log("Navigating to the main shop page...");
    };

    return (
        <section className="bg-white rounded-xl shadow-inner">
            <div className="container px-5 py-16 mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-sm tracking-widest font-medium text-pink-600 mb-1 uppercase">
                        Our Bestsellers
                    </h2>
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Shop The Look: Top Totes
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-3 text-gray-700">
                        Discover the styles our customers can't live without. These versatile carry-alls blend premium quality with effortless style.
                    </p>
                </div>
                
                {/* 3-Column Square Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {mockProducts.map((product, index) => (
                        <div key={index} className="w-full">
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl">
                                <div className="aspect-square w-full">
                                    <img 
                                        alt={`Tote ${index + 1}`}
                                        className="object-cover object-center w-full h-full" 
                                        src={product.imageUrl}
                                        onError={(e) => { 
                                            e.currentTarget.src = 'https://placehold.co/600x600/000000/ffffff?text=Image+Not+Found'; 
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View More Button */}
                <div className="flex justify-center mt-12">
                    <Link to={'/gallery'}>
                        <button 
                            onClick={handleViewMore}
                            className="inline-flex items-center bg-pink-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105 uppercase text-base tracking-wider"
                            >
                            View All Totes
                            <ArrowRightIcon />
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ProductGalleryPreview;