import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  labelColor: PropTypes.string,
  valueColor: PropTypes.string,
};

const defaultProps = {
  labelColor: '#000',
  valueColor: '#000',
};

const ListPoints = ({ items, labelColor, valueColor }) => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr',

    },
    listContainer: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 2fr',
    },
    value: {
      fontSize: '1.5rem',
      justifySelf: 'end',
      color: valueColor,
    },
    label: {
      fontSize: '1rem',
      marginLeft: '0.4rem',
      alignSelf: 'center',
      color: labelColor,
    },
  };

  return (
    <div style={styles.container}>
      {
        items.map(item => (
          <div style={styles.listContainer} >
            <div style={styles.value}>
              <strong style={styles.point}>{item.value}</strong>
            </div>
            <div style={styles.label}>
              {item.label.toUpperCase()}
            </div>
          </div>))
      }
    </div>
  );
};

ListPoints.propTypes = propTypes;
ListPoints.defaultProps = defaultProps;

export default ListPoints;
