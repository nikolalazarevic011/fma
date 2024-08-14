import Script from "next/script";
import { useEffect } from "react";

const FmaStore = () => {
  const initializeEcwid = () => {
    if (window.xProductBrowser) {
      window.xProductBrowser(
        "categoriesPerRow=3",
        "views=grid(20,3) list(60) table(60)",
        "categoryView=grid",
        "searchView=list",
        "id=my-store-107467269",
      );
    }
  };

  useEffect(() => {
    // Initialize Ecwid store when the component mounts
    initializeEcwid();

    // Ensure Ecwid is re-initialized when returning to the page
    const handleRouteChange = () => {
      initializeEcwid();
    };

    // Listen to route change events
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <>
      <div className="my-5">
        <div id="my-store-107467269">
          <Script
            src="https://app.ecwid.com/script.js?107467269&data_platform=code&data_date=2024-08-14"
            strategy="afterInteractive"
            onLoad={initializeEcwid}
          />
        </div>
      </div>
    </>
  );
};

export default FmaStore;
