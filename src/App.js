import React, { Component } from "react"
import "./App.css"
import NavBar from "./components/topNav";
import Heading from "./components/heading";
import SubHeading from './components/subHeading';
import Content from './components/content';
import Paragraph from './components/paragraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="pageContainer">
          <Heading title="Introduction" />
          <SubHeading title='Work' />
          <Content>
            <Paragraph para={["My name is Anubhav. I am 26 Years old. I am a software Developer by profession","I like driving my car in my free time"]}/>
            <Paragraph para={["My name is Anubhav. I am 26 Years old. I am a software Developer by profession","I like driving my car in my free time"]}/>
          </Content>
        </div>
      </div>
    )
  }
}

export default App
