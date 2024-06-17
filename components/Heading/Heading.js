import React from "react";
import {
  getColorClass,
  getFontSizeForHeading,
  getTextAlign,
} from "utils/fontsAndColorsTextAlignment";
import { useIsNotMobile } from "utils/useIsNotMobile";

export const Heading = ({ textAlign, content, level = 2, color }) => {
  // console.log(color);
  // const textColor = color ? `text-[${color}]` : `text-primary`; //? needed?
  const isNotMobile = useIsNotMobile();

  const textAlignClass = isNotMobile ? getTextAlign(textAlign) : "text-center";

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level,
    )} ${textAlignClass} ${getColorClass(color)}`,
  });
  return tag;
};
