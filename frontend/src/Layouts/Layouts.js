import React from 'react';
import { Button, Layout, Menu } from 'antd';
import './Layouts.css';
import CustomHeader from './Components/CustomHeader';
import { useSelector, useDispatch } from 'react-redux'; // 引入 useDispatch
import { setIsDrawerCollapsed } from '../store/ui-action';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

const Layouts = ({ routes, children }) => {
  const dispatch = useDispatch();
  const { isDrawerCollapsed } = useSelector((state) => state.ui); // 確保這個路徑與你的 store 結構匹配

  const handleCollapsed = () => {
    dispatch(setIsDrawerCollapsed(!isDrawerCollapsed));
  };

  return (
    <Layout>
      <Sider
        className={`custom-sider ${isDrawerCollapsed ? 'collapsed' : ''}`}
        trigger={null}
        collapsible
        collapsed={isDrawerCollapsed}
      >
        <div
          className={`custom-sider-title ${isDrawerCollapsed ? 'collapsed' : ''}`}
        >
          {!isDrawerCollapsed && <h1>Config UI</h1>}
          <Button className="custom-sider-btn" onClick={handleCollapsed}>
            {isDrawerCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[]}
          items={routes}
        />
      </Sider>
      <Layout className="app-layout">
        <Header>
          <CustomHeader routes={routes} />
        </Header>
        <Content className="app-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
