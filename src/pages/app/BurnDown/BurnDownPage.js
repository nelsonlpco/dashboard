import React from 'react';
import PercentualBar from './../../../components/PercentualBar/index';
import Card from './../../../components/Card';
import DaysDisplay from './../../../components/DaysDisplay';
import CustomLineChart from './../../../components/CustomLineChart';
import './BurnDown.css';

const BurnDownPage = () => (
  <div className="grid-container">
    <div className="item-a" >
      header
    </div>

    <div className="item-d">
      <br />
      <Card height="60px" width="150px" borderColor="#365262">
        <DaysDisplay days={1.5} description="behind target" />
      </Card>
    </div>

    <div className="item-b">
      <CustomLineChart />
    </div>

    <div className="saci">
      <PercentualBar percentual={8} points={3} label="<1 hora" fontColor="#FFF" />
      <PercentualBar percentual={6} points={2} label="1-4 horas" barColor="#B4FF63" fontColor="#FFF" />
      <PercentualBar percentual={17} points={6} label="4-8 horas" barColor="#FFC100" fontColor="#FFF" />
      <PercentualBar percentual={69} points={25} label=">8 horas" barColor="#FF6930" fontColor="#FFF" />
    </div>
  </div>
);

export default BurnDownPage;
