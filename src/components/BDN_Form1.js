import React, { Component } from 'react'

export default class BDN_Form1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"bui duc nguyen"
        }
    }
    // ham su li su kien 
    handlechange = (ev)=>{
        //lay gia tri khi thay doi mot diem cua form
        let ten = ev.target.name;
        let gtri = ev.target.value;
        // cap nhat state
        this.setState({
            [ten]:gtri
        })
    }
    handlesubmit = (ev)=>{
        ev.preventDefault();
        //lay gia tri moi trong state
        alert(this.state.studentName)
    }
  render(){
    return (
      <div>
        <form onSubmit={this.handlechange}>
            <div>
                <label>ho va ten</label>
                <input name='studentName' value={this.state.studentName}
                onChange={this.handlechange}/>
            
            </div>
            <button>Submit</button>
          </form>
      </div>
    )
  }
}