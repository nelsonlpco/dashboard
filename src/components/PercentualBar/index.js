import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  percentual: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  height: PropTypes.number,
  label: PropTypes.string,
  fontColor: PropTypes.string,
  barColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

const defaultProps = {
  label: '<',
  height: 10,
  fontColor: '#000000',
  barColor: '#56FF2F',
  backgroundColor: '#11446F',
};

const PercentualBar = ({
  points,
  label,
  height,
  percentual,
  barColor,
  backgroundColor,
  fontColor,
}) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    labelContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      color: fontColor,
      fontSize: '0.75rem',
    },
    barContainer: {
      width: '100%',
      height: `${height}px`,
      borderRadius: '30px',
      backgroundColor,
    },
    percentualBar: {
      height: '100%',
      borderRadius: '30px',
      width: `${percentual}%`,
      backgroundColor: barColor,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.labelContainer}>
        <div> {label.toUpperCase()} </div>
        <div> <strong>{percentual}</strong>%{points} </div>
      </div>
      <div style={styles.barContainer}>
        <div style={styles.percentualBar} />
      </div>
    </div>
  );
};

PercentualBar.propTypes = propTypes;
PercentualBar.defaultProps = defaultProps;

export default PercentualBar;
