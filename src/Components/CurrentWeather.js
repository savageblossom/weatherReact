import React from 'react';

class CurrentWeather extends React.Component {
    render() {
        return(
            <div>
                <h2>Current weather in { this.props.currentCity }</h2>
            </div>
        )
    }
}

export default CurrentWeather;
