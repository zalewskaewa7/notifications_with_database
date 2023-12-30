import React, { useState } from 'react'
import "./scss/header.scss"

import axios from "axios";


class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          datas: [],
          notReaded: 0,
          notReadedIndex: []
      }
  }
  
  componentDidMount() {
      axios.get("/api/notifications").then((response) => {
          this.setState({ datas: response.data });
          response.data.map((element, index) => 
            (element.ifRead) ? "" : 
            this.setState({
              notReaded: this.state.notReaded = this.state.notReaded+1,
              notReadedIndex: this.state.notReadedIndex = [...this.state.notReadedIndex, index+1]
            })
      )
      });
  }
   markReaded(){
    this.state.datas.forEach((element) => element.ifRead= 1);
    this.setState({notReaded: 0});
this.state.notReadedIndex.map((element) => 
  axios.put("/api/updatenotification/"+element)
  .then((response) => console.log(response))
  
)
   
  }

  render() {

  return (
    <header>
        <div className="notification">
            <h1>Notifications <span>{this.state.notReaded}</span></h1>
        
        </div>
        <button className="buttonAddForm" onClick={() => this.props.showForm()}>Dodaj powiadomienie</button>
        <div className="markAsRead" onClick={() => this.markReaded()}>Mark all as read</div>
    </header>
  )
}
}

export default Header