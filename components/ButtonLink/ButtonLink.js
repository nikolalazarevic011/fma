import Link from "next/link";
import { theme } from "theme";

export const ButtonLink = ({ destination, label, fullWidth, color }) => {
  // Default to primary color if no color is provided
  const buttonColor = color || theme.primary;

  return (
    <Link href={destination} legacyBehavior>
      <a
        className={`my-2 inline-block cursor-pointer rounded-md 
          border-2 px-3 py-2 font-bold uppercase ${
          fullWidth ? "w-full text-center" : ""
        }`}
        style={{
          color: buttonColor,
          borderColor: buttonColor,
          backgroundColor: "transparent",
        }}
      >
        {label}
      </a>
    </Link>
  );
};
