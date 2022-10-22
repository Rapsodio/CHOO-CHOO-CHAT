import React from "react";

import { Messages, Input, Footer } from "./components";

import './App.css';


function randomName(){
  const randomName = require("sillyname");
  const name = randomName();
  return name;
}

function randomColor(){
  const randomColor = require("randomcolor");
  const color = randomColor();
  return color;
}

class App extends React.Component {

  state = {
    poruke: [],
    korisnik : {
      username: randomName(),
      color: randomColor()
    }
  }

  
  constructor() {
    super();
    this.drone = new window.Scaledrone("TTAB80ZRqzFy41Il", {
      data: this.state.korisnik
    });
    this.drone.on("open", error => {
      if(error)
      {
        return console.error(error);
      }
      const member = {...this.state.korisnik};
      member.id = this.drone.clientId;
      this.setState({korisnik: member})
    });
   
    const room = this.drone.subscribe("observable-chatroom");
   
    room.on("message", message => {
      const { data, member } = message;
      const poruke = this.state.poruke;
      poruke.push({member, text: data});
      this.setState({poruke: poruke});
    })
  }

  
  handlePoruka = (message) => {
    this.drone.publish({
      room: "observable-chatroom",
      message
    })
  }

  render(){
  return (
    <div className="App">
      <div className="App-header">
        <h1>MY CHAT APP</h1>
      </div>
      <Messages korisnik={this.state.korisnik} poruke={this.state.poruke} />
      <Input onPoruka={this.handlePoruka} />
      <Footer />
    </div>
  );}
}

export default App;
