/**
 * Created by Administrator on 2016/6/20.
 */
//通用底部组件
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var RegasterHeader  = require('./regasterComp').Regaster;//提取注册页的头部

var LogHeaderComp = require('./logHeaderComp.js');


var Layout = require('./layoutComp.js');





var AdList = require('./adListComp');//广告清单列表
var TodayRanking = require('./todayRankingComp');
var PersonData = require('./personDataComp');


var HomeFooter = React.createClass({
    /************点击进入首页*****************/
    /************点击进入首页*****************/
    inHome:function(){

        localStorage.setItem('currentPage','home');
        Layout = require('./layoutComp.js');
        LogHeaderComp = require('./logHeaderComp.js');
        ReactDOM.render(<Layout/>,document.querySelector('#body'));
        ReactDOM.render(<LogHeaderComp />,document.querySelector('#header'));

    },


    /************点击进入广告清单列表*****************/
    /************点击进入广告清单列表*****************/
    earnClick:function(){
        localStorage.setItem('currentPage','adList');
        ReactDOM.render(<RegasterHeader name="分享赚钱"/>,document.querySelector('#body'));
//      $.ajax({
//         url:'./json/adList.json',
//          type:'get',
//          success:function(data){
	var data ={
  "success": 1,
  "result": [
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称1",
      "process": "51%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称2",
      "process": "82%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称3",
      "process": "43%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称4",
      "process": "84%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称5",
      "process": "85%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称6",
      "process": "86%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称7",
      "process": "77%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称8",
      "process": "28%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称9",
      "process": "19%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}
      ]
    },
    {
      "adImgUrl": "https://img.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i4/TB1vGO5IFXXXXb4XXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg",
      "adName": "广告名称10",
      "process": "80%",
      "target": 10000,
      "timeRemianing": 10,
      "onceMoney": 0.5,
      "productImgList": [
        {"adname":"SUV1","imgUrl":"https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/TB1l1RHJFXXXXXDXVXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"},
        {"adname":"SUV2","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2jtacepXXXXcBXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV3","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i2\/451135386\/TB2LtilepXXXXXyXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV4","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2a.ioepXXXXXEXpXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"},
        {"adname":"SUV5","imgUrl":"https:\/\/img.alicdn.com\/imgextra\/i1\/451135386\/TB2wpaxepXXXXbIXXXXXXXXXXXX_!!451135386.jpg_60x60q90.jpg"}      ]
    }
  ]
};
                ReactDOM.render(<AdList data={data.result}/>,document.querySelector('#container'));
                //console.log(data.result)
//          }
//      });

    },
    /************点击进入榜单*****************/
    /************点击进入榜单*****************/
    ranking:function(){
    	//alert('')
        localStorage.setItem('currentPage','ranking');
//      $.ajax({
//         url:'./json/todayRanking.json',
//          type:'get',
//          success:function(data){
                //alert(data);
                ReactDOM.render(<TodayRanking />,document.querySelector('#body'));

//          }
//      });
    },
    /************点击进入个人资料*****************/
    /************点击进入个人资料*****************/
    personData:function(){
        localStorage.setItem('currentPage','personData');
        $.ajax({
           type:'get',
            url:'./json/pesonData.json',
            success:function(data){
                //console.log(data);
                ReactDOM.render(<PersonData {...data.result}/>,document.querySelector('#body'))

            }
        });
    },

    render:function(){
        var css =this.css;
        return (
          <div style={css.container}>
              <div style={css.item} onClick={this.inHome}>
                  <p>
                      <img style={css.img} src="images/shouye.png" alt=""/>
                  </p>
                  <p>首页</p>
              </div>
              <div style={css.item} onClick={this.earnClick}>
                  <p>
                      <img style={css.img} src="images/qianbao.png" alt=""/>
                  </p>
                  <p>赚钱</p>
              </div>
              <div style={css.item} onClick={this.ranking}>
                  <p>
                      <img style={css.img} src="images/bangdan.png" alt=""/>
                  </p>
                  <p>榜单</p>
              </div>
              <div style={css.item} onClick={this.personData}>
                  <p>
                      <img style={css.img} src="images/wode.png" alt=""/>
                  </p>
                  <p>我的</p>
              </div>
          </div>
        );
    }

});
HomeFooter.prototype.css={
    container:{
        display:'flex',
        flexDirection:'row',
        background:'#ffda44',
        fontSize:'0.24rem',
        color:'#333333',
        fontWeight:'bold',
        position:'fixed',
        left:'0',
        bottom:'0',
        width:'100%',
        zIndex:'999'
    },
    item:{
        width:'25%',
        height:'1rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        display:'block',
        width:'0.48rem',
        height:'0.46rem'
    }
};

module.exports=HomeFooter;