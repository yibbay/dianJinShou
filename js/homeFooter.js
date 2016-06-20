/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');

var HomeFooter = React.createClass({
    render:function(){
        var css =this.css;
        return (
          <div style={css.container}>
              <div style={css.item}>
                  <p>
                      <img style={css.img} src="images/shouye.png" alt=""/>
                  </p>
                  <p>首页</p>
              </div>
              <div style={css.item}>
                  <p>
                      <img style={css.img} src="images/qianbao.png" alt=""/>
                  </p>
                  <p>赚钱</p>
              </div>
              <div style={css.item}>
                  <p>
                      <img style={css.img} src="images/bangdan.png" alt=""/>
                  </p>
                  <p>榜单</p>
              </div>
              <div style={css.item}>
                  <p>
                      <img style={css.img} src="images/wode.png" alt=""/>
                  </p>
                  <p>我的</p>
              </div>
          </div>
        );
    }

});
HomeFooter.prototype.css={
    container:{
        display:'flex',
        flexDirection:'row',
        background:'#ffda44',
        fontSize:'0.24rem',
        color:'#333333',
        fontWeight:'bold',
        position:'fixed',
        left:'0',
        bottom:'0',
        width:'100%'
    },
    item:{
        width:'25%',
        height:'1rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        display:'block',
        width:'0.48rem',
        height:'0.46rem'
    }
};

module.exports=HomeFooter;