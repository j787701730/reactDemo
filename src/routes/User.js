import React from 'react';
import { connect } from 'dva';
import User from '../components/User';


const Users = ({ user }) => {
  return (
    <div>
      <h2>User</h2>
      <User name={user}></User>
    </div>
  );
};

// export default Products;
export default connect(({ user }) => ({
  user,
}))(Users);