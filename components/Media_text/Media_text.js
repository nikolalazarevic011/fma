import Image from "next/image";
import { Children } from "react";
import { useIsNotMobile } from "utils/useIsNotMobile";

export default function MediaText({
  block,
  mediaPosition = "left", // Default to left if not specified
  mediaLink,
  verticalAlignment,
  width,
  height,
  innerBlocks,
  children,
}) {
  const isNotMobile = useIsNotMobile();

  // Determine media column placement based on mediaPosition
  const mediaColumnClass = mediaPosition === "left" ? "" : "md:order-last";

  return (
    <div className="mx-auto max-w-7xl px-2 py-5">
      <div
        className={`flex ${isNotMobile ? "flex-row" : "flex-col"} items-${verticalAlignment}`}
      >
        {/* Media Container */}
        <div
          className={`md:flex-1 ${isNotMobile ?  mediaColumnClass : ""} ${isNotMobile ? "mb-0" : "mb-4"}`}
        >
          <Image
            src={mediaLink}
            width={width}
            height={height}
            alt={`Media for ${block}`}
            // layout="responsive"
          />
        </div>

        {/* Content Container */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
