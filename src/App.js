import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  /*constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,
    }
  }
  componentDidMount(){
    fetch("https://ibm-sprint.herokuapp.com/session")
    .then(res=> res.json())
    .then(json=>{
      this.setState({
        isLoaded:true;
        items:json,
      })
    });

  }*/
  //console.log(this)
   const players=[{"SS_id":1001,"SS_Name":"Session1","SS_Duration":112,"SS_Type":"V"},
  {"SS_id":1002,"SS_Name":"Session2","SS_Duration":60,"SS_Type":"V"},
  {"SS_id":1003,"SS_Name":"Session3","SS_Duration":15,"SS_Type":"P"},
  {"SS_id":1004,"SS_Name":"Session4","SS_Duration":120,"SS_Type":"V"},
  {"SS_id":1005,"SS_Name":"Session5","SS_Duration":15,"SS_Type":"P"}]
  console.log(players); 
   /*const url="https://ibm-sprint.herokuapp.com/session";
    const response= fetch(url);
    const data= response.json();
    console.log(data);
  /*fetch("https://ibm-sprint.herokuapp.com/session")
      .then(console.log())
  */
 
  const renderPlayer=(player,index)=>{
    return(

      <tr key={index}>
        <td>{player.SS_id}</td>
        <a href={"https://ibm-sprint.herokuapp.com/content/"+player.SS_id}><td>{player.SS_Name}</td></a>
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
