import React from 'react';
import { Layout } from 'antd';
import './Layouts.css';
import CustomHeader from './Components/CustomHeader';
const { Header, Content } = Layout;

const Layouts = ({ routes, children }) => {
  return (
    <Layout className="app-layout">
      <Header>
        <CustomHeader routes={routes} />
      </Header>
      <Content className="app-content">{children}</Content>
    </Layout>
  );
};

export default Layouts;
