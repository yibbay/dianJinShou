/**
 * Created by Administrator on 2016/6/24.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var HeaderRouter = {
    router:function(e){
        //e.target.nextSibling.innerHTML='';
        var content = e.target.nextSibling.innerHTML;
        console.log(content);
        switch(content){
            case '':
                break;
        }
    }
};

module.exports=HeaderRouter;
