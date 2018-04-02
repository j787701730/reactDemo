import React from 'react';
import {connect} from 'dva';


const Products = ({dispatch, products}) => {
  return (
    <div>
      <h2>User</h2>
    </div>
  );
};

// export default Products;
export default connect(({products}) => ({
  products,
}))(Products);