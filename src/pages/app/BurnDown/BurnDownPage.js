import React from 'react';
import PercentualBar from '../../../components/PercentualBar';
import Card from '../../../components/Card';
import DaysDisplay from '../../../components/DaysDisplay';
import CustomLineChart from '../../../components/CustomLineChart';
import ListPoints from '../../../components/ListPoints';
import './BurnDown.css';

const items = [
  {
    value: 0,
    label: 'not started',
  },
  {
    value: 11,
    label: 'in progress',
  },
  {
    value: 1,
    label: 'done',
  },
];

const BurnDownPage = () => (
  <div className="burndown-container">
    <div className="grid-container">
      <div className="header" >
        header
      </div>

      <div className="graphic">
        <CustomLineChart />
      </div>

      <div className="days">
        <Card height="100%" width="100%" padding="0px" borderColor="#365262">
          <DaysDisplay days={1.5} description="behind target" />
        </Card>
      </div>

      <div className="listPoints">
        <Card height="100%" width="100%" padding="0px" borderColor="#365262">
          <ListPoints items={items} valueColor="#FFF" labelColor="#9CAA91" />
        </Card>
      </div>

      <div className="bars">
        <PercentualBar percentual={8} points={3} label="<1 hora" fontColor="#FFF" />
        <PercentualBar percentual={6} points={2} label="1-4 horas" barColor="#B4FF63" fontColor="#FFF" />
        <PercentualBar percentual={17} points={6} label="4-8 horas" barColor="#FFC100" fontColor="#FFF" />
        <PercentualBar percentual={69} points={25} label=">8 horas" barColor="#FF6930" fontColor="#FFF" />
      </div>
    </div>
  </div>
);

export default BurnDownPage;
