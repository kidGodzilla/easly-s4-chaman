import React, { Component } from 'react';
import PropTypes from "prop-types";
import './PlusInfo.scss';

class PlusInfo extends Component {
  render() {

    const{humidity, pressure, }=this.props.mainData;
    const{speed}=this.props.windData;
  

    return (
      <div className='container__plusInfo-daily'>
        <div className='plusInfo-humidity'>
          <p className='plusInfo-humidity-title plus'> Humidity</p>
          <p className='plusInfo-humidity-data data'> {humidity?humidity:'---'}</p>
        </div>
        <div className='plusInfo-wind'>
          <p className='plusInfo-wind-title plus'> Wind</p>
          <p className='plusInfo-wind-data data'> {speed?speed:'---'}</p>
        </div>
        <div className='plusInfo-pressure'>
          <p className='plusInfo-pressure-title plus'> Pressure</p>
          <p className='plusInfo-pressure-data data'> {pressure?pressure:'---'}</p>
        </div>
      </div>
    );
  }
}

PlusInfo.propTypes = {
  humidity: PropTypes.number,
  wind: PropTypes.number,
  pressure: PropTypes.number
};

export default PlusInfo;