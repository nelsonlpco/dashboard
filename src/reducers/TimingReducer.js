const DefaultState = {
  cycleTimeBar: {
    days: 10,
    hours: 5,
    percent: 50,
  },
  reactionTimeDisplay: {
    days: 1,
    hours: 5,
  },
  cycleTimeDisplay: {
    days: 4,
    hours: 6,
  },
  reactionTimeBars: [
    {
      label: '<1 horas',
      percent: 25,
      quantity: 4,
      barColor: '#56FF2F',
    },
    {
      label: '1-4 horas',
      percent: 6,
      quantity: 2,
      barColor: '#B4FF63',
    },
    {
      label: '4-8 horas',
      percent: 17,
      quantity: 6,
      barColor: '#FFC100',
    },
    {
      label: '>8 horas',
      percent: 69,
      quantity: 25,
      barColor: '#FF6930',
    },
  ],
  cycleTimeBars: [
    {
      label: '<1 horas',
      percent: 65,
      quantity: 4,
      barColor: '#56FF2F',
    },
    {
      label: '1-4 horas',
      percent: 6,
      quantity: 2,
      barColor: '#B4FF63',
    },
    {
      label: '4-8 horas',
      percent: 45,
      quantity: 6,
      barColor: '#FFC100',
    },
    {
      label: '>8 horas',
      percent: 69,
      quantity: 25,
      barColor: '#FF6930',
    },
  ],
  leadTimeBars: [
    {
      label: '<1 horas',
      percent: 65,
      quantity: 4,
      barColor: '#56FF2F',
    },
    {
      label: '1-4 horas',
      percent: 6,
      quantity: 2,
      barColor: '#B4FF63',
    },
    {
      label: '4-8 horas',
      percent: 45,
      quantity: 6,
      barColor: '#FFC100',
    },
    {
      label: '>8 horas',
      percent: 69,
      quantity: 25,
      barColor: '#FF6930',
    },
  ],
};

export default (state = DefaultState, action) => {
  switch (action.type) {
    default: return state;
  }
};
