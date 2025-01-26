import React from 'react';
import { Menu, Input } from 'antd';
import './CustomHeader.css';

const CustomHeader = ({ routes }) => {
  return (
    <div className="custom-header">
      {/* 左側區塊 - Project Name */}
      <div className="header-left">
        <h2 className="project-name">ProjectName</h2>
      </div>

      {/* 中央區塊 - Menu */}
      <div className="header-center">
        <Menu
          mode="horizontal"
          className="header-menu"
          items={routes}
          selectable={false}
          defaultSelectedKeys={[]}
        />
      </div>

      {/* 右側區塊 - Search Bar */}
      <div className="header-right">
        <Input.Search
          placeholder="Search..."
          allowClear
          style={{ width: 200 }}
        />
      </div>
    </div>
  );
};

export default CustomHeader;
