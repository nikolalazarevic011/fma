import { ButtonLink } from "components/ButtonLink";
import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { AcfVideo } from "components/acfVideo";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  if (!Array.isArray(blocks)) {
    // console.error('BlockRenderer error: `blocks` is not an array', blocks);
    return null; // Or a fallback UI
  }
  return blocks.map((block) => {
    switch (block.name) {
      case "core/block": //ovako moze kad vracaju isto
      case "core/group": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/image": {
        return (
          <Image
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
            priority
          />
        );
      }
      case "acf/acfimage": {
        return (
          <div
            key={block.id}
            className={`flex justify-${block.attributes.data.align} mb-8 `}
          >
            <Image
              src={block.attributes.data.url}
              height={block.attributes.data.height}
              width={block.attributes.data.width}
              alt={block.attributes.data.alt || ""}
              priority
            />
          </div>
        );
      }
      case "core/post-title": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
          />
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            color={block.attributes.textColor}
          />
        );
      }
      case "core/cover": {
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}
            overlay={block.attributes.overlayColor}
            contentSize={block.attributes.layout.contentSize}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/buttons": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      //   case "core/button": {
      //     return <ButtonLink blocks={block.innerBlocks} />;
      //   }
      case "core/block": //ovako moze kad vracaju isto
      case "core/group": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            // textColor={
            //   theme[block.attributes.textColor] ||
            //   block.attributes.style?.color?.text
            // }
          />
        );
      }
      case "core/columns": {
        console.log("COLUMNS: ", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            marginTop={block.attributes.style?.spacing?.margin?.top} //?! RADI NEGO SI GLEDAO U COLUMn umesto columns
            verticalAlignment={block.attributes.verticalAlignment}
            // spacing={block.attributes.style?.spacing} // kad napravis util klasu da samo paste spacing a ona odradi sve
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );
      }
      case "core/column": {
        // console.log("COLUMN: ", block.attributes);
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            borderBottom={block.attributes.style?.border?.bottom?.width}
            borderBottomColor={block.attributes.style?.border?.bottom?.color}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
            color={block.attributes.data.color}
          />
        );
      }
      case "acf/acfvideo": {
        return (
          <AcfVideo
            key={block.id}
            src={block.attributes.data.url}
          />
        );
      }
      default: {
        console.log("UNKNOWN:", block);
        return null;
      }
    }
  });
};
