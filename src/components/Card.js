import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
};

const defaultProps = {
  borderColor: '#000',
  backgroundColor: 'none',
  width: '200px',
  height: '200px',
  padding: '15px'
};

const Card = ({
  children,
  borderColor,
  backgroundColor,
  width,
  height,
  padding,
}) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
      width,
      height,
      padding,
      border: `solid 1px ${borderColor}`,
    },
  };

  return (
    <div style={styles.container}>
      {children}
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
