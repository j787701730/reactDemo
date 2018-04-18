import React from 'react';
import { connect } from 'dva';
import Content from '../components/Content';

const Contents = () => {
  return (
    <div>
      <h2>内容</h2>
      <Content></Content>
    </div>
  );
};

// export default Products;
export default connect()(Content);