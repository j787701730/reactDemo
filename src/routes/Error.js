import React from 'react';
import { connect } from 'dva';
import Error from '../components/Error';

const Errors = () => {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
};

// export default Products;
export default connect()(Errors);