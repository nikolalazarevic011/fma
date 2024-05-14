import { ButtonLink } from "components/ButtonLink";
import { Cover } from "components/Cover";
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
          <Image
            key={block.id}
            src={block.attributes.url}
            height={block.attributes.height}
            width={block.attributes.width}
            alt={block.attributes.alt || ""}
            priority
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
    }
  });
};
