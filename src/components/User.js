import React, { Component } from 'react';
// import { Button } from 'antd';
import axios from 'axios';
import { Link } from 'dva/router';


class User extends Component {
  constructor(props) {
    super(props);
    // console.log(this);
    // console.log(this.props.match.params);
    this.state = {
      id: '',
      books: []
    }
  }

  componentWillMount() {
    // var params = new URLSearchParams();
    // params.append('name', 'hello jdmc你好');
    // params.append('id', '2');
    // this.setState({
    //   id: this.props.match.params.id
    // })
    var self = this;
    axios.post('https://www.zhengw.top/getBooks')
      .then(function (res) {
        console.log(res.data);
        self.setState({
          books: res.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    // console.log('componentDidMount');
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
        {/* <Button>{this.state.books}</Button> */}
        {
          this.state.books.map(function (val, i) {
            var url = '/booklist/' + val.id
            // id: "1", name: "三国演义", author: "罗贯中"
            return (<Link to={url} key={i}>{val.name}-{val.author}</Link>)
          })
        }
      </div>
    );
  }
}

export default User;