import Link from "next/link";
import { theme } from "theme";

export const ButtonLink = ({ destination, label, fullWidth, color }) => {
  console.log(color);

  const buttonColorClass = color
    ? `text-[${color}] border-[${color}]`
    : "text-primary border-primary";

  return (
    <Link
      href={destination}
      //  This won't work because Tailwind CSS can't interpret JavaScript expressions within class names
      // className={`inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer font-bold text-${color} border-2 border-${color} bg-transparent`}
      className={`inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer font-bold border-2 ${
        fullWidth ? "w-full text-center" : ""
      } ${buttonColorClass}`}
    >
      {label}
    </Link>
  );
};
