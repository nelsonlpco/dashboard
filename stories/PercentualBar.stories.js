import React from 'react';
import { storiesOf } from '@storybook/react';

import PercentualBar from '../src/components/PercentualBar/index';

storiesOf('PercentualBar', module)
  .add('percentual: 0%, points: 0', () => <PercentualBar percentual={0} points={0} />)
  .add('percentual: 50%, points: 10', () => <PercentualBar percentual={50} points={10} />)
  .add('percentual: 100%, points: 20', () => <PercentualBar percentual={100} points={20} />)
  .add('label: <2 Horas,  percentual: 25%, points: 2', () => <PercentualBar label="<1 HORA" percentual={25} points={2} />)
  .add('label: <2 Horas, fontColor: yellow,  percentual: 25%, points: 1', () => <PercentualBar points={1} label="<1 HORA" percentual={25} fontColor="yellow" />)
  .add('label: <2 horas, barColor: red, backgroundColor: black, percentual: 73%, points: 4', () => <PercentualBar points={4} backgroundColor="#000" label="<2 Horas" percentual={73} barColor="red" />)
  .add('label: <2 horas, barColor: black, backgroundColor: red, percentual: 73%, height: 40px, points: 3', () => <PercentualBar points={3} backgroundColor="red" height={40} label="<2 Horas" percentual={73} barColor="black" />);
