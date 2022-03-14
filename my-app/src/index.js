import React from 'react';
import ReactDOM from 'react-dom';
//import Car from './car.js';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
//import './style.css';

import reportWebVitals from './reportWebVitals';



ReactDOM.render(
 
    <App/>,
   
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











{/*//const firstElement=<h1>haiii vedhappa</h1>
//ReactDOM.render(firstElement,
  //document.getElementById('root'));

  //ReactDOM.render(<h1>haiii nidhi</h1>,document.getElementById("root"));

  //let table=(
    //<table>

     // <tr>
      //  <th>name</th>
      //</tr>
     // <tr>
      //  <td>nidhi</td>
      //</tr>
      //<tr>
     //   <td>vinu</td>
     // </tr>
      //<tr>
      //  <td>vedha</td>
      //</tr>
    //</table>
  //);

  //ReactDOM.render(table,document.getElementById("root"));


  //ReactDOM.render(<h1>haiii</h1>,document.getElementById("nidhi"));--nothing printed

  //const element=<h3>vedhamma</h3>
  //ReactDOM.render(element,document.getElementById("root"));

 // const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
 // ReactDOM.render(myelement, document.getElementById('root'));

 //const element=(
   //<div>
     //<h1>lam nidhi</h1>
     //<h1>my kid vedha</h1>
     //<p>am from kerala.completed btech it </p>
   //</div>
// );
 //ReactDOM.render(element, document.getElementById('root'));




 //const element=(
//<input type="text"></input>

 //);
 //ReactDOM.render(element, document.getElementById('root'));


 //const myelement = <h1 className="myclass">Hello World</h1>;
//ReactDOM.render(myelement, document.getElementById('root'));


//if
//const x = 5;
//let text = "Goodbye";
//if (x < 10) {
 // text = "Hello";
//}

//////const myelement = <h1>{text}</h1>;

//ReactDOM.render(myelement, document.getElementById('root'));



//ternary

//const x=15;
//const element=<h1>{ (x)<10 ? "hello":"gudbye" }</h1>
//ReactDOM.render(element, document.getElementById('root'));



//function component
//function Car(){
 // return <h2>hi am a car rider</h2>;
//}

//ReactDOM.render(<Car></Car>,document.getElementById("root"));




//props

//function Car(props){

  //return <h2>lam a{props.color}</h2>;

//}
//ReactDOM.render(<Car color="red"></Car>,document.getElementById("root"));

//class Car extends React.Component {
 // constructor() {
  //  super();
  //  this.state = {color: "red"};
  //}
  //render() {
   // return <h2>I am a {this.state.color} Car!</h2>;
  //}
//}
//ReactDOM.render(<Car />, document.getElementById('root'));






//using state object

//class Car extends React.Component{

  //constructor(props){
   // super(props);
    //this.state={
      //brand:"ford",
      //model:12,
      //color:"red"

    //};
  //}

  //render(){
    ////return(
//<div>
  //<h1>my {this.state.brand}</h1>
  //<p> it is a {this.state.color} model is
  ///{this.state.model}</p>
//</div>

  // );
 // }
//}
//ReactDOM.render(<Car />, document.getElementById('root'));







//changing the state object

//class Car extends React.Component{
  //constructor(props){
   // super(props);
    //this.state={
     // brand:"ford",
     // model:"mustard",
      //color:"red",
      //year:21
    //};
  //}

  //changeColor =() =>{
    //this.setState({color:"blue"});
  //}

  //render(){

    //return(
//<div>
  //<h1>my {this.state.brand}</h1>
  //<p> it is a {this.state.color} model is
  //{this.state.model}</p>

  //<button type="button" onClick={this.changeColor}>changecolor</button>
//</div>

  //  );
////  }
//}
//ReactDOM.render(<Car />, document.getElementById('root'));



//getderivedstatefrompropes

//class Header extends React.Component{
  //constructor(props){
   // super(props);
   // this.state={favoriteColor:"red"};
  //}
 // static getDerivedStateFromProps(props,state){
  //  return {favoriteColor:props.favcol};
 // }

  //render(){
   // return(
     // <h1>my fav color is {this.state.favoriteColor}</h1>
   // );
 // }
//}

//ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));








//render ()



//class Header extends React.Component{
  //render(){
   // return(
    //  <h1> this is the content</h1>
   // );
  //}
//}

//ReactDOM.render(<Header/>, document.getElementById('root'));



//componentDidMount



//class Header extends React.Component{
  //constructor(props){
    //super(props);
    //this.state={faveraiteColor:"red"};
 // }

  //componentDidMount(){
    //setTimeout(()=>{
      //this.setState({faveraiteColor:"yellow"})
    //},1000)
  //}
//render(){
 // return(
   // <h1>my fav color {this.state.faveraiteColor}</h1>
  //);
//}
//}
//ReactDOM.render(<Header/>, document.getElementById('root'));


//react list

//function Car(props){
//  return<li> lam a {props.brand}</li>;
//}

//function Garage(){
  ////const car1=['ford','tata','i20'];
  //return(
    //<>
    //<h1>who lives in my garage</h1>
    //<ul>
     // {car1.map((car)=><Car brand={car}/>)}
    //</ul>
    
    //</>
  //);
//}
//ReactDOM.render(<Garage/>,document.getElementById('root'));




//list key


//function Car(props){
  //return <li>lam a {props.brand}</li>;
//}

//function Garage(){

  //const car1=[
    //{id:1,brand:'ford'},
    //{id:2,brand:'bmw'},
    //{id:3,brand:'audi'}
  //];

  //return(
    //<>
    
    //<h1>who lives in may garrage</h1>
    //<ul>
//{car1.map((car)=><Car key={car.id} brand={car.brand}/>)}


  //  </ul>
    
    //</>
  //);
//}


//ReactDOM.render(<Garage/>,document.getElementById('root'));



//react form

//function Myform(){
 // return(

   // <form>
     // <label>enter your name
       // <input type="text"></input>
      //</label>
    //</form>
  //);
//}

//ReactDOM.render(<Myform/>,document.getElementById('root'));


//import { useState } from 'react';

//function Myform(){
//const[name,setName]=useState("");
//return(

 // <form>

   // <label>
     // enter the name<input
     // type="text" value={name}
     // onChange={(e)=>setName(e.target.value)}>
     // </input>
   // </label>
 // </form>
//);
//}

{/*ReactDOM.render(<Myform/>,document.getElementById('root'));



//*import { Component } from 'react';


class index extends Component{
  render(){
    var mystyle={
      fontSize:80,
      fontFamily:'Courier',
      color:'#003300'
    }

    return(

      <div>
      <h1 style={mystyle}>haiiii nidhi</h1>
      </div>
    );
  }
}*
export default index;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
*/}




