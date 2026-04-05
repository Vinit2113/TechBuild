import { useEffect, useState } from "react";
import "./pdLeftImage.css";

const ProductImages = ({ product }) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [mainMedia, setMainMedia] = useState(null);

  useEffect(() => {
    if (!product) return;

    const items = [];

    // Add images from backend
    product.images?.forEach((img) => {
      items.push({
        type: "image",
        src: img.media_url.startsWith("http")
          ? img.media_url
          : `http://localhost:54807${img.media_url}`, // handle relative URLs
        alt: img.alt_text || "Product Image",
      });
    });

    // Add videos if available (currently backend does not provide, but kept for future)
    product.videos?.forEach((vid) => {
      items.push({
        type: "video",
        src: vid.media_url.startsWith("http")
          ? vid.media_url
          : `http://localhost:54807${vid.media_url}`,
        alt: vid.alt_text || "Product Video",
      });
    });

    setMediaItems(items);

    // Set first item as main media by default
    if (items.length > 0) setMainMedia(items[0]);
  }, [product]);

  const handleThumbnailClick = (item) => setMainMedia(item);

  if (!product) return <p>Loading…</p>;

  return (
    <div className="product-images-container">
      {/* Thumbnails */}
      <div className="thumbnail-images-container">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`thumbnail-img ${mainMedia?.src === item.src ? "active-thumb" : ""
              }`}
            onClick={() => handleThumbnailClick(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video src={item.src} muted preload="metadata" />
            )}
          </div>
        ))}
      </div>

      {/* Main Display */}
      <div className="main-images">
        {mainMedia?.type === "image" ? (
          <img src={mainMedia.src} alt={mainMedia.alt} />
        ) : mainMedia?.type === "video" ? (
          <video src={mainMedia.src} controls autoPlay loop />
        ) : (
          <p>No media available</p>
        )}
      </div>
    </div>
  );
};

export default ProductImages;