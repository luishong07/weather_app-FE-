import React from 'react';
import { Line } from 'react-chartjs-2'


export default class Chart extends React.Component {


	state = {
		data: {
			labels: this.props.weather.map( weather => new Date(weather.dt_txt+"Z").toLocaleTimeString()),
			datasets: [
				{
					label: "Temperature",
					backgroundColor: this.props.color,
					data: this.props.temps
				}
			]
		}
	}


	render() {

		let data = {
			labels: this.props.weather.map( weather => new Date(weather.dt_txt+"Z").toLocaleTimeString()),
			datasets: [
				{
					label: "Temperature",
					backgroundColor: this.props.color,
					data: this.props.temps
				}
			]
		}

		return (
			<div className="chart">
				<Line 
					options={{}}
					data={data}

				/>
			</div>
		)
	};
}