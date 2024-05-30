import Link from "next/link";
import { theme } from "theme";

export const ButtonLink = ({ destination, label, fullWidth, color }) => {
  // Default to primary color if no color is provided
  const buttonColor = color || theme.primary;

  return (
    <Link href={destination} legacyBehavior>
      <a
        className={`inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer font-bold border-2 ${
          fullWidth ? "w-full text-center" : ""
        }`}
        style={{
          color: buttonColor,
          borderColor: buttonColor,
          backgroundColor: 'transparent',
        }}
      >
        {label}
      </a>
    </Link>
  );
};
