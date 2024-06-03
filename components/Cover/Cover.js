import Image from "next/image";
import { getOverlayColor } from "utils/imageProps";

export const Cover = ({
    children,
    background,
    overlay,
    contentSize = "625px",
}) => {
    const color = getOverlayColor(overlay); // Example color: #002063

    // For debugging: convert contentSize to a valid CSS value
    const heightStyle = {
        height: contentSize,
    };

    return (
        <div
            className="relative flex items-center justify-center text-white"
            style={heightStyle} // Apply inline style for height
        >
            <div className="absolute inset-0 z-0">
                <Image
                    alt="Cover"
                    src={background}
                    fill
                    priority
                    className="object-cover mix-blend-soft-light"
                    style={{ objectPosition: "center top" }}
                />
                {/* Overlay to show only on the image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: color,
                        opacity: 0.5,
                        // mixBlendMode: "overlay",
                    }}
                />
            </div>
            <div className="z-20 max-w-5xl">{children}</div>
        </div>
    );
};
