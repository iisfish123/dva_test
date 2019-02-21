import React, { Component } from 'react';
import { Table, Icon, Input, Button } from 'antd';
import { connect } from 'dva';
import './form1.less';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  render: (text, record, index)=>{
    return (
      <span>{text}</span>
    )
  }
}];

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class TableComponent extends React.Component {

  state = {
    selectedRowKeys: [0,1]
  }

  componentDidMount() {

  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      onChange:(selectedRowKeys, selectedRows)=>{
        console.info(selectedRowKeys);
        console.info(selectedRows);
      }
    }

    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}


export default connect( form1 => form1)(TableComponent);

