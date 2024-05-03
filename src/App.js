import React, { Component } from 'react'
import BDN_Form1 from './components/BDN_Form1'
import BDN_Form2 from './components/BDN_Form2';
import BDN_Form3 from './components/BDN_Form3';

export default class App extends Component {
  handleSubmit = (param)=>{
    console.log(param);
  }
  render() {
    return (
      <div>
        <h1>Event form-controlled compoment</h1>
        <div>
          <BDN_Form1/>
          <BDN_Form2/>
          <BDN_Form3  onSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}