import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className=" text-white relative  h-[525px] flex justify-center items-center">
      <Image
        alt="Cover"
        src={background}
        fill
        priority
        className="mix-blend-soft-light object-cover"
        style={{ objectPosition: "center top" }}
      />
      <div className="max-w-5xl z-10 "> {children}</div>
    </div>
  );
};
