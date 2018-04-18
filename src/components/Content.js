import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import { Link } from 'dva/router';
import style from '../assets/pre.css';


class Content extends Component {
  constructor(props) {
    super(props);
    // console.log(this);
    // console.log(this.props.match.params);
    this.state = {
      content: '',
      books_id: '',
      title: '',
      prev: '',
      next: ''
    }
  }

  componentWillMount() {
    var params = new URLSearchParams();
    // params.append('name', 'hello jdmc你好');
    params.append('books_id', this.props.match.params.books_id);
    params.append('id', this.props.match.params.id);
    var self = this;
    axios.post('https://www.zhengw.top/getContent', params)
      .then(function (res) {
        console.log(res.data);
        self.setState({
          content: res.data[0].content,
          title: res.data[0].name,
          books_id: res.data.books_id,
          prev: res.data.prev,
          next: res.data.next
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    // console.log('componentDidMount');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.books_id == this.state.books_id || nextState.id == this.state.id) {
  //     return false
  //   }
  // }
  render() {
    return (
      <div>
        <Row><h1>{this.state.title}</h1></Row>
        <Row>
          <Col span={8}>{this.state.prev ? <Link to={'/content/' + this.state.books_id +
            '/' + this.state.prev} >上一回</Link> : '上一回'}</Col>
          <Col span={8}></Col>
          <Col span={8}>{this.state.next ? <Link to={'/content/' + this.state.books_id +
            '/' + this.state.next} >下一回</Link> : '下一回'}</Col>
        </Row>
        <Row>
          <pre className={style.content} >{this.state.content}</pre>
        </Row>
      </div>
    );
  }
}

export default Content;