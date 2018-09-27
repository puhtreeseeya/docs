import React from 'react'
import { Link } from 'gatsby'

import '../assets/layout.less'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
    // Set your state here
      section1: false,
      section2: false,
      section3: false,
      section4: false
    }
    
    this.onClick = this.onClick.bind(this); 
  }


  onClick = (e) => {
    this.setState({
      [e.target.getAttribute('name')] : !this.state[e.target.getAttribute('name')]
    });  

  }; 

  

  render() {
    console.log(this.state); 
    return (
      <div className="sidebar">
        <ul>
          <li name="section1" onClick={this.onClick} >Section 1</li>
            <ul className={ this.state.section1 ? 'show' : 'hide'}>
              <li>Entry 1</li>
              <li>Entry 2</li>
              <li>Entry 3</li>
            </ul>
          <li name="section2" onClick={this.onClick} >Section 2</li>
            <ul className={ this.state.section2 ? 'show' : 'hide'}>
              <li>Entry 1</li>
              <li>Entry 2</li>
              <li>Entry 3</li>
            </ul>
          <li name="section3" onClick={this.onClick}>Section 3</li>
            <ul className={ this.state.section3 ? 'show' : 'hide'}>
              <li>Entry 1</li>
              <li>Entry 2</li>
              <li>Entry 3</li>
            </ul>
          <li name="section4" onClick={this.onClick} >Section 4</li>
            <ul className={ this.state.section4 ? 'show' : 'hide'}>
              <li>Entry 1</li>
              <li>Entry 2</li>
              <li>Entry 3</li>
            </ul>
        </ul>
      </div>
    )
  }
}

export default Sidebar
