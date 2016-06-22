/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');

//var RegasterHeader  = require('./regasterComp').Regaster;//提取注册页的头部

var AdDetail = React.createClass({

    render:function(){
        var css=this.css;
        var props = this.props.data;
        var imgArr =[];
        props.productImgList.forEach(function(value,index){
            imgArr.push(<AdDetailItem img={value}/>)
        });

        //console.log(props.productImgList);
        return (
            <div style={css.container}>
                <div style={css.processContainer}>
                    <div style={css.processDiv}>
                        {props.process}
                        <p>已达</p>
                    </div>
                    <div style={css.processDiv}>
                        {props.target}
                        <p>目标</p>
                    </div>
                    <div style={css.processDiv}>
                        {props.timeRemianing}天
                        <p>剩余时间</p>
                    </div>
                    <div style={css.processDiv}>
                        {props.onceMoney}元/次
                        <p>点击量</p>
                    </div>
                </div>
                <div>
                    电脑版
                </div>
                <div>
                    图库标题
                </div>
                <div>
                    {imgArr}
                </div>
            </div>
        )
    }
});
var AdDetailItem = React.createClass({
    render:function(){
        var props =this.props;
        var css = this.css;
        return (
            <div>
                <img style={css.img} src={props.img} alt=""/>
                <div>

                </div>
            </div>
        )
    }
});

AdDetail.prototype.css={
    container:{
        background:'red'
    },
    processContainer:{
        width:'100%',
        height:'0.78rem',
        display:'flex',
        textAlign:'center'
    },
    processDiv:{
        flexGrow:'1'
    }
};
AdDetailItem.prototype.css = {
    img:{
        width:'3.50rem',
        height:'2.06rem'
    }
};

module.exports=AdDetail;