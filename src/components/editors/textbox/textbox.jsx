var Textbox = React.createClass({
        propTypes: {
            // The textbox value
            value: React.PropTypes.string,
            // Text to be prepended to the component
            prependText: React.PropTypes.string,
            // Text to be appended to the component
            appendText: React.PropTypes.string
        },
        mixins: [gearz],
        render: function() {

                var value = this.get("value");
                var prependText = this.get("prependText");
                var appendText = this.get("appendText")

                var input = <input
                    type="textbox"
                    className="form-control"
                    value={this.get("value")}
                    onChange={
                        function(e) {
                            return this.set(e, "value", e.target.value);
                        }.bind(this)
                    }
                    />;

                // if there's any add-on
                if(prependText || appendText)
                    return (
                        <div className="input-group">
                            { prependText ? <div className="input-group-addon">{ prependText }</div> : null }
                            { input }
                            { appendText ? <div className="input-group-addon">{ appendText }</div> : null }
                        </div>
                    );
                else
                    return input;
            }
    });