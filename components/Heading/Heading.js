// import React from "react";
// import {
//   getColorClass,
//   getFontSizeForHeading,
//   getTextAlign,
// } from "utils/fontsAndColorsTextAlignment";
// import { useIsMobile } from "utils/useIsMobile";

// export const Heading = ({ textAlign, content, level = 2, color }) => {
//   // console.log(color);
//   // const textColor = color ? `text-[${color}]` : `text-primary`; //? needed?
//   const isMobile = useIsMobile();
//   const textAlignClass = !isMobile ? getTextAlign(textAlign) : "text-center";

//   const tag = React.createElement(`h${level}`, {
//     dangerouslySetInnerHTML: { __html: content },
//     // className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
//     className: `font-heading max-w-7xl mx-auto my-2 ${getFontSizeForHeading(
//       level,
//       isMobile,
//     )} ${textAlignClass} ${getColorClass(color)}`,
//   });
//   return tag;
// };

import React from "react";
import {
  getColorClass,
  getFontSizeForHeading,
  getTextAlign,
} from "utils/fontsAndColorsTextAlignment";
import { useIsMobile } from "utils/useIsMobile";

export const Heading = ({ textAlign, content, level = 2, color }) => {
  const isMobile = useIsMobile();
  const textAlignClass = !isMobile ? getTextAlign(textAlign) : "text-center";
  const Component = `h${level}`; // Correctly define the heading level

  return (
    <Component
      dangerouslySetInnerHTML={{ __html: content }}
      className={`my-1 mx-auto sm:mx-1 max-w-7xl font-heading sm:my-5 ${getFontSizeForHeading(level, isMobile)} ${textAlignClass} ${getColorClass(color)}`}
    />
  );
};
