import React from 'react';
import { PropTypes } from 'prop-types';
import DayTimeDisplay from './DayTimeDisplay';

const propTypes = {
  borderColor: PropTypes.string,
};

const defaultProps = {
  borderColor: '#365262',
};

const LeadTimeGraphic = ({ borderColor }) => {
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
      width: '50%',
      height: '100%',
      backgroundColor: '#FFF',
      borderRight: 'solid 3px #3287BC',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftBar} />
      <DayTimeDisplay days={10} time={5} daysColor="#FFF" label="reaction time" />
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
