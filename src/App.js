import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {browserHistory} from "react-router";
  

/*const players=[{"SS_id":1001,"SS_Name":"Session1","SS_Duration":112,"SS_Type":"V"},
  {"SS_id":1002,"SS_Name":"Session2","SS_Duration":60,"SS_Type":"V"},
  {"SS_id":1003,"SS_Name":"Session3","SS_Duration":15,"SS_Type":"P"},
  {"SS_id":1004,"SS_Name":"Session4","SS_Duration":120,"SS_Type":"V"},
  {"SS_id":1005,"SS_Name":"Session5","SS_Duration":15,"SS_Type":"P"}]
  */
  //console.log(players);
  var route=1;
  const onRouteChange=(SS)=>{
  //browserHistory.push('/session');
  }

  const renderPlayer=(player,index)=>{
    return(
  
      <tr key={index}>
        <td>{player.SS_id}</td>
        <button onClick={()=>onRouteChange(player.SS_Type)}><td >{player.SS_Name}</td></button>
        <td>{player.SS_Duration}</td>
        <td>{player.SS_Type}</td>
      </tr>
    )
  }
   
  
class App extends Component{
  state={
    loading:true,
    data1:[],
    rou:5
  }
  
  
async componentDidMount(){
  const response = await fetch("https://ibm-sprint.herokuapp.com/session");
  const data=await response.json();
  
  this.setState({data1: data});
  this.setState({rou:route });
  
  //console.log(this.state.data1);
}
  /*
  
  //console.log(this)
   
   /*const url="https://ibm-sprint.herokuapp.com/session";
    const response= fetch(url);
    const data= response.json();
    console.log(data);
  /*fetch("https://ibm-sprint.herokuapp.com/session")
      .then(console.log())
  */
 
  render()
  {
  return (
    
    <div className="App">
      <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>SS_id</th>
      <th>SS_Name</th>
      <th>SS_Duration</th>
      <th>SS_Type</th>
    </tr>
  </thead>
  <tbody>
   {this.state.data1.map(renderPlayer)}
   </tbody>
</ReactBootStrap.Table>
    </div>
  );
}
}

export default App;
