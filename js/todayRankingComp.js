/**
 * Created by Administrator on 2016/6/23.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var HomeFooter = require('./homeFooter');
//alert();
//console.log( <HomeFooter naem="kadjflajfla"/>);

var TodayRanking = React.createClass({
    componentWillMount: function () {

    },
    render: function () {
        var css = this.css;
        var itemArr = [];
        var data = this.props.data;
        HomeFooter = require('./homeFooter');
        data.userList.forEach(function (value) {
            itemArr.push(<TodayRankingItem {...value}/>)
        });
        return (
            <div>
                <div style={css.container}>
                    <div style={css.rankingHeader}>
                        今日榜单
                    </div>
                    <div style={css.No1}>

                        <img style={css.userImg} src={data.userSelf.userImg} alt=""/>
                        <div style={css.user}>
                            <p style={css.userName}>{data.userSelf.userName}</p>
                            <p style={css.rankingNumber}>第{data.userSelf.No}名</p>
                        </div>
                        <div style={css.clickNumber}>
                            {data.userSelf.clickNumber}次点击
                        </div>

                    </div>
                    <div style={css.five}>
                        每日前五名增获 <span style={css.red}>"砸金蛋"一次</span>
                    </div>
                    <div>
                        {itemArr}
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
        )
    }

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
        position:'relative'
    },
    five: {
        width: '100%',
        height: '0.92rem',
        fontSize: '0.26rem',
        textAlign: 'center',
        lineHeight: '0.92rem',
        background:'#ffffff'
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
    user:{
        left:'2.0rem',
        top:'0.44rem',
        position:'absolute'
    },
    userName:{
        fontSize:'0.28rem',
        fontWeight:'bold'
    },
    rankingNumber:{
        fontSize:'0.22rem',
        color:'#666666'
    },
    clickNumber:{
        position:'absolute',
        right:'0.3rem',
        fontSize:'0.23rem',
        top:'0.71rem'
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

}

module.exports = TodayRanking;