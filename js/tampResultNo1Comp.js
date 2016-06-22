/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');

var TampResultNo1 = React.createClass({

    render: function () {
        var css = this.css;
        return (

            <div style={css.container}>
                <div>
                    <p style={css.p1}>
                        恭喜你是第1名，
                    </p>
                    <p style={css.p2}>
                        获得额外的砸蛋机会！
                    </p>
                </div>
                <div style={css.imgDiv}>
                    <img style={css.danImg} src="images/jindan.png" alt=""/>
                    <img style={css.chuiImg} src="images/chuaizi.png" alt=""/>
                </div>
                <a style={css.a} className="btn btn-block">关闭</a>
            </div>
        )
    }
});

TampResultNo1.prototype.css = {
    container: {
        padding: '0.7rem 0.6rem 0',
        textAlign: 'center',
        position:'fixed',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.8)',
        top: '0',
        left: '0',
        zIndex: '999'
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
        padding:'0',
        marginTop: '0.4rem',
        background: '#ffc600',
        lineHeight:'0.64rem',
        height: '0.64rem',
        color: 'white',
        fontSize: '0.35rem',
        fontWeight: '800',
    },
    totalMan: {
        color: '#ffcc00'
    }


};

module.exports = TampResultNo1;