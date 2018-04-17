import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products'
import User from './routes/User'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

function RouterConfig({ history }) {
  return (
	  <LocaleProvider locale={zh_CN}>
		<Router history={history}>
		  <Switch>
			<Route path="/" exact component={IndexPage} />
			<Route path="/products" exact component={Products} />
			<Route path="/user" exact component={User} />
		  </Switch>
		</Router>
	  </LocaleProvider>
  );
}

export default RouterConfig;
