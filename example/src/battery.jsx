"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Battery = require('../../lib/index').Battery;

// Example
(function() {

  ReactDOM.render(
    <div>
      <svg width= {300} height= {300}>
        <Battery
          width= {200}
          height= {100}
          maxVal= {100}
          value= {30}
          color= {"green"}
          batteryColor= {"#CCC"}
          />
      </svg>
    </div>
  , document.getElementById('blank-battery')
  )
})()
