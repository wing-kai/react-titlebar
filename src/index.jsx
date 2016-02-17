const React = require('react');
const ReactDOM = require('react-dom');
const TitleBar = require('../lib/titlebar');

const Body = React.createClass({
    render() {
        return (
            <div>
                <TitleBar fullScreen={true}/>
                {/*<TitleBar blur={true}/>
                <TitleBar disabled={true}/>
                <TitleBar theme="inverse" />
                <TitleBar lockBtn={['fullScreen']} />
                <TitleBar size="inset" />
                <TitleBar fullScreen={true} />
                <TitleBar size="center">
                    <div style={{height:100, lineHeight:'100px'}}></div>
                </TitleBar>*/}
            </div>
        )
    }
})

ReactDOM.render(<Body />, document.getElementById('body'));