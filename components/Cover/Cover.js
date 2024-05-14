import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className=" text-white relative min-h-[500px] flex justify-center items-center">
      <Image
        alt="Cover"
        src={background}
        fill
        priority
        className="mix-blend-soft-light object-cover"
      />
      <div className="max-w-5xl z-10"> {children}</div>
    </div>
  );
};
