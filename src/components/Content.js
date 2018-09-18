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
    this.ajax = this.ajax.bind(this);
  }
  ajax() {
    var params = new URLSearchParams();
    // params.append('name', 'hello jdmc你好');
    params.append('books_id', this.state.books_id);
    params.append('id', this.state.id);
    var self = this;
    axios.post('https://www.zhengw.top/getContent', params)
      .then(function (res) {
        // console.log(res.data);
        self.setState({
          content: res.data[0].content,
          title: res.data[0].name,
          prev: res.data.prev,
          next: res.data.next
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentWillMount() {
    this.setState({
      books_id: this.props.match.params.books_id,
      id: this.props.match.params.id
    }, function () {
      this.ajax()
    })
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate() {
    // window.location.reload()
    console.log('componentWillUpdate');
  }

  componentWillReceiveProps(nextProps) {
    const key = nextProps.match.params.id;
    if (this.state.id != key) {
      this.setState({
        id: key,
      }, () => {
        this.ajax();
      });
    }
  }


  handleClick(e) {
    console.log(e.target.getAttribute('data-id'))
    this.setState({
      id: e.target.getAttribute('data-id')
    }, function () {
      this.ajax()
    })
  }
  render() {
    return (
      <div>
        <Row><h1>{this.state.title}</h1></Row>
        <Row>
          <Col span={8}>{this.state.prev ? <Link to={'/content/' + this.state.books_id +
            '/' + this.state.prev} onClick={this.handleClick.bind(this)} data-id={this.state.prev}>上一回</Link> : '上一回'}</Col>
          <Col span={8}></Col>
          <Col span={8}>{this.state.next ? <Link to={'/content/' + this.state.books_id +
            '/' + this.state.next} onClick={this.handleClick.bind(this)} data-id={this.state.next}>下一回</Link> : '下一回'}</Col>
        </Row>
        <Row>
          <pre className={style.content} >{this.state.content}</pre>
        </Row>
      </div>
    );
  }
}

export default Content;