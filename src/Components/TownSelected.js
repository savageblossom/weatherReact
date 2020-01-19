import React from 'react';

class TownSelected extends React.Component {

    state = {
        towns: ["Simferopol", "Sevastopol", "Kerch", "Feodosiya", "Dzhankoy", "Krasnoperekopsk"]
    }
    sendData = (e) => {
        this.props.parentCallback(e.target.value);
    }
    render() {
        const listTowns = (this.state.towns).map((townName) =>
            <option key={townName} value={townName}>{townName}</option>
        );
        return(
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">City:</label>
                    </div>
                    <select className="custom-select" onChange={this.sendData} defaultValue="Simferopol">
                        {listTowns}
                    </select> 
                </div>
            </div>
        )
    }
}

export default TownSelected;