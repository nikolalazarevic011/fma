import Image from "next/image";
import { getOverlayColor } from "utils/imageProps";

export const Cover = ({ children, background, overlay }) => {
  const color = getOverlayColor(overlay); // Example color: #002063

  return (
    <div className="relative h-[625px] flex justify-center items-center text-white">
      <Image
        alt="Cover"
        src={background}
        fill
        priority
        className="mix-blend-soft-light object-cover"
        style={{ objectPosition: "center top" }}
      />
      {/* for overlay to show only on the image/ */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: color,
          opacity: 0.5,
          // mixBlendMode: "overlay",
        }}
      />
      <div className="max-w-5xl z-20">{children}</div>
    </div>
  );
};
