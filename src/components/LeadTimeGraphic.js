import React from 'react';
import { PropTypes } from 'prop-types';
import DayTimeDisplay from './DayTimeDisplay';

const leadTimeBar = {
  days: 9,
  hours: 4,
  reactionTimePercent: 75,
};

const propTypes = {
  borderColor: PropTypes.string,
  percentual: PropTypes.number.isRequired,
};

const defaultProps = {
  borderColor: '#365262',
};

const LeadTimeGraphic = ({ borderColor, percentual }) => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'minmax(100px, auto)',
    },
    bar: {
      backgroundColor: '#78CEFF',
      width: '100%',
      gridColumn: '1/5',
      height: '60px',
      borderBottom: `solid 1px ${borderColor}`,
    },
    leftBar: {
      borderLeft: `solid 1px ${borderColor}`,
      borderTop: `solid 1px ${borderColor}`,
      height: '50%',
      alignSelf: 'end',
    },
    rightBar: {
      display: 'inline',
      borderRight: `solid 1px ${borderColor}`,
      borderTop: `solid 1px ${borderColor}`,
      height: '50%',
      alignSelf: 'end',
    },
    reactTime: {
      width: `${percentual}%`,
      height: '100%',
      backgroundColor: '#FFF',
      borderRight: 'solid 3px #3287BC',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftBar} />
      <DayTimeDisplay days={leadTimeBar.days} time={leadTimeBar.hours} daysColor="#FFF" label="reaction time" />
      <div style={styles.rightBar} />
      <div style={styles.bar}>
        <div style={styles.reactTime} />
        <div style={styles.cycleTime} />
      </div>
    </div>
  );
};

LeadTimeGraphic.propTypes = propTypes;
LeadTimeGraphic.defaultProps = defaultProps;

export default LeadTimeGraphic;
