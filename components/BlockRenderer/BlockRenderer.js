import { ButtonLink } from "components/ButtonLink";
import { CallToActionButton } from "components/CallToActionButton";
import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import Image from "next/image";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      //   case "core/list": {
      //     return <div key={block.id}>core cover</div>;
      //   }
      case "core/block": //ovako moze kad vracaju isto
      case "core/group": {
        return <BlockRenderer key={block.id} blocks={block.innerBlocks} />;
      }
      case "core/image": {
        return (
          // <div
          //   key={block.id}
          //   className="flex justify-center items-center"
          // >
          <Image
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
            priority
          />
          // </div>
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
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
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
            textAlign={block.attributes.align}
            content={block.attributes.content}
            // textColor={
            //   theme[block.attributes.textColor] ||
            //   block.attributes.style?.color?.text
            // }
          />
        );
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
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
