import React, { Component } from 'react'

export default class BDN_Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            khoaHoc:"ReactJS"
        }
    }
    //hamxu lys
    handleChange=(ev)=>{
        this.setState({
            khoaHoc:ev.target.value
        })
    }
  render() {
    return (
      <div>
        <form>
            <label>Khoa Hoc</label>
            <select value={this.state.khoaHoc}name="khoaHoc" onChange={this.handleChange}>
                 <option value='HTML'>HTML</option>
                 <option value='CSS'>CSS</option>
                 <option value='JS'>JS</option>
                 <option value='ReactJS'>ReactJS</option>
            </select>
        </form>
      </div>
    )
  }
}
