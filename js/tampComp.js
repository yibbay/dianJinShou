/**
 * Created by Administrator on 2016/6/21.
 */

var React = require('react');

var Tamp = React.createClass({
   render:function(){
       document.body.style.background='#e94838';

       var css = this.css;
       return (
           <div style={css.container}>
               <div>
                   <p style={css.p1}>
                       快来砸金蛋  有加息哦
                   </p>
                   <p style={css.p2}>
                       当日赚钱最高可+10%
                   </p>
               </div>
               <div style={css.imgDiv}>
                   <img style={css.danImg} src="images/jindan.png" alt=""/>
                   <img style={css.chuiImg} src="images/chuaizi.png" alt=""/>
               </div>
               <div style={css.jiaxi}>
                   今日已有124758位网友获得加息！
               </div>
               <a style={css.a} className="btn btn-block">活动规则</a>
           </div>
       )
   }
});
Tamp.prototype.css={
    container:{
        padding:'0.7rem 0.6rem 1.6rem',
        textAlign:'center'
    },
    p1:{
        fontSize:'0.52rem',
        fontWeight:'800',
        color:'#fada44'
    },
    p2:{
        fontSize:'0.42rem',
        fontWeight:'800',
        color:'#fada44'
    },
    imgDiv:{
      position:'relative',
        marginTop:'0.75rem'
    },
    danImg:{
        width:'3.39rem',
        height:'3.82rem'
    },
    chuiImg:{
        position:'absolute',
        width:'1.42rem',
        height:'1.39rem',
        right:'0.1rem',
        top:'0.05rem'
    },
    jiaxi:{
        marginTop:'0.45rem',
        color:'white',
        fontSize:'0.35rem',
        fontWeight:'800'
    },
    a:{
        marginTop:'0.4rem',
        background:'#c62717',
        height:'0.64rem',
        color:'white',
        fontSize:'0.35rem',
        fontWeight:'800',
    }


};

module.exports=Tamp;