//! video good

// import React from "react";
// import PropTypes from "prop-types";
// import { useIsMobile } from "utils/useIsMobile";
// import { getHeightClass } from "utils/spacingAndAlignment";

// export const AcfVideo = ({
//   src,
//   poster,
//   controls,
//   autoplay = true,
//   loop = true,
//   className = "",
//   muted = true,
//   heightProp,
//   isEmbed,
//   ...props
// }) => {

//   const isMobile = useIsMobile();
//   const numericHeight = Number(heightProp);  // Convert heightProp to a number

//   const showControls = () => controls !== "0";

//   // Calculate responsive height based on mobile state and numeric height
//   const responsiveHeight = !isMobile || numericHeight < 400
//     ? `${heightProp}px` // Use full height on non-mobile
//     : `${heightProp / 2}px`; // Use half height on mobile

//   const styles = {
//     height: responsiveHeight,
//   };

//   return (
//     <div
//       className={`relative w-full overflow-hidden ${className}`}
//       style={styles}
//     >
//       <video
//         src={src}
//         poster={poster}
//         controls={showControls()}
//         autoPlay={autoplay}
//         loop={loop}
//         muted={muted}
//         // <!-- Ensures video covers the full height and width -->
//         className="h-full w-full object-cover"
//         {...props}
//       >
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// AcfVideo.propTypes = {
//   src: PropTypes.string.isRequired,
//   poster: PropTypes.string,
//   controls: PropTypes.string,
//   autoplay: PropTypes.bool,
//   loop: PropTypes.bool,
//   className: PropTypes.string,
//   heightProp: PropTypes.string,  
//   isembed: PropTypes.string,
// };


//! video and iframe, but iframe on desktop is narrow