/**
 * Created by Administrator on 2016/6/21.
 */

var React = require('react');
var ReactDOM = require('react-dom');


var MyList = React.createClass({

   render:function(){
        var data = this.props.data;
       var compArr =[];
       console.log(data);
       data.forEach(function(value,index){
            compArr.push(<MyListItem {...value}/>)
       });
       return (
           <div>
               {compArr}
           </div>
       )
   }
});

var MyListItem = React.createClass({

    render:function(){
        var css = this.css;
        return (
            <div style={css.container} >
                <div style={css.ad}>
                    <p>{this.props.adName}</p>
                    <p>{this.props.time}</p>
                </div>
                <div style={css.earn}>
                    <p>+{this.props.earn}￥</p>
                </div>
            </div>
        )
    }
});
MyListItem.prototype.css = {
    container:{
        position:'relative',
        height:'1.48rem',
        width:'100%',
        borderBottom:'1px solid #ccc',
       // background:'blue'
    },
    ad:{
        height:'1.48rem',
        fontSize:'0.3rem',
        position:'absolute',
        top:'0.48rem',
        left:'0'
    },
    earn:{
        fontSize:'0.3rem',
        position:'absolute',
        top:'0.48rem',
        right:'4px'
    }
};

module.exports = MyList;