import React from 'react';
import Card from './../../../components/Card';
import DaysDisplay from './../../../components/DaysDisplay';
import PercentualBar from './../../../components/PercentualBar/index';

import './timing.css';

const Timing = () => (
  <div className="timing-container">
    <div className="timing-grid">

      <div className="lead-time-days">
        <Card height="100%" width="100%" padding="0px" borderColor="#365262">
          <DaysDisplay days={1.5} description="behind target" />
        </Card>
      </div>

      <div className="lead-time-graphic">
        <Card height="100%" width="100%" padding="0px" borderColor="#365262">
          <DaysDisplay days={1.8} description="behind target" />
        </Card>
      </div>

      <div className="reaction-time-days">
        <Card height="100%" width="100%" padding="0px" borderColor="#365262">
          <DaysDisplay days={1.8} description="behind target" />
        </Card>
      </div>

      <div className="reaction-time-days">
        <Card height="100%" width="100%" padding="0px" borderColor="#365262">
          <DaysDisplay days={1.8} description="behind target" />
        </Card>
      </div>

      <div className="bars">

        <div className="grid-bars">
          <span style={{ color: '#FFF', fontSize: '1.6rem' }}>REACTION TIME</span>
          <PercentualBar percentual={8} points={3} label="<1 hora" fontColor="#FFF" />
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
