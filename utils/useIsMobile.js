//consider this
/*Hybrid Approach: For scenarios where server-side rendering is essential,
 and you need to predict device type, consider using user-agent detection
  on the server to set an initial guess and then refine it on the client.
  This method, however, can be trickier and more error-prone due to the diversity and inconsistency of user-agent strings. */

import { useState, useEffect } from "react";
export const useIsMobile = () => {
  // Default to mobile view if typically more mobile users
  // const [isMobile, setIsMobile] = useState(
  //   typeof window !== "undefined" ? window.innerWidth <= 435 : true,
  // );
  const [isMobile, setIsMobile] = useState(
   false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 435);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Setup event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  return isMobile;
};
