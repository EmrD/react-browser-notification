import React ,  { Component } from "react";

class BrowserNotification extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    if (Notification.permission == "granted"){
      new Notification('Hello World From React!')
    }else{
      alert("Permission denied.")
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showNotification}>Show notification</button></div>
    );
  }
}

export default BrowserNotification;