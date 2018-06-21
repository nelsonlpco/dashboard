import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  days: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  daysColor: PropTypes.string,
  label: PropTypes.string,
};

const defaultProps = {
  daysColor: '#FF7744',
  label: '',
};

const DayTimeDisplay = ({
  days,
  time,
  label,
  daysColor,
}) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFF',
      fontSize: '4rem',
    },
    daysTime: {
      color: daysColor,
    },
    daysDescription: {
      color: '#9FACB4',
    },
    label: {
      color: daysColor,
      fontSize: '1.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.label} >{label.toUpperCase()}</div>
        <strong style={styles.daysTime}>{days}</strong>
        <span style={styles.daysDescription}>d</span>
        &nbsp;
        <strong style={styles.days}>{time}</strong>
        <span style={styles.daysDescription}>h</span>
      </div>
    </div>
  );
};

DayTimeDisplay.propTypes = propTypes;
DayTimeDisplay.defaultProps = defaultProps;

export default DayTimeDisplay;
