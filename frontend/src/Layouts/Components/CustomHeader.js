import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './CustomHeader.css';

const CustomHeader = () => {
  return (
    <div className="custom-header">
      <div className="custom-header-left"></div>
      <div className="custom-header-center">
        <Input
          className="custom-header-search"
          size="small"
          placeholder="search..."
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="custom-header-right"></div>
    </div>
  );
};

export default CustomHeader;
