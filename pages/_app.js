import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Layout } from "components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [menuData, setMenuData] = useState({
    mainMenuItems: pageProps.mainMenuItems || [],
    footerMenuItems: pageProps.footerMenuItems || [],
  });

  const router = useRouter();

  // Redirect logged-in users away from /login and /register

  useEffect(() => {
    const handleRedirectIfLoggedIn = () => {
      const user = localStorage.getItem("user");

      if (
        user &&
        (router.pathname === "/login" || router.pathname === "/register")
      ) {
        router.push("/").then(() => window.location.reload());; // Redirect to homepage if logged in. and refresh to refetch main menus
      }
    };

    handleRedirectIfLoggedIn();

    // Also listen for route changes
    router.events.on("routeChangeComplete", handleRedirectIfLoggedIn);

    // Cleanup the event listener
    return () => {
      router.events.off("routeChangeComplete", handleRedirectIfLoggedIn);
    };
  }, [router]);

  // route protection for users without paid membership
  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      const user = localStorage.getItem("user");
      const membershipId = localStorage.getItem("membershipId");

      // Determine required membership ID based on environment
      const requiredMembershipId =
        process.env.NODE_ENV === "development" ? "2" : "1"; // in dev 2 is paid, in prod 1 is paid ( because the old programmer put it that way in OG FMA site )

      // Check if the route starts with /members and the user is not allowed
      if (url.startsWith("/members") && membershipId !== requiredMembershipId) {
        // Redirect to /applications/join-fma
        router.push("/applications/join-fma");
      }
    };

    // Add event listener for route changes
    router.events.on("routeChangeStart", handleRouteChangeStart);

    // Clean up the event listener on component unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);


  return (
    <Layout
      mainMenuItems={menuData.mainMenuItems}
      footerMenuItems={menuData.footerMenuItems}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
