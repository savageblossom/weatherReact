import React from 'react';
import axios from 'axios';

class GetWeather extends React.Component {
  state = {
    isLoaded: false,
    WeatherData: {
    },
  }
  componentDidMount() {
    this.props.onRef(this)
    this.getWeather()
  }

  getWeather = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.currentCity},ua&appid=499bd0871b9c479cd64981e4b4a8f249`;
    axios.get(url)
        .then(res => {
            const data = res.data;
            this.setState({ 
                WeatherData: [
                    "🌡️ Temperature: " + (data.main.temp - 273.15).toFixed(1) + "°C",
                    "🌡️ Feels like: " + (data.main.feels_like - 273.15).toFixed(1) + "°C",
                    "💧 Humidity: " + (data.main.humidity) + "%",
                    "⬇️ Pressure: " + (data.main.pressure) + " mmHg",
                    "🍃 Wind speed: " + (data.wind.speed) + " m/s",
                    "🍃 Wind degree: " + (data.wind.deg) + "",
                    "🌤️ Overcast: " + (data.weather[0].main) + "",
                ],
                isLoaded: true
            })

        })
        this.forceUpdate();
  }

 
  render() {
    const { isLoaded, WeatherData } = this.state;
    return (
        <div>
            <ul className="list-group">
            {
                isLoaded ? WeatherData.map((item, i) => <li className="list-group-item" key={i}>{item}</li>) : "Loading..."
            }
            </ul>
        </div>
    )
  }
}

export default GetWeather;