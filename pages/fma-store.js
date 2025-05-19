import { useEffect } from "react";
import { useRouter } from "next/router";
import { getPageStaticProps } from "utils/getPageStaticProps";

const FmaStore = () => {
  const router = useRouter();
  const storeId = "107467269";

  useEffect(() => {
    // Check if we're coming from another page
    const previousPath = sessionStorage.getItem("previousPath");
    const currentPath = router.asPath;

    // If we're coming from a different page, force a reload
    if (
      previousPath &&
      previousPath !== currentPath &&
      currentPath === "/fma-store"
    ) {
      sessionStorage.setItem("previousPath", currentPath);
      window.location.reload();
      return;
    }

    // Store current path
    sessionStorage.setItem("previousPath", currentPath);

    // Initialize Ecwid store
    const initializeStore = () => {
      const script = document.createElement("script");
      script.src = `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2025-05-07`;
      script.async = true;

      script.onload = () => {
        if (window.xProductBrowser) {
          window.xProductBrowser(
            "categoriesPerRow=3",
            "views=grid(20,3) list(60) table(60)",
            "categoryView=grid",
            "searchView=list",
            `id=my-store-${storeId}`,
          );
        }
      };

      document.body.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeStore, 100);

    // Store route change handler
    const handleRouteChangeStart = (url) => {
      if (url !== "/fma-store") {
        sessionStorage.setItem("previousPath", url);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      clearTimeout(timer);
      router.events.off("routeChangeStart", handleRouteChangeStart);

      // Clean up Ecwid
      if (window.Ecwid && window.Ecwid.destroy) {
        try {
          window.Ecwid.destroy();
        } catch (e) {
          console.error("Error cleaning up Ecwid:", e);
        }
      }
    };
  }, [router.asPath, router.events]);

  return (
    <div className="max-w-6xl mx-auto my-5">
      <div id={`my-store-${storeId}`}></div>
    </div>
  );
};

// Add getStaticProps to fetch menu data
export const getStaticProps = getPageStaticProps;

export default FmaStore;
