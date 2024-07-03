import React from "react";
import PropTypes from "prop-types";
import { useIsMobile } from "utils/useIsMobile";


export const AcfVideo = ({
  src,
  poster,
  controls,
  autoplay = true,
  loop = true,
  className = "",
  muted = true,
  heightProp,
  isEmbed,
  ...props
}) => {
  const isMobile = useIsMobile();
  const numericHeight = Number(heightProp); // Convert heightProp to a number

  const showControls = () => controls !== "0";
  const showAutoplay = () => autoplay !== "0";

  // console.log(isMobile);
  // Helper function to extract YouTube video ID from URL
  const extractVideoID = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Calculate responsive height based on mobile state and numeric height
  const responsiveHeight =
    !isMobile || numericHeight < 400
      ? `${heightProp}px` // Use full height on non-mobile
      : `${heightProp / 2}px`; // Use half height on mobile

  const stylesIframe = {
    height: responsiveHeight,
    width: isMobile ? "370px" : "1118px",
  };
  const styles = {
    height: responsiveHeight,
  };

  // Convert string "1" or "0" to boolean!
  const embed = isEmbed === "1";

  // Render video or iframe based on `isEmbed`
  const renderVideoContent = () => {
    if (embed) {
      const videoId = extractVideoID(src);
      const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? "1" : "0"}&loop=${loop ? "1" : "0"}&playlist=${videoId}`;
      return (
        <iframe
          src={iframeSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={stylesIframe}
          className="h-full w-full mx-auto object-cover pb-5"
        />
      );
    } else {
      return (
        <video
          src={src}
          poster={poster}
          controls={showControls()}
          autoPlay={showAutoplay()}
          loop={loop}
          muted={muted}
          style={styles}
          className="h-full w-full mx-auto object-cover"
          {...props}
        >
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return isMobile !== undefined ? (
    <div className="relative w-full overflow-hidden">
      {renderVideoContent()}
    </div>
  ) : null; // Prevent rendering until isMobile is determined
};

AcfVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  controls: PropTypes.string,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  className: PropTypes.string,
  heightProp: PropTypes.string,
  isEmbed: PropTypes.string,
};
