import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  getMarginBottomClass,
  getMarginTopClass,
} from "utils/spacingAndAlignment";
import { useIsMobile } from "utils/useIsMobile";

export const AcfImage = ({ block }) => {
  const isMobile = useIsMobile();

  const marginTopClass = !isMobile
    ? getMarginTopClass(block.attributes.data.margin_top)
    : "";

  return (
    <>
      <Link href={block.attributes?.data?.link_to || ""}>
        <div
          key={block.id}
          className={`flex justify-${block.attributes.data.align} ${getMarginBottomClass(block.attributes.data.margin_bottom)} ${marginTopClass}`}
        >
          <Image
            src={block.attributes.data.url}
            height={block.attributes.data.height}
            width={block.attributes?.data?.width}
            alt={block.attributes.data.alt || ""}
            priority
          />
        </div>
      </Link>
    </>
  );
};
