import React, { Component } from 'react'

export default class BDN_Form3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Bui Duc Nguyen",
            age:20,
            course:'ReactJS'

        }
    }
    handlechange = (ev)=>{
        let name=ev.target.name;
        let val = ev.target.value;
        this.setState({
            [name]:val
        })
    }
    handleSubmit  = (ev)=>{
        ev.preventDfault();
        alert(this.state.studentName +"\n" + this.state.age + "\n" + this.state.course)
        let obj = {
            studentName:this.state.studentName,
            age:this.state.age,
            course: this.state.course
        }
        // tai du lieu len app
        this.props.onSubmit(obj)
    }
  render() {
    return (
      <div>
          <form name = 'bdnform'>
          <div>
                <label>ho va ten</label>
                <input name='studentName'
                 value={this.state.studentName}
                onChange={this.handlechange}/>
            </div>
            <div>
                <label>tuoi</label>
                <input name='age'
                 value={this.state.age}
                onChange={this.handlechange}/>
            </div>
            <div>
            <label>khoa hoc  </label>
                <select 
                value={this.state.course} name="course"
                 onChange={this.handlechange}>
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='JS'>JS</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
            </div>
            <button onClick={this.handleSubmit}>submit</button>
          </form>
      </div>
    )
  }
}