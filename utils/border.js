export const getBorderBottomWidthClass = (borderBottomWidth = "0px") => {
    const borderBottomWidthMap = {
      "0px": "",
      "1px": "border-b-1",
      "2px": "border-b-2",
      "4px": "border-b-4",
      "8px": "border-b-8",
      "12px": "border-b-12",
      "16px": "border-b-16",
    };
  
    return `${borderBottomWidthMap[borderBottomWidth] || ""}`;
  };
  
  export const getBorderBottomColorClass = (color = "primary") => {
    const colorMap = {
      primary: "border-primary",
      secondary: "border-secondary",
      primaryLight: "border-primaryLight",
      primaryDark: "border-primaryDark",
      white: "border-white",
      black: "border-black",
      headingRed: "border-headingRed",
      "var:preset|color|background": "border-white",
      "var:preset|color|primary": "border-primary",
      "var:preset|color|secondary": "border-secondary",

    };
  
    return `${colorMap[color] || ""}`;
  };
  