import React from "react";
import {
  getColorClass,
  getFontSizeForHeading,
  getTextAlign,
} from "utils/fontsAndColorsTextAlignment";

export const Heading = ({ textAlign, content, level = 2, color }) => {
  // console.log(color);
  const textColor = color ? `text-[${color}]` : `text-primary`;

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)} ${getColorClass(color)}`,
  });
  return tag;
};