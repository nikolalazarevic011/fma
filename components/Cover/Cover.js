import Image from "next/image";
import { getOverlayColor } from "utils/imageProps";
import { useIsNotMobile } from "utils/useIsNotMobile";

export const Cover = ({
  children,
  background,
  overlay,
  mobileHeight,
  desktopHeight,
}) => {
  const color = getOverlayColor(overlay); // Example color: #002063
  const isNotMobile = useIsNotMobile();

  // Create a single object for all height styles
  const styles = {
    ...(isNotMobile && desktopHeight && { height: desktopHeight }), // Optional height only if isNotMobile and contentSize is defined
    ...(isNotMobile === false && { height: mobileHeight }), // Mobile height
  };

  return (
    <div
      className="relative flex items-center justify-center text-white"
      style={styles} // Apply inline style for height
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
      <div className="z-10 max-w-7xl">{children}</div>
    </div>
  );
};
