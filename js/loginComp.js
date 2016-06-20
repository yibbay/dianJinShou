/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var ReactDOM = require('react-dom');


var Login = React.createClass({
    handleClick:function(){
        console.log(<Layout/>);
        //ReactDOM.unmountComponentAtNode(document.body);
        var Layout =require('./layoutComp');

        ReactDOM.render(<Layout/>,document.body);
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
                        <span>忘记密码</span> &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; <span>快速注册</span>
                    </div>
                </div>
            </div>
        )
    }
});
Login.prototype.css = {
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
        position:'absolute',
        display:'block',
        left:'0.3rem',
        top:'0.2rem'
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
module.exports = Login;
