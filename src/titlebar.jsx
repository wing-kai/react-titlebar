const React    = require('react');
const ReactDOM = require('react-dom');

const wrap = document.createElement('div');
wrap.className = "title-bar-wrap";

const SIZE = {
    INSET: "inset",
    NORMAL: "normal",
    CENTER: "center"
}

const THEME = {
    DEFAULT: "default",
    INVERSE: "inverse"
}

const BUTTON = {
    CLOSE: "close",
    MINIMIZE: "minimize",
    NORMAL_SCREEN: "normalScreen",
    FULL_SCREEN: "fullScreen"
}

const CloseBtn = props => (
    <button disabled={props.disabled} className="close" onClick={props.onClick} />
);

const MinimizeBtn = props => (
    <button disabled={props.disabled} className="minimize" onClick={props.onClick} />
);

const FullScreenBtn = props => (
    <button disabled={props.disabled} className="full-screen" onClick={props.onClick} />
);

const NormalScreenBtn = props => (
    <button disabled={props.disabled} className="normal-screen" onClick={props.handleClickNormalScreenBtn} />
);

const TitleBar = React.createClass({
    getDefaultProps() {
        return {
            blur: false,
            size: SIZE.NORMAL,
            theme: THEME.DEFAULT,
            fullScreen: false,
            disabled: false,
            lockBtn: []
        }
    },
    render() {

        const thisProps = this.props;
        const lockBtn = new Set([...thisProps.lockBtn]);

        let titleBarClass = "title-bar";

        titleBarClass += thisProps.theme === THEME.INVERSE ? " inverse" : " default";
        titleBarClass += thisProps.size === SIZE.INSET ? " inset" : "";
        titleBarClass += thisProps.blur ? " blur" : "";

        return (
            <header className={titleBarClass}>
                <div className={"btn-wrap" + (thisProps.size === SIZE.CENTER ? " center" : "")}>
                    <CloseBtn
                        disabled={thisProps.disabled || lockBtn.has(BUTTON.CLOSE) ? true : false}
                        onClick={this.handleClickCloseBtn}
                    />
                    <MinimizeBtn
                        disabled={thisProps.disabled || lockBtn.has(BUTTON.MINIMIZE) || thisProps.fullScreen ? true : false}
                        onClick={this.handleClickMinimizeBtn}
                    />
                    {
                        thisProps.fullScreen ? (
                            <NormalScreenBtn
                                disabled={thisProps.disabled || lockBtn.has(BUTTON.NORMAL_SCREEN) ? true : false}
                                onClick={this.handleClickNormalScreenBtn}
                            />
                        ) : (
                            <FullScreenBtn
                                disabled={thisProps.disabled || lockBtn.has(BUTTON.FULL_SCREEN) ? true : false}
                                onClick={this.handleClickFullScreenBtn}
                            />
                        )
                    }
                </div>
                {this.props.children}
            </header>
        )
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