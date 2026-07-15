// import { Component } from "react";

// class ClassComponent extends Component{
//     // state={
//     //     showtext=true
//     // }
//     constructor(props){
//     super(props);
//     this.state={
//         showtext:false,
//     }
// }
//     render(){
//         console.log(this.state)
//         return(
//                <div className=" mt-100 ml-100">          
//                       <h1>Class Component</h1>
//                  <button style={{border:"2px black Solid",padding:"2px"}}>Toggle Text</button>
//            </div>)
//     }
// }

// export default ClassComponent;


// import { Component } from "react";

// class ClassComponent extends Component{
//       state={
//     showtext:true
//   }
//    handleclick=()=>{
//     console.log("click");
//     this.setState({
//         showtext:!this.state.showtext
//     })
//   }


//     render(){
//         console.log(this.state)
//         return(
//             <div>
//                {
//                     this.state.showtext?<h1>Class Component</h1>:null
//                 }
//                 <h1>Class Components</h1>
//  <button onClick={this.handleclick}>Toggle</button>
//             </div>
//         )
//     }
// }
// export default ClassComponent;


// import React, { Component } from "react";

// class ClassComponent extends Component {

//     constructor() {
//         super();

//         this.state = {
//             count: 0
//         };
//     }

//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     };

//     render() {

//         return (

//             <>
//                 <h1>{this.state.count}</h1>

//                 <button onClick={this.increment}>
//                     Increment
//                 </button>
//             </>

//         );

//     }

// }

// export default ClassComponent;

import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    console.log("1. Constructor");

    this.state = {
      name: "Sanchay",
      age: 22,
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate");

    console.log("Previous Age:", prevState.age);
    console.log("Current Age:", this.state.age);
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount");
  }

  increaseAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
  console.log("render")
    return (
      <div>
        <h2>User Profile</h2>

        <h3>Name: {this.state.name}</h3>

        <h3>Age: {this.state.age}</h3>

        <button onClick={this.increaseAge}>
          Increase Age
        </button>
      </div>
    );
  }
}

export default ClassComponent;


// Class Component
// Interview Definition

// A Class Component is a JavaScript class that extends React.Component and implements a render() method to return JSX. It can manage state and lifecycle methods without using Hooks.

// Explanation
// It is created using the ES6 class keyword.
// It extends React.Component.
// It must contain a render() method.
// It receives props through this.props.
// It stores state inside this.state.
// It updates state using this.setState().
// It uses lifecycle methods like componentDidMount() and componentWillUnmount().
// Example
// import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// export default Welcome;