import React from 'react';
import { connect } from 'dva';
import User from '../components/User';


const Users = ({ user, id }) => {
  // console.log(this.props);
  return (
    <div>
      <h2>User</h2>
      <User name={user} id={id}></User>
    </div>
  );
};

// export default Products;
export default connect(({ user, props }) => ({
  user, props
}))(User);