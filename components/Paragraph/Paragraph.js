import { getTextAlign } from "utils/fontsAndColorsTextAlignment";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
    return (
        <p
            className={`mx-auto max-w-5xl ${getTextAlign(textAlign)}`}
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{
                __html: relativeToAbsoluteUrls(content),
            }}
        />
    );
};
