import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';


import IndexPage from './routes/IndexPage';
import Products from './routes/Products'
import User from './routes/User'
import Booklist from './routes/Booklist'
import Content from './routes/Content';
import Error from './routes/Error'

function RouterConfig({ history }) {
	return (
		<LocaleProvider locale={zh_CN}>
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={IndexPage} />
					<Route path="/products" exact component={Products} />
					<Route path="/user" exact component={User} />
					<Route path="/booklist/:id" exact component={Booklist} />
					<Route path="/content/:books_id/:id" exact component={Content} />
					<Route component={Error} />
				</Switch>
			</Router>
		</LocaleProvider>
	);
}

export default RouterConfig;
