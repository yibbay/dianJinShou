/**
 * Created by Administrator on 2016/6/23.
 */

var React = require('react');

var ReactDOM = require('react-dom');
var HomeFooter = require('./homeFooter');
//console.log(<HomeFooter name="testaaa"/>)
var PersonData = React.createClass({

    render: function () {
        HomeFooter = require('./homeFooter');
        return (
            <div>
                <div>
                    <div>
                        header
                    </div>
                    <div>
                        earn money
                    </div>
                    <div>
                        serve
                    </div>
                </div>
                <div>
                    <HomeFooter/>
                </div>

            </div>
        )
    }
});

module.exports = PersonData;