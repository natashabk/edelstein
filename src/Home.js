import React, {Component} from 'react';
export default class Home extends Component{
  render(){
    return (
      <div className="bg" id="home">
      <div id="homeTitle">
        <h1>Find your way back</h1> 
        <h1>to a healthier you.</h1>
        <button className="homeBtn" id="topHomeBtn" onClick={()=>this.props.history.push('/welcome')}>Learn more</button><br/>
        <button className="homeBtn" onClick={()=>this.props.history.push('/booking')}>Current patients</button>
      </div>
      </div>
    )
  }
}