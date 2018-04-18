import React from 'react';
import { connect } from 'dva';
import Booklist from '../components/Booklist';


const Booklists = () => {
  return (
    <div>
      <h2>目录</h2>
      <Booklist></Booklist>
    </div>
  );
};

// export default Products;
export default connect()(Booklist);