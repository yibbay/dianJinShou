/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var LogHeaderComp = require('./logHeaderComp.js');


var Layout = require('./layoutComp.js');


ReactDOM.render(<Layout/>,document.querySelector('#body'));
ReactDOM.render(<LogHeaderComp />,document.querySelector('#header'));


//在入口引入子组件是OK的



