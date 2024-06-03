import React from 'react';
import PropTypes from 'prop-types';
import { getBorderBottomColorClass, getBorderBottomWidthClass } from 'utils/border';

export const Column = ({ children, width, textColor, backgroundColor, borderBottom , borderBottomColor }) => {
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };


  return (
    <div
      style={{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }}
      className={`px-2 pt-5 ${getBorderBottomWidthClass(borderBottom)} ${getBorderBottomColorClass(borderBottomColor)}`}
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderBottom: PropTypes.string,
  borderBottomColor: PropTypes.string,
};

