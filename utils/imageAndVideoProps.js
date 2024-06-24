export const getOverlayColor = (overlayColorSlug = "primary") => {
  const overlayColorMap = {
    primary: "#002063",
    secondary: "#fbe6ba",
    primaryLight: "#248acc",
    primaryDark: "#002b4e",
  };

  return `${overlayColorMap[overlayColorSlug] || ""}`;
};
