import React from "react";
import { Messages, Input, Footer } from "./components";
import './App.css';

function randomColor(){
  const randomColor = require("randomcolor");
  const color = randomColor();
  return color;
}
function randomName(){
  const randomName = require("sillyname");
  const name = randomName();
  return name;
}
class App extends React.Component {

  state = {
    messages: [],
    user : {
      username: randomName(),
      color: randomColor()
    }
  }

 constructor() {
    super();
    this.drone = new window.Scaledrone("Lf5zp8CgjuGnli1u", {
      data: this.state.user
    });
    this.drone.on("open", error => {
      if(error)
      {
        return console.error(error);
      }
      const member = {...this.state.user};
      member.id = this.drone.clientId;
      this.setState({user: member})
    });
   
    const room = this.drone.subscribe("observable-chatroom");
   
    room.on("message", message => {
      const { data, member } = message;
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages: messages});
    })
  }
  
    handleMessage = (message) => {
    this.drone.publish({
      room: "observable-chatroom",
      message
    })
  }
  render(){
  return (
    <div className="App">
      <div className="App-header">
        <h2>CHOO-CHOO! CHAT APPLICATION</h2>
      </div>
      <Messages user={this.state.user} posting={this.state.messages} />
      <Input onLetter={this.handleMessage} />
      <Footer />
    </div>
  );}
}

export default App;
