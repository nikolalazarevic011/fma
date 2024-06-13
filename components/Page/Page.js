import { BlockRenderer } from "components/BlockRenderer";
import FooterMenu from "components/FooterMenu/FooterMenu";
import { MainMenu } from "components/MainMenu";
// import { PageWrapper } from "context/page";
// import Head from "next/head";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);
  return (
    <div>
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks} />
      <FooterMenu socialLinks={props.footerMenuItems} />
    </div>
  );
};