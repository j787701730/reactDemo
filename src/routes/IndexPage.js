import React from 'react';
import { connect } from 'dva';
import 'antd/lib/layout/style';


import { Layout, Row, Col, LocaleProvider, Carousel } from 'antd';
import { Button } from 'antd';
import { Modal } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import jpg1 from '../assets/1.jpg';
import jpg2 from '../assets/2.jpg';
import jpg3 from '../assets/3.jpg';
import jpg4 from '../assets/4.jpg';
const { Header, Footer, Content } = Layout;

const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: '确认删除?',
    content: '',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}


// fetch("https://api.example.com/items")
//   .then(res => res.json())
//   .then(
//     (result) => {
//       // this.setState({
//       //   isLoaded: true,
//       //   items: result.items
//       // });
//     },
//     // Note: it's important to handle errors here
//     // instead of a catch() block so that we don't swallow
//     // exceptions from actual bugs in components.
//     (error) => {
//       // this.setState({
//       //   isLoaded: true,
//       //   error
//       // });
//     }
//   )

function IndexPage() {
  const img_w = {
    'width': '100%',
  }

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <div>
      <LocaleProvider locale={zh_CN}>
        <Layout style={{ 'maxWidth': '1000px', margin: '0 auto' }}>
          <Row>
            <Col span={24}>
              <Carousel autoplay afterChange={onChange}>
                <div><img style={img_w} src={jpg1} alt="" /></div>
                <div><img style={img_w} src={jpg2} alt="" /></div>
                <div><img style={img_w} src={jpg3} alt="" /></div>
                <div><img style={img_w} src={jpg4} alt="" /></div>
              </Carousel>
            </Col>
          </Row>
          <Header style={{ background: '#fff' }}>
            <Row>
              <Row>
                <Col span={12}>col-12 <Button onClick={showConfirm}>按钮</Button></Col>
                <Col span={12}>col-12</Col>
              </Row>
            </Row>
          </Header>
          <Content style={{ height: '1000px' }}>
            <a href="/#/user">user1</a>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </LocaleProvider>
    </div>
  );
}


export default connect()(IndexPage);
