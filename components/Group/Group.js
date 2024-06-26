import { getBorderBottomWidthClass, getBorderColorClass } from "utils/border";
import { getPaddingBottomClass } from "utils/padding";

export const Group = ({
  paddingBottom,
  borderBottomWidth,
  bottomBorderColor,
  children,
}) => {
  // console.log(paddingBottom);
  return (
    <div
      className={`gro mb-2 ${getPaddingBottomClass(paddingBottom)} ${getBorderBottomWidthClass(borderBottomWidth)} ${getBorderColorClass(bottomBorderColor)}`}
    >
      <div>{children}</div>
    </div>
  );
};
