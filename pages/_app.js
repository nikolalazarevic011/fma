import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Layout } from "components/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPageStaticProps } from "utils/getPageStaticProps"; // Import your utility function

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
        router.push("/"); // Redirect to homepage if logged in
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

  //route protection for users without paid membership
  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      const user = localStorage.getItem("user");
      const membershipId = localStorage.getItem("membershipId");

      // Check if the route starts with /members and the user is not allowed
      if (url.startsWith("/members") && membershipId !== "2") {
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

  // Fetch menu data on route change
  useEffect(() => {
    const handleRouteChangeComplete = async () => {
      try {
        const { props } = await getPageStaticProps({ params: { slug: [] } });
        setMenuData({
          mainMenuItems: props.mainMenuItems,
          footerMenuItems: props.footerMenuItems,
        });
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    // Fetch on route change
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Fetch immediately if the data is empty
    if (!menuData.mainMenuItems.length || !menuData.footerMenuItems.length) {
      handleRouteChangeComplete();
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, menuData.mainMenuItems.length, menuData.footerMenuItems.length]);

  return (
    <Layout
      mainMenuItems={menuData.mainMenuItems}
      footerMenuItems={menuData.footerMenuItems}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  try {
    const { props } = await getPageStaticProps({ params: { slug: [] } }); // Use utility function here
    pageProps.mainMenuItems = props.mainMenuItems;
    pageProps.footerMenuItems = props.footerMenuItems;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    pageProps.mainMenuItems = [];
    pageProps.footerMenuItems = [];
  }

  return { pageProps };
};

export default MyApp;
