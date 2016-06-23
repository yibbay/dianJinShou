/**
 * Created by Administrator on 2016/6/23.
 */

var React = require('react');

var ReactDOM = require('react-dom');
var HomeFooter = require('./homeFooter');
var $ =require('jquery');

var RegasterHeader = require('./regasterComp').Regaster;

var MyShareList  =require('./myShareList');
//console.log(<HomeFooter name="testaaa"/>)
var PersonData = React.createClass({
    handleClick: function () {//点击进入做过的任务列表
        ReactDOM.render(<RegasterHeader name="做过的任务"/>,document.querySelector('#body'));
        $.ajax({
            url:'./json/adList.json',
            success:function(data){
                //console.log(data)
                ReactDOM.render(<MyShareList data={data.result}/>,document.querySelector('#container'));

            }
        })

    },
    render: function () {
        HomeFooter = require('./homeFooter');
        var props = this.props;
        var css = this.css;
        return (
            <div>
                <div>
                    <div style={css.headerDiv}>
                        <img style={css.userimg} src={props.userImgUrl} alt=""/>
                        <div style={css.headerWenziDiv}>
                            <p>{props.userName}</p>
                            <p style={css.wanshan}>完善个人资料，<span style={css.add2}>+2元现金奖励</span></p>
                        </div>
                    </div>
                    <div style={css.EarnDiv}>
                        <div style={css.myEarnDiv}>
                            <p>我赚的钱（元）</p>
                            <p style={css.myEarn}>{props.userEarn}</p>
                            <p>我要取现&nbsp;&gt;</p>
                        </div>
                        <div style={css.todayEarnDiv}>
                            <p>今日收益（元）</p>
                            <p style={css.myEarn}>{props.todayEarn}</p>
                            <p>查看明细&nbsp;&gt;</p>
                        </div>
                    </div>
                    <div >
                        <div style={css.serve} onClick={this.handleClick}>
                            <img style={css.serveimg} src="images/zuoguorenwu.png" alt=""/>
                            做过的任务
                        </div>
                        <div style={css.serve}>
                            <img style={css.serveimg} src="images/kefu.png" alt=""/>
                            客户服务与帮助
                        </div>
                        <div style={css.serve}>
                            <img style={css.serveimg} src="images/shezhi.png" alt=""/>
                            设置
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
PersonData.prototype.css = {
    headerDiv: {
        width: '100%',
        height: '1.94rem',
        background: '#f2f2f2',
        position: 'relative'
    },
    userimg: {
        width: '1.06rem',
        height: '1.06rem',
        position: 'absolute',
        left: '0.6rem',
        top: '0.42rem'
    },
    headerWenziDiv: {
        position: 'absolute',
        left: '1.72rem',
        top: '0.56rem',
        fontSize: '0.29rem',
        fontWeight: 'bold'
    },
    wanshan: {
        fontSize: '0.24rem',
    },
    add2: {
        textDecoration: 'underline'
    },
    EarnDiv: {
        width: '100%',
        height: '2.1rem',
        background: '#ffda44',
        position: 'relative'
    },
    myEarnDiv: {
        fontSize: '0.28rem',
        position: 'absolute',
        left: '0.9rem',
        top: '0.33rem'
    },
    myEarn: {
        fontSize: '0.58rem'
    },
    todayEarnDiv: {
        fontSize: '0.28rem',
        position: 'absolute',
        left: '4.66rem',
        top: '0.33rem'
    },
    serve: {
        width: '100%',
        height: '1.1rem',
        borderBottom: '0.01rem solid #ccc',
        textIndent: '0.96rem',
        lineHeight: '1.1rem',
        fontSize: '0.27rem',
        position: 'relative'
    },
    serveimg: {
        width: '0.32rem',
        height: '0.32rem',
        position: 'absolute',
        left: '0.34rem',
        top: '0.42rem'
    }


};

module.exports = PersonData;