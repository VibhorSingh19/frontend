import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  /*const players=[
    {
      "position":"Forward",name:"Vibhor",team:"IND"
    },
    {
      "position":"Middle",name:"Shubh",team:"INDD"
    },
    {
      "position":"Back",name:"Uttu",team:"INDDD"
    }
  ]*/
  const players=[{"SS_id":1001,"SS_Name":"Session1","SS_Duration":112,"SS_Type":"V"},
  {"SS_id":1002,"SS_Name":"Session2","SS_Duration":60,"SS_Type":"V"},
  {"SS_id":1003,"SS_Name":"Session3","SS_Duration":15,"SS_Type":"P"},
  {"SS_id":1004,"SS_Name":"Session4","SS_Duration":120,"SS_Type":"V"},
  {"SS_id":1005,"SS_Name":"Session5","SS_Duration":15,"SS_Type":"P"}]
   
  const renderPlayer=(player,index)=>{
    return(
      <tr key={index}>
        <td>{player.SS_id}</td>
        <td>{player.SS_Name}</td>
        <td>{player.SS_Duration}</td>
        <td>{player.SS_Type}</td>
      </tr>
    )
  }
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
   {players.map(renderPlayer)}
  </tbody>
</ReactBootStrap.Table>
    </div>
  );
}

export default App;
