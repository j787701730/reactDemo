import React from 'react';
import {Table, Popconfirm, Button, LocaleProvider} from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN';

const ProductList = ({onDelete, products}) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <LocaleProvider locale={zh_CN}>
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        </LocaleProvider>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
};

export default ProductList;