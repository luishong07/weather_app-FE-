import React from 'react';
import { Line } from 'react-chartjs-2'


export default class Chart extends React.Component {

	state = {
		data: {
			labels: this.props.weather.map( weather => new Date(weather.dt_txt+"Z").toLocaleTimeString()),
			datasets: [
				{
					label: "Temperature",
					backgroundColor: "blue",
					data: this.props.weather.map( weather => Math.round((weather.main.temp-273.15)*9/5+32))
				}
			]
		}
	}

	render() {

		return (
			<div className="chart">
				<Line 
					options={{}}
					data={this.state.data}

				/>

			</div>
		)
	};
}