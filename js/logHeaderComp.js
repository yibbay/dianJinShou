/**
 * Created by Administrator on 2016/6/20.
 */


var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('./loginComp');
var Regaster = require('./regasterComp').Regaster;
var RegasterItem = require('./regasterComp').RegasterItem;


var LogHeaderComp = React.createClass({
    handleClick:function(e){
        //console.log(e.target.id)
       //ReactDOM.unmountComponentAtNode(document.body);
        if(e.target.id==='login'){
            console.log(document.querySelector('#body'));
            ReactDOM.render(<Login/>,document.querySelector('#body'));
        }
        if(e.target.id==='regaster'){
            ReactDOM.render(<Regaster name="注册"/>,document.querySelector('#body'));
            ReactDOM.render(<RegasterItem/>,document.querySelector('#container'))
        }
    },
    render:function(){
        var css= this.css;
        return (
            <div style={css.container}>
                <div style={css.divimg1}>
                    <img style={css.img1} src="images/logo.png" alt="" />
                </div>
                <div  style={css.divimg2}>
                    <img id="regaster" style={css.img2} src="images/regaster.png" alt="" onClick={this.handleClick} />
                </div>
                <div  style={css.divimg3} >
                    <img id="login"  style={css.img3} src="images/login.png" alt="" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
});

LogHeaderComp.prototype.css={
    container:{
        width:'100%',
        height:'2.1rem',
        background:'#ffda44',
        display:'flex',
       position:'relative'
    },
    divimg1:{

        position:'absolute',
        top:'30%',
        left:'0.47rem'
    },
    divimg2:{

        position:'absolute',
        top:'20%',
        left:'50%'
    },
    divimg3:{

        position:'absolute',
        top:'20%',
        left:'70%'
    },
    img1:{
        width:'2.92rem',
        height:'1.23rem',
    },
    img2:{
        width:'1.21rem',
        height:'0.42rem',
    },
    img3:{
        width:'1.21rem',
        height:'0.42rem',
    }
};


module.exports=LogHeaderComp;