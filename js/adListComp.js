/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var RegasterHeader = require('./regasterComp').Regaster;//引入注册页头部模块
var AdDetail = require('./adDetailComp');
var HomeFooter = require('./homeFooter');
var IScroll = require('iscroll');

var AdList = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.data
        }
    }
    ,
    render: function () {
        document.body.style.background = '#fafafa';
        var css = this.css;
        //console.log(this.state.data);
        var data = this.state.data;
        HomeFooter = require('./homeFooter');
        var jsxArr = [];
        data.forEach(function (value, index) {
            jsxArr.push(<AdListItem data={value}/>)
        });
        return (
            <div>
                <div>
                    <div className="wrapper" style={css.top}>
                        <div className="scroller" style={css.container}>
                            <ul>
                                <li style={css.liHeight}>
                                    <div style={css.navContainer}>
                                        <div style={css.div}>
                                            最新优先
                                        </div>
                                        <div style={css.div}>
                                            高收益优先
                                        </div>
                                        <div style={css.div}>
                                            行业分类
                                        </div>
                                    </div>
                                    <div style={css.tabContainer}>
                                        <div style={css.tab}>
                                        </div>
                                    </div>
                                </li>
                                {jsxArr}
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <HomeFooter/>
                </div>
            </div>
        )
    }

});

var AdListItem = React.createClass({
    adDetail: function () {//点击进入广告详情页adDetail
        //alert();
        ReactDOM.render(<RegasterHeader name={this.props.data.adName}/>, document.querySelector('#body'));
        var container = document.querySelector('#container');
        container.style.padding = '0';
        ReactDOM.render(<AdDetail data={this.props.data}/>, container);


    },
    componentDidMount: function () {

        new IScroll('.wrapper', {bounceEasing: 'elastic', bounceTime: 1200});
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
    },
    render: function () {
        var props = this.props.data;
        var css = this.css;
        css.process.width = props.process;
        return (
            <li>
                <div style={css.imgContainer}>
                    <div>
                        <img style={css.img} src={props.adImgUrl} alt=""/>
                    </div>
                    <div style={css.processContainer}>
                        <p>{props.adName}</p>
                        <div className="progress" style={css.processDiv}>
                            <div style={css.process} className="progress-bar" role="progressbar" aria-valuenow="60"
                                 aria-valuemin="0" aria-valuemax="100">

                            </div>
                        </div>
                        <div style={css.processNav}>
                            <div style={css.wenziDiv}>
                                {props.process}
                                <p style={css.wenzi}>
                                    已达
                                </p>
                            </div>
                            <div style={css.wenziDiv}>
                                {props.target}
                                <p style={css.wenzi}>
                                    目标
                                </p>
                            </div>
                            <div style={css.wenziDiv}>
                                {props.timeRemianing}天
                                <p style={css.wenzi}>
                                    剩余时间
                                </p>
                            </div>
                            <div style={css.wenziDiv}>
                                {props.onceMoney}元/次
                                <p style={css.wenzi}>
                                    流量佣金
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={this.adDetail} style={css.button} className="btn btn-block">分享活动赚取佣金</button>

            </li>
        )
    }
});
AdListItem.prototype.css = {
    imgContainer: {
        display: 'flex',
        marginTop: '0.28rem',
        height: '1.82rem'
    },
    img: {
        width: '2.22rem',
        height: '1.42rem'
    },
    processDiv: {
        height: '0.1rem',
        margin: '0.28rem 0 0.1rem 0',
    },
    process: {
        background: '#ffda44',
        height: '0.1rem',
        width: '60%'
    },
    processContainer: {
        width: '6.66rem',
        height: '1.40rem',
        //background:'blue'
        paddingLeft: '0.12rem'
    },
    processNav: {
        height: '0.46',
        width: '100%',
        display: 'flex',
        fontSize: '0.22rem',
        textAlign: 'center',

    },
    wenzi: {
        fontSize: '0.14rem',
        color: '#adadad'
    },
    wenziDiv: {
        flexGrow: '1'
    },
    button: {
        background: '#ffda44',
        margin: '0.15rem 0'
    }


};
AdList.prototype.css = {
    top: {
        top: '0',

    },
    liHeight: {},
    container: {
        fontSize: '0.28rem',
        padding: '0 0.3rem',
        marginBottom: '1rem'
    },

    navContainer: {
        display: 'flex',
        height: '0.85rem',
        textAlign: 'center',
        lineHeight: '0.85rem'
    },
    div: {
        flexGrow: '1'
    },
    tabContainer: {
        position: 'relative',
        width: '100%',
        height: '0.03rem',
        background: '#ccc',
        marginTop: '0.02rem'
    },
    tab: {
        position: 'absolute',
        width: '33.33%',
        background: '#fe4040',
        left: '0',
        bottom: '0',
        height: '0.03rem',
    }

};

module.exports = AdList;
