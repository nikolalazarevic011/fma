import { BlockRenderer } from "components/BlockRenderer";
import FooterMenu from "components/FooterMenu/FooterMenu";
import { MainMenu } from "components/MainMenu";

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