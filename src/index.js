import dva from 'dva';
import './index.css';

// 1. Initialize

const app = dva({
  initialState: {
    products: [
      {name: 'dva', id: 1},
      {name: 'antd', id: 2},
    ],
  },
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
app.model(require('./models/products').default);
app.model(require('./models/user').default);
// 5. Start
app.start('#root');