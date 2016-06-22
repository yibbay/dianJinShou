/**
 * Created by Administrator on 2016/6/21.
 */
var React = require('react');
var ReactDOM =require('react-dom');

var Invite = React.createClass({
    buttonClose:function(){//点击关闭分享页面
        //alert()
        ReactDOM.unmountComponentAtNode(document.querySelector('#dialog'))
    },
    render: function () {
        var css = this.css;
        return (
            <div style={css.container}>
                <div>
                    <img style={css.inviteimg} src="images/invite_03.png" alt=""/>
                </div>
                <div >
                    <div style={css.shareImgContainer}>
                        <div>
                            <img style={css.shareimg} src="images/invite_05.png" alt=""/>
                        </div>
                        <div>
                            <img style={css.shareimg} src="images/invite_06.png" alt=""/>
                        </div>
                        <div>
                            <img style={css.shareimg} src="images/invite_07.png" alt=""/>
                        </div>
                    </div>
                    <div style={css.shareImgContainer}>
                        <div>
                            <img style={css.shareimg} src="images/invite_08.png" alt=""/>
                        </div>
                        <div>
                            <img style={css.shareimg} src="images/invite_09.png" alt=""/>
                        </div>
                        <div>
                            <img style={css.shareimg} src="images/invite_10.png" alt=""/>
                        </div>
                    </div>
                </div>
                <button style={css.button} className="btn btn-block" onClick={this.buttonClose}>关闭</button>
            </div>
        )
    }
});

Invite.prototype.css = {
    container: {
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.8)',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '999',
        padding: '2.33rem 1.26rem 0 1.44rem'
    },
    inviteimg: {
        width: '4.8rem',
        height: '1.75rem'
    },
    shareimg: {
        width: '1.62rem',
        height: '1.77rem'
    },
    shareImgContainer: {
        display: 'flex',
    },
    button:{
        marginTop:'0.6rem',
        background:'#ffc600'
    }

};

module.exports = Invite;