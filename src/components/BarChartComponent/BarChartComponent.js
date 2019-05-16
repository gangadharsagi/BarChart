import React from 'react';
import { BarChart } from '../BarChart/BarChart';
import PropTypes from 'prop-types';

export const BarChartComponent = (props) => (
  <div className='text-center'>
    <h2 className='silver'>Your Progress</h2>
      <h3 className='silver'>Your Progress In the different Categories</h3>
        <BarChart
          width={props.width}
          height={props.height}
        />
  </div>
);

BarChartComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

BarChartComponent.defaultProps = {
  width: 730,
  height: 300,
};
