// src/config/mainRoutes.js
import { HomeOutlined, TableOutlined } from '@ant-design/icons';
import AgGridDetail from '../AgGridTemplate/AgGridDetail';
// prettier-ignore
export const routes = [
    { key:'1', type: 'MAIN', icon: <HomeOutlined />, label: 'HOME', path: "/", group: 1, element: <></>},
    { key:'2', type: 'MAIN', icon: <TableOutlined />, label: 'AGGRID DETAIL', path: "/AgGridDetail", group: 3, element: <AgGridDetail/>}
];
