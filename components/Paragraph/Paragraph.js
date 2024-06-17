import { getTextAlign } from "utils/fontsAndColorsTextAlignment";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";
import { useIsNotMobile } from "utils/useIsNotMobile";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  const isNotMobile = useIsNotMobile();

  const textAlignClass = isNotMobile ? getTextAlign(textAlign) : 'text-center';

    return (
        <p
            className={`mx-auto my-3 font-light max-w-7xl ${textAlignClass}`}
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{
                __html: relativeToAbsoluteUrls(content),
            }}
        />
    );
};
