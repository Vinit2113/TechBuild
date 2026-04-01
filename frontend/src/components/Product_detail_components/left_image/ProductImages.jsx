import { useState } from 'react';
import img1 from '../../../assets/product-detail-images/graphic-card-img-1.png';
import img2 from '../../../assets/product-detail-images/graphic-card-img-2.jpg';
import img3 from '../../../assets/product-detail-images/graphic-card-img-3.jpg';
import img4 from '../../../assets/product-detail-images/graphic-card-img-4.jpg';
import prodVid1 from '../../../assets/product-detail-images/Generate_Processor_Video.mp4';

import './pdLeftImage.css';

const thumbnails = [
  { type: 'image', src: img1, alt: 'Graphic Card 1' },
  { type: 'image', src: img2, alt: 'Graphic Card 2' },
  { type: 'image', src: img3, alt: 'Graphic Card 3' },
  { type: 'image', src: img4, alt: 'Graphic Card 4' },
  { type: 'video', src: prodVid1, alt: 'Graphic Card Video' },
];

const ProductImages = () => {
  const [mainMedia, setMainMedia] = useState(thumbnails[0]);

  const handleThumbnailClick = (thumb) => {
    setMainMedia(thumb);
  };

  return (
    <div className="product-images-container">
      <div className="thumbnail-images-container">
        {thumbnails.map((thumb, index) => (
          <div key={index} className="thumbnail-img">
            {thumb.type === 'image' ? (
              <img
                src={thumb.src}
                alt={thumb.alt}
                className={mainMedia.src === thumb.src ? 'active' : ''}
                onClick={() => handleThumbnailClick(thumb)}
              />
            ) : (
              <video
                src={thumb.src}
                className={mainMedia.src === thumb.src ? 'active' : ''}
                onClick={() => handleThumbnailClick(thumb)}
                muted
                preload="metadata"
              />
            )}
          </div>
        ))}
      </div>

      <div className="main-images">
        {mainMedia.type === 'image' ? (
          <img src={mainMedia.src} alt="Main Product" />
        ) : (
          <video src={mainMedia.src} controls autoPlay loop />
        )}
      </div>
    </div>
  );
};

export default ProductImages;