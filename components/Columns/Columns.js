import { useIsMobile } from "utils/useIsMobile";
import {
  getAlignmentClass,
  getMarginTopClass,
} from "utils/spacingAndAlignment";
import {
  getBorderColorClass,
  getBorderRadiusClass,
  getBorderWidthClass,
} from "utils/border";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  marginTop,
  marginBottom,
  verticalAlignment,
  borderWidth, //didn't work last time, try without for now
  borderRadius,
  borderColor,
  minHeight,
}) => {
  const isMobile = useIsMobile();
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const marginTopClass = !isMobile && marginTop ? { marginTop } : "";
  const marginBottomClass = !isMobile && marginBottom ? { marginBottom } : "";
  const minHeightStyle = minHeight ? { minHeight } : {};
  return (
    <div
      style={{
        ...textColorStyle,
        ...backgroundColorStyle,
        ...marginTopClass,
        ...marginBottomClass,
        ...minHeightStyle,
        position: "relative",
      }}
    >
      <div
        className={`cols mx-auto max-w-6xl ${getBorderRadiusClass(borderRadius)} ${
          isStackedOnMobile ? "block md:flex" : "flex"
        } ${verticalAlignment ? getAlignmentClass(verticalAlignment) : ""} ${!isMobile && getBorderWidthClass(borderWidth)} ${getBorderColorClass(borderColor)} `}
      >
        {children}
      </div>
    </div>
  );
};
