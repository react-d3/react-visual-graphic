"use strict";

import {
  default as React,
  Component
} from 'react';

export default class Battery extends Component {
  constructor (props) {
    super(props);
  }

  render() {

    const {
      width,
      height,
      batteryColor,
      color,
      value,
      maxVal
    } = this.props;

    var batteryContainerStyle = {
      fill: "transparent"
    }

    var innerBatteryStyle = {
      fill: color
    }

    var innerTextStyle = {
      fill: batteryColor,
      fontSize: "20px",
      textAnchor: "middle"
    }

    return (
      <g>
        <rect
          width= {width - 20}
          height= {height}
          stroke= {batteryColor}
          strokeWidth= {"2px"}
          x= "5"
          y= "5"
          rx= "10"
          ry= "10"
          style= {batteryContainerStyle}
          />
        <rect
          width= {(width - 40) * value / maxVal}
          height= {height - 20}
          x= "15"
          y= "15"
          rx= "5"
          ry= "5"
          style= {innerBatteryStyle}
          />
        <rect
          width= {10}
          height ={30}
          x= {width - 10}
          y= {(height / 2) - 15}
          fill= {batteryColor}
          />
        <text
          x= {width / 2}
          y= {height / 2 + 10}
          style= {innerTextStyle}
          >
          {((value / maxVal) * 100).toFixed(1) + "%"}
        </text>
      </g>
    )
  }
}
