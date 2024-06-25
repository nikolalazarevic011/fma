import React from "react";
import {
  getColorClass,
  getFontSizeForHeading,
  getTextAlign,
} from "utils/fontsAndColorsTextAlignment";
import { getMarginBottomClass } from "utils/spacingAndAlignment";
import { useIsMobile } from "utils/useIsMobile";

export const Heading = ({
  textAlign,
  content,
  level = 2,
  color,
  marginBottom,
}) => {
  const isMobile = useIsMobile();
  const textAlignClass = !isMobile ? getTextAlign(textAlign) : "text-center";
  const Component = `h${level}`; // Correctly define the heading level

  return (
    <Component
      dangerouslySetInnerHTML={{ __html: content }}
      className={`mx-auto my-1 max-w-7xl font-heading sm:mx-1
         ${!isMobile && marginBottom ? getMarginBottomClass(marginBottom) : "sm:my-5"} 
         ${getFontSizeForHeading(level, isMobile)} 
         ${textAlignClass} ${getColorClass(color)}`}
    />
  );
};
