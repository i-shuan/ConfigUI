// src/config/mainRoutes.js
import {
  SettingOutlined,
  FolderViewOutlined,
  HomeOutlined,
  BulbOutlined,
} from '@ant-design/icons';

// prettier-ignore
export const routes = [
    { type: 'MAIN', icon: <HomeOutlined />, label: 'HOME', path: "/", group: 1 },
    { type: 'MAIN', icon: <SettingOutlined />, label: 'EDITOR', path: "/XmlEditor", group: 2 },
    { type: 'MAIN', icon: <BulbOutlined />, label: 'SECS SIGNAL', path: "/SecsSignalsTable",group: 3 },
    { type: 'MAIN', icon: <FolderViewOutlined />, label: 'FILE MANAGER', path: "/FileManagerPage",group: 4 },
];
