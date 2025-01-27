import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  RowApiModule,
  ValidationModule,
} from 'ag-grid-community';
import {
  ColumnMenuModule,
  ColumnsToolPanelModule,
  ContextMenuModule,
  MasterDetailModule,
} from 'ag-grid-enterprise';
ModuleRegistry.registerModules([
  RowApiModule,
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  MasterDetailModule,
  ColumnMenuModule,
  ContextMenuModule,
  ValidationModule /* Development Only */,
]);
import './AgGridDetail.css';
import { mainColumnDefs, subColumnConfigs } from '../config/adcConfigs';

const ActionCellRenderer = (props) => {
  const handleDelete = () => {
    const updatedData = props.api
      .getRowNode(props.node.id)
      .gridApi.getRowData();
    const filteredData = updatedData.filter((row) => row.id !== props.data.id);
    props.api.setRowData(filteredData);
  };

  const handleAdd = () => {
    const newRow = { id: Date.now(), ...props.data };
    const updatedData = [
      ...props.api.getRowNode(props.node.id).gridApi.getRowData(),
      newRow,
    ];
    props.api.setRowData(updatedData);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const AgGridDetail = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    ...mainColumnDefs,
    {
      field: 'action',
      headerName: 'Action',
      cellRenderer: 'actionCellRenderer', // 自定義操作按鈕
      editable: false,
      pinned: 'right', // 將 Action 欄位固定在右側
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true, // 開啟單元格編輯
    };
  }, []);

  const detailCellRendererParams = useMemo(() => {
    return {
      detailGridOptions: {
        columnDefs: [
          ...subColumnConfigs[0].columns,
          {
            field: 'action',
            headerName: 'Action',
            cellRenderer: 'actionCellRenderer', // 自定義操作按鈕
            editable: false,
            pinned: 'right', // 將 Action 欄位固定在右側
          },
        ],
        rowHeight: 32, // 設置子表格行高度
        headerHeight: 32, // 設置子表格列高度
        defaultColDef: {
          headerClass: 'custom-sub-header', // 子表格表頭樣式
          editable: true, // 開啟單元格編輯
        },
        frameworkComponents: {
          actionCellRenderer: ActionCellRenderer,
        },
      },
      getDetailRowData: (params) => {
        params.successCallback(params.data[subColumnConfigs[0].id]);
      },
    };
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    // arbitrarily expand a row for presentational purposes
    setTimeout(() => {
      params.api.getDisplayedRowAtIndex(1).setExpanded(true);
    }, 0);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            ...defaultColDef,
            headerClass: 'custom-main-header', // 主表格表頭樣式
          }}
          masterDetail={true}
          embedFullWidthRows={true}
          detailCellRendererParams={detailCellRendererParams}
          onGridReady={onGridReady}
          onFirstDataRendered={onFirstDataRendered}
          frameworkComponents={{
            actionCellRenderer: ActionCellRenderer,
          }}
          rowHeight={32} // 設置行高度
          headerHeight={32}
        />
      </div>
    </div>
  );
};
export default AgGridDetail;
