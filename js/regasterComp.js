/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('./layoutComp');
var LogHeader = require('./logHeaderComp');


var Regaster = React.createClass({
    handleClick: function (e) {//返回主页
        document.body.style.background = '#eee';
       console.log(e.target.nextSibling.innerHTML);
        Layout = require('./layoutComp');
        ReactDOM.render(<Layout/>, document.querySelector('#body'));
        LogHeader = require('./logHeaderComp');
        ReactDOM.render(<LogHeader/>, document.querySelector('#header'));
    },
    render: function () {
        var css = this.css;
        return (
            <div>
                <header style={css.header}>
                    <img onClick={this.handleClick} style={css.headerImg} src="images/zuojiantou.png" alt=""/>
                    <span>{this.props.name}</span>
                </header>
                <div style={css.container} id="container">

                </div>
            </div>
        )
    }
});

var RegasterItem = React.createClass({

    radio: function (e) {//点击单选框事件
        console.log(e.target.className);
        if (e.target.className == 'radioDiv1') {

        }
        if (e.target.className == 'radioDiv2') {

        }
        return false;
    },
    handleClick: function () {//点击下一步事件
        //alert();
        ReactDOM.render(<RegasterItem2/>, document.querySelector('#container'))
    },
    render: function () {
        var css = this.css;
        return (
            <div >
                <div style={css.inputDiv1} onClick={this.radio} className="radio1">
                    <label className="radio1">
                        <input className="radio1" id="zuan-qian" style={css.inputhidden} name="way" type="radio"/>
                        <img className="radio1" id="zuan-qian-icon" style={css.inputimg} src="images/duigou3.png"
                             alt=""/>
                        &nbsp;我要赚钱
                    </label>
                </div>
                <div className="radio2" style={css.inputDiv2} onClick={this.radio}>
                    <label className="radio2">
                        <input className="radio2" id="liu-liang" style={css.inputhidden} name="way" type="radio"/>
                        <img className="radio2" id="liu-liang-img" style={css.inputimg} src="images/duigou3.png"
                             alt=""/>
                        &nbsp;我要流量
                    </label>
                </div>
                <div className="form-group" style={css.inputDiv3}>
                    <input type="text" className="form-control" placeholder="请输入手机号码"/>
                </div>
                <button style={css.button} className="btn btn-block" onClick={this.handleClick}>下一步</button>
                <p style={css.p}>
                    注册即视为同意点金手<span style={css.span}>平台服务协议。</span>
                </p>
            </div>
        )

    }
});
var RegasterItem2 = React.createClass({

    handleClick: function () {//点击下一步事件
        //alert();
        //ReactDOM.render()
    },
    render: function () {
        var css = this.css;
        return (
            <div >
                <div style={css.phoneNumber}>
                    请输入手机号189####4568收到的短信校验码
                </div>
                <div style={css.inputDiv} className="form-group">
                    <input style={css.input} className="form-control" type="text" placeholder="短信校验码"/>
                    <p style={css.inputP}> |  重新发送</p>
                </div>

                <button style={css.button} className="btn btn-block" onClick={this.handleClick}>完成</button>
                <p style={css.p}>
                    注册即视为同意点金手<span style={css.span}>  平台服务协议。</span>
                </p>
            </div>
        )

    }
});

Regaster.prototype.css = {
    autoHeight: {
        height: '0.7rem'
    },
    relative: {
        position: 'relative'
    },
    header: {
        height: '0.81rem',
        background: '#ffda44',
        textAlign: 'center',
        lineHeight: '0.81rem',
        fontWeight: 'bold',
        fontSize: '0.4rem',
        color: '#333333',
        position: 'relative'
    },
    headerImg: {
        width: '0.2rem',
        height: '0.35rem',
        position: 'absolute',
        display: 'block',
        left: '0.3rem',
        top: '0.2rem'
    },
    container: {
        padding: '0.4rem 0.31rem',
        position: 'relative'
    },

};
RegasterItem.prototype.css = {
    inputimg: {
        width: '0.47rem',
        height: '0.47rem'
    },
    inputhidden: {
        display: 'none'
    },
    inputDiv1: {
        position: 'absolute',
        left: '1.28rem',
        top: '0.65rem'
    },
    inputDiv2: {
        position: 'absolute',
        left: '4.18rem',
        top: '0.65rem'
    },
    inputDiv3: {
        marginTop: '1.1rem'
    },
    button: {
        background: '#ffda44',
        height:'0.64rem'
    },
    p: {
        color: '#999999',
        fontSize: '0.25rem',
        marginTop: '0.32rem'
    },
    span: {
        color: '#272525',
        textDecoration: 'underline'
    }
};
RegasterItem2.prototype.css = {
    button: {
        background: '#ffda44',
        height:'0.64rem'
    },
    p: {
        color: '#999999',
        fontSize: '0.25rem',
        marginTop: '0.32rem'
    },
    span: {
        color: '#272525',
        textDecoration: 'underline'
    },
    input:{
      height:'0.64rem'
    },
    inputDiv:{
        position:'relative',
        marginTop:'0.28rem'
    },
    inputP:{
        position:'absolute',
        right:'10px',
        top:'20%'
    },
    phoneNumber:{
        textAlign:'center',
        fontSize:'0.24rem'
    }
};
module.exports = {
    Regaster: Regaster,
    RegasterItem: RegasterItem
};
