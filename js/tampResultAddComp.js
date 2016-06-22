/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');

var TampResultAdd = React.createClass({//获得加息组件

    render: function () {
        var css = this.css;
        return (

            <div style={css.container}>
                <div>
                    <p style={css.p1}>
                        恭喜中奖 获得加息
                    </p>
                    <p style={css.p2}>
                        今日赚钱+0.6%
                    </p>
                </div>
                <div style={css.imgDiv}>
                    <img style={css.danImg} src="images/jinbi.png" alt=""/>

                </div>

            </div>
        )
    }
});

TampResultAdd.prototype.css = {
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
        width: '4.14rem',
        height: '2.58rem'
    },

    jiaxi: {
        marginTop: '0.45rem',
        color: 'white',
        fontSize: '0.33rem',
        fontWeight: '800'
    },

};

module.exports = TampResultAdd;