/**
 * Created by Administrator on 2016/6/20.
 */

var React = require('react');
var LogHeaderComp = require('./logHeaderComp.js');
var Project = require('./projectComp');

var Banner = require('./bannerComp');

var HomeFooter = require('./homeFooter');

var Layout = React.createClass({

    render: function () {
        return (
            <div>
                <header id="header">
                    <LogHeaderComp/>
                </header>
                <div id="banner">
                    <Banner/>
                </div>
                <div id="project">
                    <Project/>
                </div>
                <footer id="footer">
                    <HomeFooter/>
                </footer>
            </div>
        )
    }
});
module.exports = Layout;
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
window.addEventListener("resize", function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}, false);

