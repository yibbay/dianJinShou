/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('./layoutComp');
var Regaster = require('./regasterComp').Regaster;//取注册页面的状况

var Login = React.createClass({//登陆页布局
    handleClick: function () {
        Layout = require('./layoutComp');
        //console.log(<Layout name="test"/>);

        ReactDOM.render(<Layout/>, document.querySelector('#body'));
    },
    tapFindPassword: function () {//点击找回密码
        //alert();
        ReactDOM.render(<Regaster name="找回密码"/>,document.querySelector('#body'));
        ReactDOM.render(<FindPassword/>,document.querySelector('#container'));
    },

    render: function () {
        var css = this.css;
        return (
            <div>
                <header style={css.header}>
                    <img onClick={this.handleClick} style={css.headerImg} src="images/zuojiantou.png" alt=""/>
                    <span> 账号登陆 </span>
                </header>
                <div style={css.formContainer}>

                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="手机号/用户名/邮箱"/>
                    </div>
                    <div className="form-group" style={css.marginDiv}>
                        <div style={css.relative}>
                            <input className="form-control" type="password" placeholder="登录密码"/>
                            <img style={css.yangjingimg2} src="images/yanjing2.png" alt=""/>
                            <img style={css.yangjingimg} src="images/yanjing.png" alt=""/>
                        </div>
                    </div>

                    <button style={css.marginDiv} className="btn btn-block yellow">登陆</button>

                    <div style={css.marginDiv}>
                        <span onClick={this.tapFindPassword}>忘记密码</span> &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp;
                        <span>快速注册</span>
                    </div>
                </div>
            </div>
        )
    }
});
var FindPassword = React.createClass({
    nextButton:function(){//点击 下一步

        ReactDOM.render(<Regaster name="安全校验"/>,document.querySelector('#body'));
        ReactDOM.render(<SafeCheck />,document.querySelector('#container'));

    },
    render:function(){
        var css = this.css;
        return (
            <div>
                <div className="form-group">
                    <input style={css.input} className="form-control" type="text" placeholder="手机号码/登录名/邮箱"/>
                </div>
                <button style={css.button} className="btn btn-block" onClick={this.nextButton}>下一步</button>
            </div>
        )
    }
});
var SafeCheck = React.createClass({
    setNewPassword:function(){//点击下一步设置新密码
        //alert()
        ReactDOM.render(<Regaster name="设置新密码"/>,document.querySelector('#body'));
        ReactDOM.render(<SetNewPassword/>,document.querySelector('#container'));

    },
    render:function(){
        var css =this.css;
        return (
            <div>
                <div style={css.phoneNumber}>
                    请输入手机号189####4568收到的短信校验码
                </div>
                <div style={css.inputDiv} className="form-group">
                    <input style={css.input} className="form-control" type="text" placeholder="短信校验码"/>
                    <p style={css.inputP}> |  重新发送</p>
                </div>

                <button style={css.button} className="btn btn-block" onClick={this.setNewPassword}>下一步</button>

            </div>
        )
    }
});
var SetNewPassword = React.createClass({//设置新密码组件
    render:function(){
        var css = this.css;
        return (
            <div>
                <div className="form-group">
                    <input style={css.input} className="form-control" type="text" placeholder="输入新密码"/>
                </div>
                <div className="form-group">
                    <input style={css.input} className="form-control" type="text" placeholder="确认新密码"/>
                </div>
                <p>
                    密码由6-12位英文字母、数字或符号组成
                </p>
                <button style={css.button} className="btn btn-block">下一步</button>
            </div>
        )
    }
});
Login.prototype.css = {//登陆布局样式
    container: {},
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
    formContainer: {
        padding: '0.4rem 0.31rem'
    },
    marginDiv: {
        marginTop: '0.4rem',
        textAlign: 'center'
    },
    yangjingimg: {
        display: 'block',
        position: 'absolute',
        right: '0.12rem',
        top: '25%',
        width: '0.37rem',
        height: '0.22rem'
    },
    yangjingimg2: {
        display: 'block',
        position: 'absolute',
        right: '10%',
        top: '25%',
        width: '0.37rem',
        height: '0.22rem'
    }
};

FindPassword.prototype.css ={//找回密码框样式
    input:{
        height:'0.64rem'
    },
    button:{
        height:'0.64rem',
        background:'#ffda44'
    }
};
SafeCheck.prototype.css={//安全校验框样式

    button: {
        background: '#ffda44',
        height:'0.64rem'
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
SetNewPassword.prototype.css={
    input:{
        height:'0.64rem'
    },
    button:{
        height:'0.64rem',
        marginTop:'0.3rem',
        background: '#ffda44'
    }
}
module.exports = Login;
