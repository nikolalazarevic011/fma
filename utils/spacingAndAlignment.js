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
    bottom: "align-bottom",
    top: "align-top",
    middle: "align-middle",
  };

  return `${alightMap[value] || ""}`;
};

//radi za ubuduce da znas ako treva
export const getMarginTopClass = (marginTop) => {
  const marginMap = {
    "-3rem": "-mt-20", // ovako ako pasujes rem za vrednost
    4: "mt-4",
    8: "mt-8",
    "2rem": "mt-8",
    10: "mt-40",
    20: "mt-20",
  };
  // Directly return a class name constructed from the marginTop value
  // return `mt-[${marginTop}]`;
  return `${marginMap[marginTop] || ""}`;
};

export const getMarginBottomClass = (marginBottom) => {
  const marginMap = {
    "-5": "-mb-5", // if passing  - rem value
    "-2": "-mb-8",
    1: "mb-1",
    2: "mb-2",
    4: "mb-4",
    6: "mb-6",
    8: "mb-8",
    "2rem": "mt-8",
    10: "mb-10",
    12: "mb-12",
    16: "mb-16",
    20: "mb-20",
    24: "mb-24",
    32: "mb-32",
    40: "mb-40",
    48: "mb-48",
    56: "mb-56",
    64: "mb-64",
  };

  return `${marginMap[marginBottom] || ""}`;
};

export const getHeightClass = (height) => {
  // Returns a Tailwind CSS class for height; defaults to 'h-auto' if no height is specified
  return height ? `h-[${height}px]` : "h-auto";
};
