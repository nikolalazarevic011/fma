import { useIsNotMobile } from "utils/useIsNotMobile";
import {
  getAlignmentClass,
} from "utils/spacingAndAlignment";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  marginTop,
  verticalAlignment,
}) => {
  const isNotMobile = useIsNotMobile();
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const marginTopClass = isNotMobile && marginTop ? { marginTop } : "";

  return (
    <div
      style={{ ...textColorStyle, ...backgroundColorStyle, ...marginTopClass }}
    >
      <div
        className={`max-w-7xl mx-auto  ${
          isStackedOnMobile ? "block md:flex" : "flex"
        } ${getAlignmentClass(verticalAlignment)} `}
      >
        {children}
      </div>
    </div>
  );
};
