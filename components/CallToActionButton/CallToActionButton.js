import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({
  align = "left",
  buttonLabel,
  destination,
  color
}) => {
  const alignMap = {
    left: "text-align",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={`${alignMap[align]} text-nowrap`}>
      <ButtonLink destination={destination} label={buttonLabel} color={color} />
    </div>
  );
};
