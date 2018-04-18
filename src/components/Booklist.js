import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import { Link } from 'dva/router';


class Booklist extends Component {
  constructor(props) {
    super(props);
    // console.log(this);
    // console.log(this.props.match.params);
    this.state = {
      menus: [],
      books_id: ''
    }
  }

  componentWillMount() {
    var params = new URLSearchParams();
    // params.append('name', 'hello jdmc你好');
    params.append('id', this.props.match.params.id);
    var self = this;
    axios.post('https://www.zhengw.top/getBook', params)
      .then(function (res) {
        console.log(res.data);
        self.setState({
          menus: res.data.data,
          books_id: res.data.books_id
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    // console.log('componentDidMount');
  }
  render() {
    var self = this;
    return (
      <div>
        <Row>
          {
            this.state.menus.map(function (val, i) {
              var url = '/content/' + self.state.books_id + '/' + val.id
              // id: "1", name: "三国演义", author: "罗贯中"
              return (<Col span={12} key={i}><Link to={url} key={i}>{val.name}</Link></Col>)
            })
          }
        </Row>
      </div>
    );
  }
}

export default Booklist;