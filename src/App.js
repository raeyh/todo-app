import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
// import FirstComponent from "./Components/FirstComponent";
// import SecondComponent from "./Components/SecondComponent";
// import ThirdComponent from "./Components/ThirdComponent";
import Counter from "./Components/counter/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="App">
//         My Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }
export default App;
