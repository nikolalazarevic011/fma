import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "utils/useIsMobile";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export const Gallery = ({ columns, cropImages, items }) => {
  const isMobile = useIsMobile();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const columnWidth = isMobile ? "100%" : `${100 / columns}%`;

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-wrap mx-auto max-w-7xl">
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{
            width: columnWidth,
            minHeight: !isMobile ? "450px" : "300px",
          }} // Added min-height here
          className="w-full p-1 cursor-pointer"
          onClick={() => handleImageClick(index)}
        >
          <div className="relative h-full">
            <Image
              src={item.attributes.url}
              fill // Changed to 'fill' to ensure it covers the container
              alt={item.attributes.alt || "Gallery image"}
              // className="object-cover" // Simplified, assumes cropImages is always true for consistency
              className={cropImages ? "object-cover" : "h-auto w-full"}
              priority={false}
            />
            <div className="absolute inset-0 transition duration-300 ease-in-out bg-black bg-opacity-0 hover:bg-opacity-50"></div>
          </div>
        </div>
      ))}
      {lightboxOpen && (
        <Lightbox
          slides={items.map((item) => ({
            src: item.attributes.url,
            alt: item.attributes.alt,
          }))}
          open={lightboxOpen}
          index={selectedIndex}
          close={() => setLightboxOpen(false)}
          plugins={[Slideshow, Zoom]}
        />
      )}
    </div>
  );
};
