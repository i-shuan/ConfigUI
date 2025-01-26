// src/config/mainRoutes.js
import {
  SettingOutlined,
  FolderViewOutlined,
  HomeOutlined,
  BulbOutlined,
} from '@ant-design/icons';

// prettier-ignore
export const rawMenuItems = [
    { group: 'MAIN', icon: <HomeOutlined />, label: 'HOME', path: "/", level: 1 },
    { group: 'MAIN', icon: <SettingOutlined />, label: 'Editor', path: "/XmlEditor", level: 2 },
    { group: 'MAIN', icon: <BulbOutlined />, label: 'SECS SIGNAL', path: "/SecsSignalsTable",level: 3 },
    { group: 'MAIN', icon: <FolderViewOutlined />, label: 'FileManager', path: "/FileManagerPage",level: 4 },
];
