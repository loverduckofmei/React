import React, { Component } from 'react';
import Contact from './Contact';
// import propTypes from 'prop-types';
 
// class Hello extends Component {
//   render(){
//     return (
//       <div>
//         <h1>Hello {this.props.name}</h1>
//         <h2>{this.props.number}</h2>
//         <div>{this.props.children}</div>
//       </div>
//     );
//   }
// }
// Component.propTypes={
//   name: propTypes.string,
//   number: propTypes.number.isRequired
// };

// Hello.defaultProps = {
//   name: 'Unknown'
// };

// class App extends Component{
//   render(){
//     return(
//       <Hello name={this.props.name} number={this.props.number}>{this.props.children}</Hello>
//     );
//   }
// }

// class Counter extends Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       value:0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     this.setState({
//       value: this.state.value + 1
//     });
//   }
//   render(){
//     return(
//       <div>
//         <h2>{this.state.value}</h2>
//         <button onClick={this.handleClick}>Press Me</button>
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <Counter></Counter>
//     );
//   }
// }

// class ContactInfo extends Component{
//   render(){
//     return(
//     <div>{this.props.contact.name} {this.props.contact.phone}</div>
//     );
//   }
// }

// class Contact extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       contactData : [
//         {name: 'Mei', phone : '010-0000-0001'},
//         {name: 'Abet', phone : '010-0000-0002'},
//         {name: 'Kim', phone : '010-0000-0003'},
//         {name: 'David', phone : '010-0000-0004'}
//       ]
//     }
//   }
//   render(){
//     const mapToComponent = (data) =>{ // data = contactData 배열을 갖고옴
//       console.log(data);
//       return data.map((contact,i) =>{ // data 배열안의 있는 각 요소들을 index표시하며 받아옴
//         console.log(contact,i);
//         //Callback (data 배열의 각 data 받아오기(CurrentValue) , data의 index 받아오기(index))
//         return (<ContactInfo contact = {contact} key= {i} />); // key 사용 이유 각각의 요소들이 추가,변경되었는지 알기위해 사용
//         // {contact} = data 배열의 각 요소
//       })
//     };
//     return(
//       <div>
//         {mapToComponent(this.state.contactData)}
//       </div>
//     );
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <Contact></Contact>
//     );
//   }
// }

class App extends Component{
  render(){
    return(
      <Contact/>  
    );
  }
}
export default App; 


 