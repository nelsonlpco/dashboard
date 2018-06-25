import React from 'react';
import PercentualBar from './../../../components/PercentualBar/index';

import './timing.css';
import DayTimeDisplay from '../../../components/DayTimeDisplay';
import GraphicBar from '../../../components/LeadTimeGraphic';
import LeadTimeFullGraphic from './LeadTimeFullGraphic';

const Timing = () => (
  <div className="timing-container">
    <div className="timing-grid">

      <div className="lead-time-days">
        <GraphicBar />
      </div>

      <div className="lead-time-graphic">
        <LeadTimeFullGraphic />
      </div>

      <div className="reaction-time-days">
        <DayTimeDisplay days={10} time={5} daysColor="#FFF" label="reaction time" />
      </div>

      <div className="cycle-time">
        <DayTimeDisplay days={4} time={9} daysColor="#FFF" label="cycle time" />
      </div>

      <div className="bars">

        <div className="grid-bars">
          <span style={{ color: '#FFF', fontSize: '1.6rem' }}>REACTION TIME</span>
          <PercentualBar height={15} percentual={8} points={3} label="<1 hora" fontColor="#FFF" />
          <PercentualBar percentual={6} points={2} label="1-4 horas" barColor="#B4FF63" fontColor="#FFF" />
          <PercentualBar percentual={17} points={6} label="4-8 horas" barColor="#FFC100" fontColor="#FFF" />
          <PercentualBar percentual={69} points={25} label=">8 horas" barColor="#FF6930" fontColor="#FFF" />
        </div>

        <div className="grid-bars">
          <span style={{ color: '#FFF', fontSize: '1.6rem' }}>CYCLE TIME</span>
          <PercentualBar percentual={8} points={3} label="<1 hora" fontColor="#FFF" />
          <PercentualBar percentual={6} points={2} label="1-4 horas" barColor="#B4FF63" fontColor="#FFF" />
          <PercentualBar percentual={17} points={6} label="4-8 horas" barColor="#FFC100" fontColor="#FFF" />
          <PercentualBar percentual={69} points={25} label=">8 horas" barColor="#FF6930" fontColor="#FFF" />
        </div>

        <div className="grid-bars">
          <span style={{ color: '#FFF', fontSize: '1.6rem' }}>LEAD TIME</span>
          <PercentualBar percentual={8} points={3} label="<1 hora" fontColor="#FFF" />
          <PercentualBar percentual={6} points={2} label="1-4 horas" barColor="#B4FF63" fontColor="#FFF" />
          <PercentualBar percentual={17} points={6} label="4-8 horas" barColor="#FFC100" fontColor="#FFF" />
          <PercentualBar percentual={69} points={25} label=">8 horas" barColor="#FF6930" fontColor="#FFF" />
        </div>
      </div>
    </div>
  </div>
);


export default Timing;
