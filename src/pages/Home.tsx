import React from 'react'
import Hero from '../components/Hero';
import ProductGalleryPreview from '../components/ProductGalleryPreview';

const Home :React.FC = () => {
  return (
    <>
        <Hero />
        <ProductGalleryPreview />
    </>
  )
}

export default Home