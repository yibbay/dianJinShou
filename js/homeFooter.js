/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var RegasterHeader  = require('./regasterComp').Regaster;//提取注册页的头部

var AdList = require('./adListComp');//广告清单列表
var TodayRanking = require('./todayRankingComp');
var PersonData = require('./personDataComp');


var HomeFooter = React.createClass({
    /************点击进入广告清单列表*****************/
    /************点击进入广告清单列表*****************/
    earnClick:function(){
        ReactDOM.render(<RegasterHeader name="分享赚钱"/>,document.querySelector('#body'));
        $.ajax({
           url:'./json/adList.json',
            type:'get',
            success:function(data){
                ReactDOM.render(<AdList data={data.result}/>,document.querySelector('#container'));
                //console.log(data.result)
            }
        });

    },
    /************点击进入榜单*****************/
    /************点击进入榜单*****************/
    ranking:function(){
        $.ajax({
           url:'./json/todayRanking.json',
            type:'get',
            success:function(data){
                //console.log(data);
                ReactDOM.render(<TodayRanking data={data.result}/>,document.querySelector('#body'));

            }
        });
    },
    /************点击进入个人资料*****************/
    /************点击进入个人资料*****************/
    personData:function(){

        ReactDOM.render(<PersonData/>,document.querySelector('#body'))
    },

    render:function(){
        var css =this.css;
        return (
          <div style={css.container}>
              <div style={css.item}>
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
        width:'100%'
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