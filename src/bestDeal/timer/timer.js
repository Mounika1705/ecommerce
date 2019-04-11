import React, { Component } from 'react'


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealEndDueTime:
        Date.parse(this.props.children) - Date.parse(new Date())
    };
  }
  timer = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  }
  setTimeDiff() {
    let delta = this.state.dealEndDueTime / 1000;
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    const seconds = Math.floor(delta % 60);
    return { days, hours, minutes, seconds };
  }
  setTimer = () => {
    this.setState({
      dealEndDueTime: this.state.dealEndDueTime - 1000
    });
    if(this.state.dealEndDueTime > 0){
      this.timer = this.setTimeDiff();
    } else {
      this.timer = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }
  componentDidMount() {
    this.timer = setInterval(this.setTimer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="timer">
        <div>{this.timer.days < 10 && "0"}{this.timer.days}
          <span>Days</span></div>
        <div>{this.timer.hours < 10 && "0"}{this.timer.hours}
          <span>Hours</span></div>
        <div>{this.timer.minutes < 10 && "0"}{this.timer.minutes}
          <span>Minutes</span></div>
        <div>{this.timer.seconds < 10 && "0"}{this.timer.seconds}
          <span>Seconds</span></div>
      </div>
    )
  }
}
