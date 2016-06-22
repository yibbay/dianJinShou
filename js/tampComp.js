/**
 * Created by Administrator on 2016/6/21.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var $ = require('jquery');
var TampResultThs = require('./tampResultThsComp');//谢谢参与
var TampResultAdd = require('./tampResultAddComp');//获得加息
var TampResultNo1 = require('./tampResultNo1Comp');//第一名

var Tamp = React.createClass({
    tampDan: function () {//点击砸蛋后
        var random = Math.floor(Math.random() * 3 + 1);
        //var arr = [{
        //    success: 1,
        //    result: [{
        //        title: '谢谢参与来日再战',
        //        subhead:'',
        //        detail: '每天仅3次机会，让朋友帮你砸金蛋获得加息',
        //        imgUrl: 'images/chabei.png'
        //    },
        //        {
        //            title: '恭喜中奖 获得加息 ',
        //            subhead:'今日赚钱+0.6%',
        //            detail: '每天仅3次机会，让朋友帮你砸金蛋获得加息',
        //            imgUrl: 'images/jinbi.png'
        //        }
        //    ]
        //}];
        console.log(random);
        switch (random) {
            case 1:
                ReactDOM.render(<TampResultThs />, document.querySelector('#container'));
                break;
            case 2:
                ReactDOM.render(<TampResultAdd />, document.querySelector('#container'));

                break;
            case 3:
                ReactDOM.render(<TampResultNo1 />, document.querySelector('#dialog'));
                break;
        }
    },
    render: function () {
        document.body.style.background = '#e94838';

        var css = this.css;
        return (
            <div style={css.container}>
                <div>
                    <p style={css.p1}>
                        快来砸金蛋 有加息哦
                    </p>
                    <p style={css.p2}>
                        当日赚钱最高可+10%
                    </p>
                </div>
                <div style={css.imgDiv} onClick={this.tampDan}>
                    <img style={css.danImg} src="images/jindan.png" alt=""/>
                    <img style={css.chuiImg} src="images/chuaizi.png" alt=""/>
                </div>
                <div style={css.jiaxi}>
                    今日已有<span style={css.totalMan}>124758</span>位网友获得加息！
                </div>
                <a style={css.a} className="btn btn-block">活动规则</a>
            </div>
        )
    }
});
Tamp.prototype.css = {
    container: {
        padding: '0.7rem 0.6rem 0',
        textAlign: 'center'
    },
    p1: {
        fontSize: '0.52rem',
        fontWeight: '800',
        color: '#fada44'
    },
    p2: {
        fontSize: '0.42rem',
        fontWeight: '800',
        color: '#fada44'
    },
    imgDiv: {
        position: 'relative',
        marginTop: '0.75rem'
    },
    danImg: {
        width: '3.39rem',
        height: '3.82rem'
    },
    chuiImg: {
        position: 'absolute',
        width: '1.42rem',
        height: '1.39rem',
        right: '0.1rem',
        top: '0.05rem'
    },
    jiaxi: {
        marginTop: '0.45rem',
        color: 'white',
        fontSize: '0.33rem',
        fontWeight: '800'
    },
    a: {
        marginTop: '0.4rem',
        background: '#c62717',
        height: '0.64rem',
        color: 'white',
        fontSize: '0.35rem',
        fontWeight: '800',
        padding:'0',
        lineHeight:'0.64rem',
    },
    totalMan: {
        color: '#ffcc00'
    }


};

module.exports = Tamp;