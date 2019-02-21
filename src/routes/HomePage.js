import React, { Component } from 'react';
import { connect } from 'dva';
import { Router, Route, Switch, HashRouter } from 'dva/router';
import styles from './IndexPage.css';
import Form1 from '../components/Form1';
import Table from '../components/Table';
import haha from './haha';

@connect(form1 => form1)
export default class HomePage extends Component{

  componentDidMount() {
    console.info(this.props);
  }

  handleChange = (obj) => {
    // console.info('this is homePage',obj.userName.value);
    this.props.dispatch({
      type: 'form1/save',
      username:obj.userName.value
    })
  }

  render() {
    // console.info(this.props)
    const {
      match,
      location,
    } = this.props
    return (
      <div className={styles.normal}>
        {/*<Form1 onChange={this.handleChange}/>*/}
        {/*<input value={this.props.form1.username}/>*/}

        <Table />

        <Route path="/home/haha" exact  component={haha} />
        <Route path="/home/xixi" exact  render={()=>(<div>123321</div>)} />
        {/*<Route*/}
          {/*path={"/home/haha"}*/}
          {/*component={haha}*/}
        {/*/>*/}

      </div>
    );
  }
}

HomePage.propTypes = {
};
