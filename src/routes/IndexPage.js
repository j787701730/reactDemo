import React from 'react';
import { connect } from 'dva';
import 'antd/lib/layout/style';
import { Link } from 'dva/router';

import { Layout, Row, Col, Carousel } from 'antd';
import { Button } from 'antd';
import { Modal } from 'antd';


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

function IndexPage() {
  const img_w = {
    'width': '100%',
  }

  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div>
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
        <Row>
          <Col span={12}>col-12 <Button onClick={showConfirm}>按钮</Button></Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Content style={{ height: '1000px' }}>
          <Link to="/user">go to user</Link>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}


export default connect()(IndexPage);
