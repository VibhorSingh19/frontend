import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from "react-router";
import Pdf1 from './pdf_component';  
import Vid from './Vid';  
const players=[{"SS_id":1001,"SS_Name":"Session1","SS_Duration":112,"SS_Type":"V"},
  {"SS_id":1002,"SS_Name":"Session2","SS_Duration":60,"SS_Type":"V"},
  {"SS_id":1003,"SS_Name":"Session3","SS_Duration":15,"SS_Type":"P"},
  {"SS_id":1004,"SS_Name":"Session4","SS_Duration":120,"SS_Type":"V"},
  {"SS_id":1005,"SS_Name":"Session5","SS_Duration":15,"SS_Type":"P"}]
  
  //console.log(players);
  var route=1;
    
  

 
  
class App extends Component{
  state={
    loading:true,
    data1:[],
    rou:5,
    ssid:0,
    var1:"",
  }
   onRouteChange=(SS,ID)=>{
    if(SS==='V')
    {
      this.setState({ssid:ID,var1:SS });
    }
    else if(SS==='P')
    {
      this.setState({ssid:ID,var1:SS });
    }
    this.setState({rou:10 });
  
  }
  renderPlayer=(player,index)=>{
    return(
  
      <tr key={index}>
        <td>{player.SS_id}</td>
        <a onClick={()=>this.onRouteChange(player.SS_Type,player.SS_id)}><td >{player.SS_Name}</td></a>
        <td>{player.SS_Duration}</td>
        <td>{player.SS_Type}</td>
      </tr>
    )
  }
   
/*async componentDidMount(){
  const response = await fetch("https://ibm-sprint.herokuapp.com/session");
  const data=await response.json();
  
  this.setState({data1: data});
  this.setState({rou:route });
  
  //console.log(this.state.data1);
}*/
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
    <div>
    {
    this.state.rou===5?<div className="App">
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
 {players.map(this.renderPlayer)}
 
 </tbody>
</ReactBootStrap.Table>
  </div>
  :
  this.state.var1==='P'?
  <Pdf1 stateId={this.state.ssid}/>
  :
  <Vid stateId={this.state.ssid}/>
  
  
}
</div>
      );
}
}

export default App;
