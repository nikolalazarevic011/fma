export const getSpacingClass = (value, type = "margin", direction = "") => {
  const typeMap = {
    margin: "m",
    padding: "p",
  };

  const directionMap = {
    top: "t",
    right: "r",
    bottom: "b",
    left: "l",
    x: "x",
    y: "y",
  };

  const baseClass = typeMap[type] || typeMap["margin"];
  const dirClass = directionMap[direction] || "";

  return `${baseClass}${dirClass}-${[value]}`;
};

//! radi ali samo sa brojevima, npr 20 a ne 20rem
// Example usage
// console.log(getSpacingClass("-2.5rem", "margin", "top")); // Outputs: m-t-[-2.5rem]
// console.log(getSpacingClass("1.5rem", "padding", "x")); // Outputs: p-x-[1.5rem]

export const getAlignmentClass = (value = "center") => {
  const alightMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return `${alightMap[value] || ""}`;
};


//radi za ubuduce da znas ako treva
export const getMarginTopClass = (marginTop) => {
  const marginMap = {
    '-3rem': "-mt-20", // ovako ako pasujes rem za vrednost
    4: "mt-4",
    8: "mt-8",
    20: "mt-20",
  };
  // Directly return a class name constructed from the marginTop value
  // return `mt-[${marginTop}]`;
  return `${marginMap[marginTop] || ""}`;
};
