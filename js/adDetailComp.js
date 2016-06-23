/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var Invite = require('./inviteComp');

//var RegasterHeader  = require('./regasterComp').Regaster;//提取注册页的头部

var AdDetail = React.createClass({
    share:function(){
        ReactDOM.render(<Invite/>,document.querySelector('#dialog'))
    },
    render: function () {
        var css = this.css;
        var props = this.props.data;
        var imgArr = [];
        props.productImgList.forEach(function (value, index) {
            imgArr.push(<AdDetailItem img={value}/>)
        });

        //console.log(props.productImgList);
        return (
            <div style={css.container}>
                <div style={css.processContainer}>
                    <div style={css.processDiv}>
                        {props.process}
                        <p style={css.processP}>已达</p>
                    </div>
                    <div style={css.processDiv}>
                        {props.target}
                        <p style={css.processP}>目标</p>
                    </div>
                    <div style={css.processDiv}>
                        {props.timeRemianing}天
                        <p style={css.processP}>剩余时间</p>
                    </div>
                    <div style={css.processDiv}>
                        {props.onceMoney}元/次
                        <p style={css.processP}>点击量</p>
                    </div>
                </div>
                <div style={css.pcDiv}>
                    <div>
                        <img style={css.pcLogoImg} src="images/pclogo_03.png" alt=""/>
                        <p style={css.pcP}>电脑版 &gt;&gt;</p>
                        <div style={css.loginDiv}>
                            <a style={css.a} className="btn" href="#">注册</a>
                            <a style={css.a} className="btn" href="#">登陆</a>
                        </div>
                    </div>
                </div>
                <div style={css.libDiv}>
                    <img style={css.img1} src="images/lt_03.png" alt=""/>
                    图库
                    <img style={css.img2} src="images/三_03.png" alt=""/>
                </div>
                <div style={css.itemDiv}>
                    {imgArr}
                </div>
                <div>
                    <button onClick={this.share} style={css.button} className="btn btn-block">分享赚取现金</button>
                </div>
            </div>
        )
    }
});
var AdDetailItem = React.createClass({
    render: function () {
        var props = this.props;
        var css = this.css;
        return (

                <div style={css.margin}>
                    <img style={css.img} src={props.img.imgUrl} alt=""/>
                    <div style={css.adname}>
                        {props.img.adname}
                    </div>
                </div>


        )
    }
});

AdDetail.prototype.css = {
    container: {
        //background:'red'
    },
    processContainer: {
        width: '100%',
        height: '0.78rem',
        display: 'flex',
        textAlign: 'center'
    },
    processDiv: {
        flexGrow: '1',
        fontSize:'0.28rem'
    },
    processP:{
      fontSize:'0.22rem',
        color:'#999999'
    },
    pcDiv: {
        position: 'relative',
        height: '0.81rem',
        width: '100%',
        background: '#333333'
    },
    pcLogoImg: {
        width: '1.82rem',
        height: '0.65rem',
        position: 'absolute',
        left: '0.3rem',
        top: '0.14rem',
        display: 'block'
    },
    pcP: {
        fontSize: '0.25rem',
        position: 'absolute',
        left: '2.21rem',
        top: '0.3rem',
        color: '#7f7f7f'
    },
    loginDiv: {
        width: '2.53rem',
        height: '0.88rem',
        position: 'absolute',
        top: '0',
        right: '0',

        textAlign: 'center',
        lineHeight: '0.88rem'
    },
    a: {
        color: 'white',
        fontSize: '0.3rem',
    },
    libDiv: {
        position: 'relative',
        width: '100%',
        height: '0.81rem',
        background: '#cd1d1d',
        textAlign: 'center',
        fontSize: '0.3rem',
        lineHeight: '0.81rem',
        fontWeight: '800',
        color: 'white'
    },
    img1: {
        display: 'block',
        width: '0.2rem',
        height: '0.41rem',
        position: 'absolute',
        left: '0.3rem',
        top: '0.26rem'
    },
    img2: {
        display: 'block',
        width: '0.33rem',
        height: '0.29rem',
        position: 'absolute',
        right: '0.3rem',
        top: '0.28rem'
    },
    button: {
        background: '#ffda44',
        position: 'fixed',
        left: '0',
        bottom: '0'
    },
    itemDiv:{
        display:'flex',
        flexWrap:'wrap',
        padding:'0.30rem 0.09rem 1rem'
    }



};
AdDetailItem.prototype.css = {
    img: {
        width: '3.50rem',
        height: '2.06rem',
        display: 'inline-block'
    },
    margin:{
        margin:'0.08rem'
    },
    adname:{
        height:'0.44rem',
        background:'#b5b1b1',
        lineHeight:'0.44rem',
        textAlign:'center',
        color:'#000000',
        fontSize:'0.18rem'
    }


};

module.exports = AdDetail;