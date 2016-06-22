/**
 * Created by Administrator on 2016/6/21.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var RegasterHeader = require('./regasterComp').Regaster;

var MyList = require('./myListComp');

var PersonHeaderComp = React.createClass({//登陆成功以后个人信息头部组件
    myList:function(){//点击进入我赚的钱的明细
        //alert()
        localStorage.setItem('currentPage','myList');//本地存储下一页
        ReactDOM.render(<RegasterHeader name="我赚钱的明细"/>,document.querySelector('#body'));
        $.ajax({//取得广告list列表
            url:'json/myList.json',
            type:'get',
            //dataType:'jsonp',
            sync:false,
            success:function(data){
                //console.log(data.result)
                ReactDOM.render(<MyList data={data.result}/>,document.querySelector('#container'));
            }
        })

    },
    render: function () {
        var css = this.css;
        return (
            <div style={css.container}>
                <div style={css.shouyi}>
                    <p>
                        <img style={css.shouyiImg} src="images/zhuanqian.png" alt=""/>
                        <span >我赚的钱</span>&nbsp;
                        <p><span style={css.myMoney}>5.15</span> 元</p>
                    </p>
                </div>
                <div style={css.todayShouyi}>
                    <p>
                        <img style={css.shouyiImg} src="images/shouyi.png" alt=""/>&nbsp;
                        今日收益+5.00
                    </p>
                </div>
                <div style={css.watchList} onClick={this.myList}>
                    <img style={css.watchListImg} src="images/watchList_03.png" alt=""/>
                </div>

            </div>
        );
    }
});

PersonHeaderComp.prototype.css = {
    container: {
        width: '100%',
        height: '2.1rem',
        background: '#ffda44',
        position: 'relative'
    },
    shouyiImg: {
        width: '0.3rem',
        height: '0.32rem'
    },
    watchList:{
        position:'absolute',
        right:'0.35rem',
        top:'1.17rem',
    },
    watchListImg: {
        width: '1.21rem',
        height: '0.43rem'
    },
    shouyi:{
        position:'absolute',
        left:'0.26rem',
        top:'0.35rem',
        fontSize:'0.3rem'
    },
    todayShouyi:{
        position:'absolute',
        right:'0.26rem',
        top:'0.35rem',
        fontSize:'0.3rem'
    },
    myMoney:{
        fontSize:'0.74rem'
    }


};


module.exports = PersonHeaderComp;
