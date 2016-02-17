'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

const React = require('react');
const ReactDOM = require('react-dom');

const wrap = document.createElement('div');
wrap.className = "title-bar-wrap";

const SIZE = {
    INSET: "inset",
    NORMAL: "normal",
    CENTER: "center"
};

const THEME = {
    DEFAULT: "default",
    INVERSE: "inverse"
};

const BUTTON = {
    CLOSE: "close",
    MINIMIZE: "minimize",
    NORMAL_SCREEN: "normalScreen",
    FULL_SCREEN: "fullScreen"
};

const CloseBtn = props => React.createElement('button', { disabled: props.disabled, className: 'close', onClick: props.onClick });

const MinimizeBtn = props => React.createElement('button', { disabled: props.disabled, className: 'minimize', onClick: props.onClick });

const FullScreenBtn = props => React.createElement('button', { disabled: props.disabled, className: 'full-screen', onClick: props.onClick });

const NormalScreenBtn = props => React.createElement('button', { disabled: props.disabled, className: 'normal-screen', onClick: props.handleClickNormalScreenBtn });

const TitleBar = React.createClass({
    displayName: 'TitleBar',

    getDefaultProps() {
        return {
            blur: false,
            size: SIZE.NORMAL,
            theme: THEME.DEFAULT,
            fullScreen: false,
            disabled: false,
            lockBtn: []
        };
    },
    render() {

        const thisProps = this.props;
        const lockBtn = new Set([].concat(_toConsumableArray(thisProps.lockBtn)));

        let titleBarClass = "title-bar";

        titleBarClass += thisProps.theme === THEME.INVERSE ? " inverse" : " default";
        titleBarClass += thisProps.size === SIZE.INSET ? " inset" : "";
        titleBarClass += thisProps.blur ? " blur" : "";

        return React.createElement(
            'header',
            { className: titleBarClass },
            React.createElement(
                'div',
                { className: "btn-wrap" + (thisProps.size === SIZE.CENTER ? " center" : "") },
                React.createElement(CloseBtn, {
                    disabled: thisProps.disabled || lockBtn.has(BUTTON.CLOSE) ? true : false,
                    onClick: this.handleClickCloseBtn
                }),
                React.createElement(MinimizeBtn, {
                    disabled: thisProps.disabled || lockBtn.has(BUTTON.MINIMIZE) || thisProps.fullScreen ? true : false,
                    onClick: this.handleClickMinimizeBtn
                }),
                thisProps.fullScreen ? React.createElement(NormalScreenBtn, {
                    disabled: thisProps.disabled || lockBtn.has(BUTTON.NORMAL_SCREEN) ? true : false,
                    onClick: this.handleClickNormalScreenBtn
                }) : React.createElement(FullScreenBtn, {
                    disabled: thisProps.disabled || lockBtn.has(BUTTON.FULL_SCREEN) ? true : false,
                    onClick: this.handleClickFullScreenBtn
                })
            ),
            this.props.children
        );
    },
    handleClickCloseBtn() {
        'onClose' in this.props && this.props.onClose();
    },
    handleClickMinimizeBtn() {
        'onMinimize' in this.props && this.props.onMinimize();
    },
    handleClickFullScreenBtn() {
        'onFullScreen' in this.props && this.props.onFullScreen();
    },
    handleClickNormalScreenBtn() {
        'onNormalScreen' in this.props && this.props.onNormalScreen();
    }
});

module.exports = TitleBar;