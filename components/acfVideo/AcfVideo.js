import React from "react";
import PropTypes from "prop-types";
import { useIsMobile } from "utils/useIsMobile";
import { getHeightClass } from "utils/spacingAndAlignment";

export const AcfVideo = ({
  src,
  poster,
  controls,
  autoplay = true,
  loop = true,
  className = "",
  muted = true,
  height,
  ...props
}) => {
  const isMobile = useIsMobile();
  // const showControls = () => controls !== "0";
  function showControls() {
    if (controls != "0") {
      return true;
    }
    false;
  }
  const responsiveHeight = !isMobile ? height : height / 2;

  const styles = {
    ...{ height: responsiveHeight + "px" },
  };
  return (
    <div
      // className={`relative ${getHeightClass(responsiveHeight)} w-full overflow-hidden ${className}`}
      className={`relative w-full overflow-hidden ${className}`}
      style={styles}
    >
      <video
        src={src}
        poster={poster}
        controls={showControls()}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        // <!-- Ensures video covers the full height and width -->
        className="h-full w-full object-cover"
        {...props}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

AcfVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  controls: PropTypes.string,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  className: PropTypes.string,
};
