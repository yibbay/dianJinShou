/**
 * Created by Administrator on 2016/6/20.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Invite = require('./inviteComp');
var RegasterHeader = require('./regasterComp').Regaster;
var Tamp = require('./tampComp');

var Project = React.createClass({//产品功能组件
    inviteClick:function(){//功能点击事件//邀请好友

        ReactDOM.render( <Invite/>,document.querySelector('#dialog'));

    },
    tampClick:function(){//功能点击事件//砸金蛋
        ReactDOM.render( <RegasterHeader name="每日砸金蛋"/>,document.querySelector('#body'));
        ReactDOM.render( <Tamp />,document.querySelector('#container'));
    },
    render: function () {
        var css = this.css;
        return (
            <div style={css.container} >
                <div style={css.invite} onClick={this.inviteClick}>
                    <div style={css.imgDiv1}>
                        <img style={css.img1} src="images/yaoqinghaoyou.png" alt=""/>
                    </div>
                    <div style={css.pDiv1} id="invite">
                        <p style={css.titleSpan}>邀请新好友</p>
                        <p style={css.contentSpan1}>+3.0元</p>
                    </div>
                </div>
                <div style={css.share}>
                    <div style={css.pDiv2}>
                        <p style={css.titleSpan}>分享赚钱</p>
                        <p style={css.contentSpan2}>拉流量赚现金 奖金无上限</p>
                    </div>
                    <div style={css.imgDiv2}>
                        <img style={css.img2} src="images/fenxiangzhuanqian.png" alt=""/>
                    </div>
                </div>
                <div style={css.tamp} onClick={this.tampClick}>
                    <div style={css.pDiv2}>
                        <p style={css.titleSpan}>每日砸金蛋</p>
                        <p style={css.contentSpan3}>收益翻倍</p>
                    </div>
                    <div style={css.imgDiv2}>
                        <img style={css.img3} src="images/zadan.png" alt=""/>
                    </div>

                </div>
                <div style={css.person}>
                    <div style={css.imgDiv1}>
                        <img style={css.img4} src="images/gerenxinxi.png" alt=""/>
                    </div>

                    <div style={css.pDiv1}>
                        <p style={css.titleSpan}> 完善个人资料</p>
                        <p style={css.contentSpan4}>+2.0元</p>
                    </div>
                </div>
            </div>
        )
    }

});

Project.prototype.css = {
    container: {
        position: 'relative',
        padding: '0.22rem 0.28rem',
        marginBottom:'8rem'
    },
    invite: {
        width: '3.4rem',
        height: '1.75rem',
        position: 'absolute',
        background: '#fff'
    },
    share: {
        width: '3.4rem',
        height: '3.6rem',
        position: 'absolute',
        left: '3.85rem',
        background: '#fff'
    },
    tamp: {
        width: '3.4rem',
        height: '3.6rem',
        position: 'absolute',
        background: '#fff',
        top: '2.17rem',

    },
    person: {
        width: '3.4rem',
        height: '1.75rem',
        position: 'absolute',
        background: '#fff',
        left: '3.85rem',
        top: '4.02rem'
    },
    img1: {
        width: '0.9rem',
        height: '0.9rem'
    },
    imgDiv1:{
       position:'absolute',
        left:'0.4rem',
        top:'0.44rem'
    },
    pDiv1:{
        position:'absolute',
        left:'1.46rem',
        top:'0.44rem'
    },
    img2: {
        width: '1.54rem',
        height: '1.53rem'
    },
    imgDiv2:{
        position:'absolute',
        top:'1.7rem',
        left:'0.9rem'
    },
    pDiv2:{
        position:'absolute',
        width:'1.82rem',
        left:'0.8rem',
        top:'0.44rem',
        textAlign:'center'
    },
    img3: {
        width: '1.54rem',
        height: '1.53rem',
        display:'block'
    },
    img4: {
        width: '0.9rem',
        height: '0.9rem'
    },
    titleSpan: {
        fontSize: '0.28rem'
    },
    contentSpan1: {
        fontSize: '0.46rem'
    },
    contentSpan2: {
        fontSize: '0.3rem'
    },
    contentSpan3: {
        fontSize: '0.34rem'
    }, contentSpan4: {
        fontSize: '0.46rem'
    },


};

module.exports = Project;
