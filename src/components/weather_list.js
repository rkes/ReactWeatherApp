import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from './Chart';
import GoogleMap from './GoogleMap';
class WeatherList extends  Component{
    renderCityWeather(CityData){
        const cityName=CityData.city.name;
        console.log(CityData.list);
        const temps=CityData.list.map(weather=>weather.main.temp-273);
        const humiditys=CityData.list.map(weather=>weather.main.humidity);
        const {lon,lat}=CityData.city.coord;
        return (
            <tr key={cityName}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="orange" type="temperature" unit="celsius"/></td>
                <td>
                    <Chart data={humiditys} color="yellow" type="humidity" unit="Percent of Water Vapour per cubic"/>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderCityWeather)}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps({weather}){
    return {weather};
}
export default connect(mapStateToProps)(WeatherList);