import { useIsNotMobile } from "utils/useIsNotMobile";
import { getAlignmentClass } from "utils/spacingAndAlignment";
import { getBorderTopWidthClass } from "utils/border";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  marginTop,
  verticalAlignment,
  border, //didn't work last time, try without for now
}) => {
  const isNotMobile = useIsNotMobile();
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const marginTopClass = isNotMobile && marginTop ? { marginTop } : "";

  return (
    <div
      style={{
        ...textColorStyle,
        ...backgroundColorStyle,
        ...marginTopClass,
        position: "relative",
      }}
    >
      <div
        className={`mx-auto max-w-7xl ${
          isStackedOnMobile ? "block md:flex" : "flex"
        } ${getAlignmentClass(verticalAlignment)} `}
      >
        {children}
      </div>
    </div>
  );
};
