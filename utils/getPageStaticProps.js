import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  console.log("Context: ", context);

  //we can get uri/url
  //! gledamo dal ima slug, ako nema znaci da je home page
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
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
    variables: {  //lek12 
      uri,
    },
  });

  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems,
      ),
      footerMenuItems: data.acfOptionsFooterMenu.footerMenu,
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      title: data.nodeByUri.title
    },
  };
};