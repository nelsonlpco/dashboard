import React from 'react';
import CustomLineChart from './../../components/CustomLineChart';
import PercentualBar from '../../components/PercentualBar';
import Card from './../../components/Card';
import DaysDisplay from './../../components/DaysDisplay';

const LoginPage = () => (
  <div className="container">
    <div style={{ width: '250px', padding: '15px' }}>
      <PercentualBar percentual={8} points={3} label="<1 hora" fontColor="#FFF" />
      <PercentualBar percentual={6} points={2} label="1-4 horas" barColor="#B4FF63" fontColor="#FFF" />
      <PercentualBar percentual={17} points={6} label="4-8 horas" barColor="#FFC100" fontColor="#FFF" />
      <PercentualBar percentual={69} points={25} label=">8 horas" barColor="#FF6930" fontColor="#FFF" />
    </div>
    <div>
      <br />
      <Card height="60px" width="150px" borderColor="#365262">
        <DaysDisplay days={1.5} description="behind target" />
      </Card>
    </div>
    <div style={{ width: '90vw', height: '90vh' }}>
      <CustomLineChart />
    </div>
  </div>
);

export default LoginPage;

