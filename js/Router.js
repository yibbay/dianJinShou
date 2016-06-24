/**
 * Created by Administrator on 2016/6/24.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var Router = {
    router:function(e){
        var path = e.target.getAttribute('data-path');
        var view = e.target.getAttribute('data-view');
        var node = document.querySelector(view);
        this.unmount(node);
        this.mount(path,node);

    },
    unmount:function(node){
        ReactDOM.unmountComponentAtNode(node)
    },
    mount:function(path,node){
        ReactDOM.render(React.createElement(require(path)),node)
    }
};

module.exports = Router;