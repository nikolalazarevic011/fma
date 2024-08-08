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
