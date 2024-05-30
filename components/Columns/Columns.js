import { IsNotMobile, useIsNotMobile } from "utils/useIsNotMobile";
import { getSpacingClass } from "utils/spacingAndAlignment";
import { getAlignmentClass } from "utils/spacingAndAlignment";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  marginTop,
  verticalAlignment,
}) => {

  const isNotMobile = useIsNotMobile()
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const marginTopClass = isNotMobile && marginTop ? { marginTop } : "";

  // console.log(isNotMobile);


  return (
    <div
      style={{ ...textColorStyle, ...backgroundColorStyle, ...marginTopClass }}
    >
      <div
        className={`max-w-5xl mx-auto  ${
          isStackedOnMobile ? "block md:flex" : "flex"
        } ${getAlignmentClass(verticalAlignment)} `}
      >
        {children}
      </div>
    </div>
  );
};
