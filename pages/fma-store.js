import { useEffect } from "react";
import { useRouter } from "next/router";

const FmaStore = () => {
  const router = useRouter();

  useEffect(() => {
    // Open the store in a new tab
    window.open("https://faith-ministries-alliance-store.company.site/", "_blank");

    // Redirect back to home or another page after opening the new tab
    router.replace("/");
  }, [router]);

  return null; // This prevents rendering any unnecessary UI
};

export default FmaStore;



//!OLD VERSION - like iframe-to show inside the site- was buggy
/* import Script from "next/script";
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
 */

