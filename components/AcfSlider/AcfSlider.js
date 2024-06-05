// // components/AcfSlider.js

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Navigation } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

// const AcfSlider = ({ images }) => {
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <a href={image.url} target="_blank" rel="noopener noreferrer">
//             <img src={image.image.url} alt={image.image.title} style={{ width: '100%', height: 'auto' }} />
//           </a>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default AcfSlider;

// components/AcfSlider.js

//!works
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Navigation } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // Install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

// const AcfSlider = ({ images }) => {
//   // Convert object keys to an array of image details
//   const slides = [];
//   for (let i = 0; i < images.images; i++) {
//     if (images[`images_${i}_image`] && images[`images_${i}_url`]) {
//       slides.push({
//         image: images[`images_${i}_image`].url,
//         url: images[`images_${i}_url`],
//         title: images[`images_${i}_image`].title || '',  // Optional: handle if title is undefined
//         alt: images[`images_${i}_image`].alt || ''       // Optional: handle if alt is undefined
//       });
//     }
//   }

//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <a href={slide.url} target="_blank" rel="noopener noreferrer">
//             <img src={slide.image} alt={slide.alt || 'Slide image'} style={{ width: '100%', height: 'auto' }} />
//           </a>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default AcfSlider;

//!new to look like slides per view

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';               // Core Swiper styles
// import 'swiper/css/pagination';   // Pagination module styles

// const AcfSlider = ({ images }) => {
//   const slides = [];
//   for (let i = 0; i < images.images; i++) {
//     if (images[`images_${i}_image`] && images[`images_${i}_url`]) {
//       slides.push({
//         image: images[`images_${i}_image`].url,
//         url: images[`images_${i}_url`],
//         title: images[`images_${i}_image`].title || '',  // Optional: handle if title is undefined
//         alt: images[`images_${i}_image`].alt || ''       // Optional: handle if alt is undefined
//       });
//     }
//   }

//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Pagination]}
//       className="mySwiper"  // Use a custom class for additional styling
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <a href={slide.url} target="_blank" rel="noopener noreferrer">
//             <img src={slide.image} alt={slide.alt || 'Slide image'} style={{ width: '100%', height: 'auto' }} />
//           </a>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default AcfSlider;

//! better styleing
// // Import Swiper React components and styles
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import Image from "next/image"; // Next.js Image component for optimized images

// const AcfSlider = ({ images }) => {
//   const slides = [];
//   for (let i = 0; i < images.images; i++) {
//     if (images[`images_${i}_image`] && images[`images_${i}_url`]) {
//       slides.push({
//         image: images[`images_${i}_image`].url,
//         url: images[`images_${i}_url`],
//         title: images[`images_${i}_image`].title || "",
//         alt: images[`images_${i}_image`].alt || "",
//       });
//     }
//   }

//   return (
//     <div className="mx-auto max-w-7xl py-10">
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="flex items-center justify-center">
//             <a href={slide.url} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={slide.image}
//                 alt={slide.alt}
//                 width={270}
//                 height={100}
//                 // className="rounded-lg shadow-lg" // Tailwind styles for rounding corners and adding shadows
//               />
//             </a>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default AcfSlider;

//! so the pagnation is under the slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image"; // Next.js Image component for optimized images

const AcfSlider = ({ images }) => {
  const slides = [];
  for (let i = 0; i < images.images; i++) {
    if (images[`images_${i}_image`] && images[`images_${i}_url`]) {
      slides.push({
        image: images[`images_${i}_image`].url,
        url: images[`images_${i}_url`],
        title: images[`images_${i}_image`].title || "",
        alt: images[`images_${i}_image`].alt || "",
      });
    }
  }

  return (
    <div className="mx-auto max-w-7xl py-8" >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="swiper" // Added padding-bottom here
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <a href={slide.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={slide.image}
                alt={slide.alt}
                width={270}
                height={100}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default AcfSlider;
