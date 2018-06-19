import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  days: PropTypes.number,
  description: PropTypes.string,
  daysColor: PropTypes.string,
};

const defaultProps = {
  days: 0,
  description: '',
  daysColor: '#FF7744',
};

const DaysDisplay = ({ days, daysColor, description }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFF',
    },
    days: {
      fontSize: '1.7rem',
      color: daysColor,
    },
    daysDescription: {
      color: '#9FACB4',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <strong style={styles.days}>{days}</strong>&nbsp;
        <span style={styles.daysDescription}>DIAS</span>
      </div>
      <div>{description.toUpperCase()}</div>
    </div>
  );
};

DaysDisplay.propTypes = propTypes;
DaysDisplay.defaultProps = defaultProps;

export default DaysDisplay;
