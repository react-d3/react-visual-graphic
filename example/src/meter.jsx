"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Meter = require('../../lib/index').Meter;

// Example
(function() {

  ReactDOM.render(
    <div>
      <svg width= {300} height= {400}>
        <Meter
          width= {150}
          height= {400}
          maxVal= {100}
          value= {30}
          color= {"blue"}
          meterColor= {"#CCC"}
          text= {"30%"}
          />
      </svg>
    </div>
  , document.getElementById('blank-meter')
  )
})()
