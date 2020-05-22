import React from 'react';
import './App.css';
import Router from './router.js'
export default class App extends React.Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}




