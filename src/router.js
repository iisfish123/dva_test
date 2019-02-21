import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import haha from './routes/haha';
import HomePage from './routes/HomePage';
import './style.less';
import dynamic from "dva/dynamic"
const { ConnectedRouter } = routerRedux

const Routes = [
  {
    //一级界面模考列表
    path: "/",
    "exact": true,
    component: () => require("./routes/IndexPage")
  },
  {
    path: "/home",
    component: () => require("./routes/HomePage")
  },
  // {
  //   path: '/home/haha',
  //   models: ()=> [import('./models/haha')],
  //   component: () => require("./routes/haha")
  // }
]


export default ({ history, app }) => {
  console.info(app)
  return (
  <ConnectedRouter history={history}>
    <Switch>
      {/*<Route path={'/'} exact component={IndexPage}/>*/}
      {/*<Route path={'/home'} component={HomePage}/>*/}

      {
        Routes.map(({ path, exact, ...dynamics }, key) => (
          <Route key={key}
                 exact={exact?true:false}
                 path={path}
                 component={dynamic({
                   app,
                   ...dynamics,
                 })}
          />
        ))
      }
    </Switch>
  </ConnectedRouter>
  );
}
