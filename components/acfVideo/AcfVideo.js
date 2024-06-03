import React from 'react';
import PropTypes from 'prop-types';

export const AcfVideo = ({ src, poster, controls = true, autoplay = true, loop = true, className = '', muted = true, ...props }) => {
  return (
    <div className={`relative w-full h-auto ${className}`}>
      <video
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        className="w-full h-auto"
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
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  className: PropTypes.string,
};


