import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import PercentualBar from './../../../components/PercentualBar/index';
import DayTimeDisplay from '../../../components/DayTimeDisplay';
import GraphicBar from '../../../components/LeadTimeGraphic';
import LeadTimeFullGraphic from './LeadTimeFullGraphic';

import './timing.css';

const propTypes = {
  cycleTimeBar: PropTypes.instanceOf(Object).isRequired,
  reactionTimeDisplay: PropTypes.instanceOf(Object).isRequired,
  cycleTimeDisplay: PropTypes.instanceOf(Object).isRequired,
  reactionTimeBars: PropTypes.instanceOf(Object).isRequired,
  cycleTimeBars: PropTypes.instanceOf(Object).isRequired,
  leadTimeBars: PropTypes.instanceOf(Object).isRequired,
};

const Timing = ({
  cycleTimeBar,
  reactionTimeDisplay,
  cycleTimeDisplay,
  reactionTimeBars,
  cycleTimeBars,
  leadTimeBars,
}) => (
  <div className="timing-container">
    <div className="timing-grid">

      <div className="lead-time-days">
        <GraphicBar
          percentual={cycleTimeBar.percent}
          days={cycleTimeBar.days}
          hours={cycleTimeBar.hours}
        />
      </div>

      <div className="lead-time-graphic">
        <LeadTimeFullGraphic />
      </div>

      <div className="reaction-time-days">
        <DayTimeDisplay days={reactionTimeDisplay.days} time={reactionTimeDisplay.hours} daysColor="#FFF" label="reaction time" />
      </div>

      <div className="cycle-time">
        <DayTimeDisplay days={cycleTimeDisplay.days} time={cycleTimeDisplay.hours} daysColor="#FFF" label="cycle time" />
      </div>

      <div className="bars">

        <div className="grid-bars">
          <span style={{ color: '#FFF', fontSize: '1.6rem' }}>REACTION TIME</span>
          {
            reactionTimeBars.map(item => <PercentualBar key={item.label} percentual={item.percent} points={item.quantity} label={item.label} barColor={item.barColor} fontColor="#FFF" />)
          }
        </div>

        <div className="grid-bars">
          <span style={{ color: '#FFF', fontSize: '1.6rem' }}>CYCLE TIME</span>
          {
            cycleTimeBars.map(item => <PercentualBar key={item.label} percentual={item.percent} points={item.quantity} label={item.label} barColor={item.barColor} fontColor="#FFF" />)
          }
        </div>

        <div className="grid-bars">
          <span style={{ color: '#FFF', fontSize: '1.6rem' }}>LEAD TIME</span>
          {
            leadTimeBars.map(item => <PercentualBar key={item.label} percentual={item.percent} points={item.quantity} label={item.label} barColor={item.barColor} fontColor="#FFF" />)
          }
        </div>
      </div>
    </div>
  </div>
);

Timing.propTypes = propTypes;

const mapStateToProps = state => ({
  cycleTimeBar: state.TimingReducer.cycleTimeBar,
  reactionTimeDisplay: state.TimingReducer.reactionTimeDisplay,
  cycleTimeDisplay: state.TimingReducer.cycleTimeDisplay,
  reactionTimeBars: state.TimingReducer.reactionTimeBars,
  cycleTimeBars: state.TimingReducer.cycleTimeBars,
  leadTimeBars: state.TimingReducer.leadTimeBars,
});

const actionToProps = () => ({});

export default connect(mapStateToProps, actionToProps)(Timing);
