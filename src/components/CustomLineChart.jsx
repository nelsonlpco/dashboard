import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'A', value: 0 },
      { category: 'B', value: 21 },
      { category: 'C', value: 70 },
      { category: 'D', value: 81 },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 'D', value: 81 },
      { category: 'F', value: 120 },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 'G', value: 24 },
      { category: 'H', value: 62 },
      { category: 'I', value: 91 },
      { category: 'J', value: 106 },
    ],
  },
];

const CustomLineChart = () => (
  <ResponsiveContainer>
    <LineChart
      width={600}
      height={300}
      margin={
        {
          top: 5, right: 30, left: 20, bottom: 5,
        }
      }
    >
      <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
      <YAxis dataKey="value" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      {
        series.map(s => <Line dataKey="value" data={s.data} name={s.name} key={s.name} strokeWidth="2" activeDot={{ r: 8 }} />)
      }
    </LineChart>
  </ResponsiveContainer>
);

export default CustomLineChart;
