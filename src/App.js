import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import TownSelected from './Components/TownSelected';
import CurrentWeather from './Components/CurrentWeather';
import GetWeather from './Components/GetWeather';



class App extends Component {

  componentDidUpdate() {
    this.refreshWeatherInfo();
  }

  state = {
    currentCity: "Simferopol"
  }

  getCurrentCity = (childData) => { 
    this.setState({currentCity: childData}
  )}

  refreshWeatherInfo = () => {
    this.child.getWeather() 
  }

  render() {
    return (
      <div>
        <Header />
        <TownSelected parentCallback = {this.getCurrentCity } />
        <CurrentWeather currentCity = {this.state.currentCity } />
        <GetWeather currentCity = {this.state.currentCity } onRef={ref => (this.child = ref)} />
      </div>
    );
  }
}

export default App;
