import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import FooterMenu from "components/FooterMenu/FooterMenu";
import { MainMenu } from "components/MainMenu/MainMenu";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

export default function Home(props) {
  console.log("PROPS", props);
  return (
    <div>
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks} />
      <FooterMenu socialLinks={props.footerMenuItems} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocks(postTemplate: false)
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
        acfOptionsFooterMenu {
          footerMenu {
            label1
            url1
            label2
            url2
            label3
            url3
            label4
            url4
          }
        }
      }
    `,
  });
  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems,
      ),
      footerMenuItems: data.acfOptionsFooterMenu.footerMenu,
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};
