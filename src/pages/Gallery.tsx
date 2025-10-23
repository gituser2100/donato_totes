import { useState, useEffect } from 'react';


// Import all images from the images directory
// Adjust the path to match your actual images directory structure
// ✅ Make sure your folder path is correct relative to this file
// Example folder structure:
// src/
//   assets/
//     tote_bags/
//       image1.jpg
//       image2.png

const getGalleryImages = () => {
  try {
    // Eager: true means images are imported immediately and available to use
    const images = import.meta.glob('../images/tote_bags/*.{png,jpg,jpeg,svg,webp}', {
      eager: true,
    });

    // Extract the default export (actual image URL) from each module
    return Object.values(images).map((img: any) => img.default);
  } catch (error) {
    console.error('Error loading images:', error);
    // Fallback to placeholder images
    return [
      'https://placehold.co/600x800/f0f0f0/333333?text=Tote+1',
      'https://placehold.co/800x600/f0f0f0/333333?text=Tote+2',
      // ...rest of placeholders
    ];
  }
};


interface ImageModalProps {
  image: string;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  total: number;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, index, onClose, onNext, onPrev, total }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors"
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white hover:text-pink-500 transition-colors"
        aria-label="Previous"
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white hover:text-pink-500 transition-colors"
        aria-label="Next"
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={image}
          alt={`Gallery image ${index + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        <p className="text-white text-center mt-4 text-sm">
          {index + 1} / {total}
        </p>
      </div>
    </div>
  );
};

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const galleryImages = getGalleryImages();
      setImages(galleryImages);
      setLoading(false);
    };

    loadImages();
  }, []);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm tracking-widest font-medium text-pink-600 mb-2 uppercase">
            Our Collection
          </h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our stunning collection of premium tote bags. Click any image to view in full size.
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openImage(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Tote bag ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex items-center space-x-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-sm font-medium">View Full Size</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {images.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No images found in the gallery.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <ImageModal
          image={images[selectedImage]}
          index={selectedImage}
          onClose={closeImage}
          onNext={nextImage}
          onPrev={prevImage}
          total={images.length}
        />
      )}
    </section>
  );
};

export default GalleryPage;