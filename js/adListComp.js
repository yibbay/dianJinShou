/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');

var AdList = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.data
        }
    }
    ,
    render: function () {
        var css = this.css;
        console.log(this.state.data);
        var data = this.state.data;
        var jsxArr =[];
        data.forEach(function(value,index){
           jsxArr.push(<AdListItem {...value}/>)
        });
        return (
            <div>

                <div style={css.navContainer}>
                    <div style={css.div}>
                        最新优先
                    </div>
                    <div style={css.div}>
                        高收益优先
                    </div>
                    <div style={css.div}>
                        行业分类
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>


                </div>
                <div style={css.tabContainer}>
                    <div style={css.tab}>
                    </div>
                </div>
                <div>
                    {jsxArr}
                </div>
            </div>
        )
    }

});

var AdListItem = React.createClass({
    render: function () {
        var props =this.props;
        var css= this.css;
        return (
            <div>
                <div style={css.imgContainer}>
                    <div>
                        <img style={css.img} src={props.adImgUrl} alt=""/>
                    </div>
                    <div style={css.processContainer}>
                        <p>{props.adName}</p>
                        <div className="progress" style={css.processDiv}>
                            <div style={css.process} className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" >

                            </div>
                        </div>
                        <div style={css.processNav}>
                            <div style={css.wenziDiv}>
                                {props.process}%
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

                    <button style={css.button} className="btn btn-block">分享活动赚取佣金</button>

            </div>
        )
    }
});
AdListItem.prototype.css={
    imgContainer:{
        display:'flex',
        marginTop:'0.16rem'
    },
    img:{
        width:'2.22rem',
        height:'1.42rem'
    },
    processDiv:{
        height:'0.1rem',
        margin:'0.28rem 0 0.1rem 0',
    },
    process:{
        background:'#ffda44',
        height:'0.1rem',
        width:'60%'
    },
    processContainer:{
        width:'6.66rem',
        height:'1.40rem',
        //background:'blue'
        paddingLeft:'0.12rem'
    },
    processNav:{
        height:'0.46',
        width:'100%',
        display:'flex',
        fontSize:'0.22rem',
        textAlign:'center',

    },
    wenzi:{
        fontSize:'0.14rem',
        color:'#adadad'
    },
    wenziDiv:{
        flexGrow:'1'
    },
    button:{
        background:'#ffda44',
        margin:'0.15rem 0'
    }



};
AdList.prototype.css = {
    navContainer: {
        display: 'flex',

        textAlign: 'center'
    },
    div: {
        flexGrow: '1'
    },
    tabContainer: {
        position: 'relative',
        width: '100%',
        //height: '0.01rem',
        background: 'blue'
    },
    tab: {
        position: 'absolute',
        width: '33.33%',
        background: '#fe4040',
        left: '0',
        bottom: '0',
        height: '0.01rem',
    }

};

module.exports = AdList;
