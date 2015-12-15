"use strict";

import {
  default as React,
  Component
} from 'react';

export default class Meter extends Component {
  constructor (props) {
    super(props);
  }

  render() {

    const {
      width,
      height,
      meterColor,
      color,
      value,
      maxVal,
      text
    } = this.props;

    var lines = [];

    var meterContainerStyle = {
      fill: "transparent"
    }

    var innerMeterStyle = {
      fill: color
    }

    var innerTextStyle = {
      fill: meterColor,
      fontSize: "20px",
      textAnchor: "middle"
    }

    var dist = height / 10;

    for(var i = 0; i < 10; i++) {
      lines.push(
        <line
          key= {i}
          x1= "5"
          x2= "20"
          y1= {height - (dist * i) - 10}
          y2= {height - (dist * i) - 10}
          stroke= {meterColor}
          strokeWidth= "2px"
          />
      )
    }

    return (
      <g>
        <rect
          width= {width - 10}
          height= {height - 10}
          stroke= {meterColor}
          strokeWidth= {"2px"}
          x= "5"
          y= "5"
          rx= "10"
          ry= "10"
          style= {meterContainerStyle}
          />
        <rect
          width= {width - 20}
          height= {(height - 10) * value / maxVal}
          x= "10"
          y= {(height - 10) * (1 - value / maxVal)}
          rx= "5"
          ry= "5"
          style= {innerMeterStyle}
          />
        {lines}
        <text
          x= {width / 2}
          y= {height / 2 + 10}
          style= {innerTextStyle}
          >
          {text}
        </text>
      </g>
    )
  }
}
