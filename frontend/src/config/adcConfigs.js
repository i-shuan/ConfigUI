// config/adcConfigs.js

export const mainColumnDefs = [
  { field: 'name', cellRenderer: 'agGroupCellRenderer' },
  { field: 'account' },
  { field: 'calls' },
  { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
];

export const subColumnConfigs = [
  {
    id: 'callRecords',
    columns: [
      { field: 'callId' },
      { field: 'direction' },
      { field: 'number' },
      { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
      { field: 'switchCode' },
    ],
  },
  // 可在此添加更多子表格配置
];
