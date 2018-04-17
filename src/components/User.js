import React, { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';


class User extends Component {
  constructor(props) {
    super(props);
    console.log(this);

  }

  componentWillMount() {
    // var params = new URLSearchParams();
    // params.append('name', 'hello jdmc你好');
    // params.append('id', '2');

    // axios.post('https://www.zhengw.top/getBooks', params)
    //   .then(function (res) {
    //     console.log(res);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  componentDidMount() {
    // console.log('componentDidMount');
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Button>User button</Button>
      </div>
    );
  }
}

export default User;