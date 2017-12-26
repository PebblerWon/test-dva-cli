import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  handleClick = (e)=>{
    e.preventDefault();
    this.props.dispatch({
      type:'example/test',
      payload:{value:'the first way'}
    })
  }

  handleClick2 = (e)=>{
    e.preventDefault();
    this.props.dispatch({
      type:'example/test2',
      payload:{value:'the second way'}
    })
  }
  render(){
    const {test1,test2} = this.props.example;
    console.log(test1)
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          {/*<li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>*/}
          
          <div className={styles.container}>
            <button onClick={this.handleClick}>the first way</button>
            <div >
              {test1}
            </div>
            
          </div>
          
          <div className={styles.container}>
            <button onClick={this.handleClick2}>the second way</button>
            <div>
              {test2}
            </div>
          </div>
        </ul>
      </div>
    );
  }
  
}

IndexPage.propTypes = {
};

export default connect(
  state=>(
    {
      example:state.example
    }
  )
)(IndexPage);
