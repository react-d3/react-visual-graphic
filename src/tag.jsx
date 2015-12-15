"use strict";

import {
  default as React,
  Component
} from 'react';

export default class Tag extends Component {
  constructor (props) {
    super(props);
  }

  render() {

    const {
      width,
      height,
      text,
      color,
      textColor
    } = this.props;

    var points = `50,0 50,${height} 0,${height / 2}`;

    var tagStyle = {
      fill: color
    }

    var innerTextStyle = {
      fill: textColor,
      fontSize: "20px",
      textAnchor: "middle"
    }

    return (
      <g>
        <rect
          width= {width - 50}
          height= {height}
          x= "49"
          y= "0"
          style= {tagStyle}
          />
        <polygon
          points= {points}
          fill= {color}
        />
        <circle
          cx= "35"
          cy= {height / 2}
          r= "6"
          fill= {"#FFF"}
        />
        <text
          x= {(width - 50) / 2 + 50}
          y= {height / 2 + 5}
          style = {innerTextStyle}
        >
          {text}
        </text>
      </g>
    )
  }
}
