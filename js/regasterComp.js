/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var ReactDOM = require('react-dom');


var Regaster = React.createClass({
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
                    <span> 注册 </span>
                </header>
                <div style={css.formContainer}>


                </div>
            </div>
        )
    }
});
Regaster.prototype.css = {
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

};
module.exports = Regaster;
