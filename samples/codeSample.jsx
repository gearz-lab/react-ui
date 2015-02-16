var CodeSample = React.createClass({
    render: function () {
        console.log(this.props.sourceCode.__html);
        return (
            <div>
                <div className="gearz-example">
                    { this.props.component }
                </div>
                <div className="highlight">
                    <pre>
                        <code dangerouslySetInnerHTML = {{ __html: hljs.highlightAuto(this.props.sourceCode.__html, ["javascript"]).value }} >

                        </code>
                    </pre>
                </div>
            </div>
        );
    }
});