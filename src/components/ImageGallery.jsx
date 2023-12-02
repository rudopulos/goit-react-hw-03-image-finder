// ImageGallery.jsx
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => {
  return (
    <div className="ImageGallery">
      {images.map((image) => (
  <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
))}
    </div>
  );
};

export default ImageGallery;


