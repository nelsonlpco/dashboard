import React from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  items: PropTypes.array.isRequired,
};

const ListPoints = ({ items }) => {
  const styles = {
    container: {
      listStyleType: 'none',

    },
    point: {
      fontSize: '1.5rem',
    },
  };

  return (
    <ul style={styles.container}>
      {
        items.map(item => (
          <li>
            <strong style={styles.point}>{item.value}</strong>
            <span>{item.label.toUpperCase()}</span>
          </li>))
      }
    </ul>
  );
};

ListPoints.propTypes = propTypes;

export default ListPoints;
