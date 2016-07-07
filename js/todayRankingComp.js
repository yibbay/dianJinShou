/**
 * Created by Administrator on 2016/6/23.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var HomeFooter = require('./homeFooter');
var IScroll = require('iscroll');
//alert();
//console.log( <HomeFooter naem="kadjflajfla"/>);
var counter =0;
var TodayRanking = React.createClass({
    componentWillMount: function () {

    },

    render: function () {
        var css = this.css;
        var itemArr = [];
        var data = {
  "success": 1,
  "result": {
    "userSelf": {
      "userImg":"./images/gerenxinxi.png",
      "No": 23,
      "userName": "小草咋不上天",
      "clickNumber": 1600
    },
    "userList": [
      {
        "No": 1,
        "userName": "用户名1",
        "clickNumber": 2099,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 2,
        "userName": "用户名2",
        "clickNumber": 2098,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 3,
        "userName": "用户名3",
        "clickNumber": 2097,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 4,
        "userName": "用户名4",
        "clickNumber": 2096,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 5,
        "userName": "用户名5",
        "clickNumber": 2095,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 6,
        "userName": "用户名6",
        "clickNumber": 2094,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 7,
        "userName": "用户名7",
        "clickNumber": 2093,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 8,
        "userName": "用户名8",
        "clickNumber": 2092,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 9,
        "userName": "用户名9",
        "clickNumber": 2091,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 10,
        "userName": "用户名10",
        "clickNumber": 2090,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 11,
        "userName": "用户名11",
        "clickNumber": 2089,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 12,
        "userName": "用户名12",
        "clickNumber": 2088,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 13,
        "userName": "用户名13",
        "clickNumber": 2087,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 14,
        "userName": "用户名14",
        "clickNumber": 2086,
        "userImg": "./images/yaoqinghaoyou.png"
      },
      {
        "No": 15,
        "userName": "用户名15",
        "clickNumber": 2085,
        "userImg": "./images/yaoqinghaoyou.png"
      }
    ]
  }
};
        HomeFooter = require('./homeFooter');
        //alert(JSON.stringify(data.result.userList))
        data.result.userList.forEach(function (value) {
            itemArr.push(<TodayRankingItem {...value}/>)
            //alert(value)
        });
        return (
            <div>
                <div style={css.container}>
                    <div style={css.rankingHeader}>
                        今日榜单
                    </div>

                    <div className="wrapper">
                        <div className="scroller">
                            <div id="pullDown">
                                <span>下拉刷新…</span>
                            </div>
                            <ul>
                                <li>
                                    <div style={css.No1}>

                                        <img style={css.userImg} src={data.result.userSelf.userImg} alt=""/>
                                        <div style={css.user}>
                                            <p style={css.userName}>{data.result.userSelf.userName}</p>
                                            <p style={css.rankingNumber}>第{data.result.userSelf.No}名</p>
                                        </div>
                                        <div style={css.clickNumber}>
                                            {data.result.userSelf.clickNumber}次点击
                                        </div>

                                    </div>
                                    <div style={css.five}>
                                        每日前五名增获 <span style={css.red}>"砸金蛋"一次</span>
                                    </div>
                                </li>
                                {itemArr}
                            </ul>
                            <div id="pullUp">
                                <span>上拉加载更多…</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <HomeFooter/>
                </div>
            </div>
        )
    }
});
var TodayRankingItem = React.createClass({

    render: function () {
        var props = this.props;
        var css = this.css;
        return (
            <li >
                <div style={css.container}>
                    <div style={css.No}>
                        {props.No}
                    </div>
                    <div>
                        <img style={css.userImg} src={props.userImg} alt=""/>
                    </div>
                    <div style={css.userName}>
                        &nbsp;&nbsp;{props.userName}
                    </div>
                    <div style={css.clickNumber}>
                        {props.clickNumber}次点击
                    </div>
                </div>
            </li>
        )
    },
    componentDidMount: function () {


            new IScroll('.wrapper', {bounceEasing: 'elastic', bounceTime: 1200});
            document.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, false);


    },


});
TodayRanking.prototype.css = {
    container: {
        marginBottom: '1rem'
    },
    rankingHeader: {
        width: '100%',
        height: '0.81rem',
        background: '#ffda44',
        fontSize: '0.3rem',
        textAlign: 'center',
        lineHeight: '0.81rem'
    },
    No1: {
        width: '100%',
        height: '1.67rem',
        background: '#f5f4f0',
        position: 'relative'
    },
    five: {
        width: '100%',
        height: '0.92rem',
        fontSize: '0.26rem',
        textAlign: 'center',
        lineHeight: '0.92rem',
        background: '#ffffff'
    },
    red: {
        color: '#fe4542'
    },
    userImg: {
        width: '1.05rem',
        height: '1.05rem',
        position: 'absolute',
        top: '0.27rem',
        left: '0.84rem'
    },
    user: {
        left: '2.0rem',
        top: '0.44rem',
        position: 'absolute'
    },
    userName: {
        fontSize: '0.28rem',
        fontWeight: 'bold'
    },
    rankingNumber: {
        fontSize: '0.22rem',
        color: '#666666'
    },
    clickNumber: {
        position: 'absolute',
        right: '0.3rem',
        fontSize: '0.23rem',
        top: '0.71rem'
    }
};
TodayRankingItem.prototype.css = {
    container: {
        width: "100%",
        height: '1.5rem',
        background: '#ffffff',
        display: 'flex',
        borderTop: '0.01rem solid #ccc',
        textAlign: 'center',
        lineHeight: '1.5rem',
        position: 'relative'
    },
    No: {
        width: '0.84rem'
    },
    userImg: {
        width: '1.05rem',
        height: '1.05rem'
    },
    userName: {},
    clickNumber: {
        position: 'absolute',
        right: '0.3rem',
        top: '0'
    }

};

module.exports = TodayRanking;