import Image from "next/image";
import { getOverlayColor } from "utils/imageAndVideoProps";
import { useIsMobile } from "utils/useIsMobile";
import { useRouter } from "next/router";
export const Cover = ({
  children,
  background,
  overlay,
  mobileHeight,
  desktopHeight,
  hasParallax,
  id,
}) => {
  const color = getOverlayColor(overlay) || 'transparent';
  const isMobile = useIsMobile();
  const router = useRouter();

  // Create a single object for all height styles
  const styles = {
    ...(isMobile ? { height: mobileHeight } : { height: desktopHeight }),
  };

  const opacity = 0.5;

  const parallaxClass = hasParallax ? "parallax" : "";

  return (
    <div
      className={`cover relative flex items-center justify-center text-white ${parallaxClass}`}
      style={styles}
    >
      {hasParallax ? (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      ) : (
        <Image
          alt="Cover"
          src={background}
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: router.pathname === "/" ? "center top" : "initial",
          }}
        />
      )}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: color,
          opacity: opacity,
        }}
      ></div>
      <div className="z-10 max-w-7xl">{children}</div>
    </div>
  );
};
