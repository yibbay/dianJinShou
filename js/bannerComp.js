/**
 * Created by Administrator on 2016/6/20.
 */
var React = require('react');
var $=require('jquery');
var Swiper = require('swiper');
var counter =1;

//var ReactDOM = require('react-dom');
/**声明页面banner  开始**/
var Banner = React.createClass({
    getInitialState:function(){
        return {
            banner:[]
        }
    },
    componentWillMount:function(){
        var that =this;
        $.ajax({
            url:'http://datainfo.duapp.com/shopdata/getBanner.php',
            dataType:'jsonp',
            async:false,
            success:function(data){
                that.setState({
                    banner:data
                })
            }
        })
    },
    render: function () {
        var _style = this.CSS;
        var temp = [];
        this.state.banner.forEach(function(value,index){
            //console.log(value)
            temp.push(<BannerItem {...value}/>)
        });
        return (
            <div style={_style.banner}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {temp}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>


            </div>
        );
    }
});
var BannerItem = React.createClass({

    render: function () {
        counter =1;
        var prop =JSON.parse(this.props.goodsBenUrl)[0];
        var img = {
            display: "block",
            width: "100%",
            height: "2.5rem"
        };
        return (
            <div className="swiper-slide">
                <img style={img} className="swiper-img" src={prop} />
            </div>
        )
    },
    componentDidMount:function(){
        counter++;
       if(counter==4){
           //console.log('aaa')
           var mySwiper = new Swiper('.swiper-container',{
               pagination : '.swiper-pagination',
               prevButton:'.swiper-button-prev',
               nextButton:'.swiper-button-next',
               autoplay:2000,

           })
       }

    }

});

Banner.prototype.CSS = {
    banner: {
        width: "100%",
        height: "2.5rem"
    },

};
/**声明页面banner  结束**/

module.exports=Banner;
