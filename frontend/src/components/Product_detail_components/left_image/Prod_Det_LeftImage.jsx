import { useState } from 'react';
import imageOne from '../../../assets/product_details_images/CPU_front_view_thumbnail.png';
import imageTwo from '../../../assets/product_details_images/CPU_packaging_box_thumbnail.png';
import imageThree from '../../../assets/product_details_images/Installed_CPU_on_motherboard_thumbnail.png';
import productVideo from '../../../assets/product_details_images/Generate_Processor_Video.mp4';
import mainImg from '../../../assets/product_details_images/High_end_CPU_processor_detail_shot_with_dramatic_lighting.png';

import './pdLeftImage.css';

const thumbnails = [
  { type: 'image', src: imageOne, alt: 'CPU front view' },
  { type: 'image', src: imageTwo, alt: 'CPU packaging box' },
  { type: 'image', src: imageThree, alt: 'Installed CPU on motherboard' },
  { type: 'video', src: productVideo, alt: 'CPU demo video', poster: imageTwo },
];

const Prod_Det_LeftImage = () => {
  const [mainContent, setMainContent] = useState({ type: 'image', src: mainImg });

  const handleThumbnailClick = (type, src) => {
    setMainContent({ type, src });
  };

  return (
    <div className="left">
      <div className="main-image">
        {mainContent.type === 'image' ? (
          <img src={mainContent.src} className="main-media" alt="Main Product" />
        ) : (
          <video
            key={mainContent.src} // ensures video reloads on switch
            src={mainContent.src}
            className="main-media"
            controls
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="thumbnails">
        {thumbnails.map((thumb, index) => (
          thumb.type === 'image' ? (
            <img
              key={index}
              src={thumb.src}
              alt={thumb.alt}
              className={`lst-img ${mainContent.src === thumb.src ? 'active' : ''}`}
              onClick={() => handleThumbnailClick('image', thumb.src)}
            />
          ) : (
            <video
              key={index}
              src={thumb.src}
              poster={thumb.poster}
              className={`lst-img video ${mainContent.src === thumb.src ? 'active' : ''}`}
              onClick={() => handleThumbnailClick('video', thumb.src)}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Prod_Det_LeftImage;