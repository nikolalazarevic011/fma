import React from "react";
import {
  getColorClass,
  getFontSizeForHeading,
  getTextAlign,
} from "utils/fontsAndColorsTextAlignment";
import { useIsMobile } from "utils/useIsMobile";

export const Heading = ({ textAlign, content, level = 2, color }) => {
  // console.log(color);
  // const textColor = color ? `text-[${color}]` : `text-primary`; //? needed?
  const isMobile = useIsMobile();
  const textAlignClass = isMobile ? getTextAlign(textAlign) : "text-center";

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level,
      isMobile,
    )} ${textAlignClass} ${getColorClass(color)}`,
  });
  return tag;
};
