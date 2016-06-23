/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var $ =require('jquery');

var LogHeaderComp = require('./logHeaderComp.js');
var Layout = require('./layoutComp.js');

var RegasterHeader = require('./regasterComp').Regaster;
var TodayRanking = require('./todayRankingComp');

var AdList = require('./adListComp');

var PersonData = require('./personDataComp');

var currentPage = localStorage.getItem('currentPage');
//alert(currentPage)
if(currentPage==''||currentPage==null||currentPage=='undefined'){
    currentPage='home';
}
switch (currentPage) {
    case 'home':
        ReactDOM.render(<Layout/>, document.querySelector('#body'));
        ReactDOM.render(<LogHeaderComp />, document.querySelector('#header'));
        break;
    case 'adList':
        ReactDOM.render(<RegasterHeader name="分享赚钱"/>,document.querySelector('#body'));
        $.ajax({
            url:'./json/adList.json',
            type:'get',
            success:function(data){
                ReactDOM.render(<AdList data={data.result}/>,document.querySelector('#container'));
                //console.log(data.result)
            }
        });
        break;
    case 'ranking':
        $.ajax({
            url:'./json/todayRanking.json',
            type:'get',
            success:function(data){
                //console.log(data);
                ReactDOM.render(<TodayRanking data={data.result}/>,document.querySelector('#body'));
            }
        });
        break;
    case 'personData':
        $.ajax({
            type:'get',
            url:'./json/pesonData.json',
            success:function(data){
                //console.log(data);
                ReactDOM.render(<PersonData {...data.result}/>,document.querySelector('#body'))
            }
        });
        break;
}






