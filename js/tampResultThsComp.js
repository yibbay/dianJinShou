/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');

var TampResult = React.createClass({

    render: function () {
        var css = this.css;
        return (

            <div style={css.container}>
                <div>
                    <p style={css.p1}>
                        谢谢参与
                    </p>
                    <p style={css.p2}>
                        来日再战
                    </p>
                </div>
                <div style={css.imgDiv}>
                    <img style={css.danImg} src="images/chabei.png" alt=""/>

                </div>
                <a style={css.a} className="btn btn-block">活动规则</a>

                <div style={css.jiaxi}>
                    每天仅3次机会，让朋友帮你砸金蛋获得加息
                </div>
            </div>
        )
    }
});

TampResult.prototype.css = {
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
        padding:'0',
        lineHeight:'0.64rem',
        fontSize: '0.35rem',
        fontWeight: '800',
    },
    totalMan: {
        color: '#ffcc00'
    }


};

module.exports = TampResult;