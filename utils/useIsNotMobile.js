import React, { useState, useEffect } from 'react';

// Typically, hooks are named with "use" prefix to follow React conventions
export const useIsNotMobile = () => {
  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNotMobile(window.innerWidth >= 435);  // Update based on current width
    };

    handleResize();  // Set initial value

    window.addEventListener('resize', handleResize);  // Setup event listener

    return () => window.removeEventListener('resize', handleResize);  // Cleanup event listener
  }, []);  // Empty dependency array ensures this effect only runs on mount and unmount

  return isNotMobile;
};
