import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

// function Haha(props) {
//   console.info(props);
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }
// const mapStateToProps = ({ num }) => ({
//   num: num
// })
class Haha extends Component{
  componentDidMount(){
    console.info(this.props)
  }
  render(){
    return (
      <div>1111</div>
    )
  }
}

const mapStateToProps = (num) => {
  console.info(num)
  return {
    num: num
  }
}

export default connect(mapStateToProps)(Haha);

// @connect()
// export default class IndexPage extends Component{
//
//   componentDidMount() {
//     console.info(this.props.dispatch);
//   }
//
//   render() {
//     return (
//       <div className={styles.normal}>
//         <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//         <div className={styles.welcome} />
//         <ul className={styles.list}>
//           <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//           <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//         </ul>
//       </div>
//     );
//   }
// }
//
// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
