/**
 * Created by Administrator on 2016/6/22.
 */

var React = require('react');

//var RegasterHeader  = require('./regasterComp').Regaster;//提取注册页的头部

var AdShow = React.createClass({

    render:function(){
        return (
            <div>
                <div>
                    进度
                </div>
                <div>
                    电脑版
                </div>
                <div>
                    图库标题
                </div>
                <div>
                    产品个性图
                </div>
            </div>
        )
    }
});

module.exports=AdShow;