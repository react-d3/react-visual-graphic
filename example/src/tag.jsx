"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Tag = require('../../lib/index').Tag;

// Example
(function() {

  ReactDOM.render(
    <div>
      <svg width= {300} height= {300}>
        <Tag
          width= {200}
          height= {80}
          text= {"Hello world!"}
          color= {"green"}
          textColor= {"#FFF"}
          />
      </svg>
    </div>
  , document.getElementById('blank-tag')
  )
})()
