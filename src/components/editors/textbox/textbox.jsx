var Textbox = React.createClass({
        mixins: [gearz],
        propTypes: {
            // The input id
            id: React.PropTypes.string.isRequired,

            // The textbox value
            value: React.PropTypes.string,

            // Event raised when the textbox value is changed by the user
            onChange: React.PropTypes.func,

            // Text to be prepended to the component
            prependText: React.PropTypes.string,

            // Text to be appended to the component
            appendText: React.PropTypes.string,

            // Placeholder
            placeholder: React.PropTypes.string,

            // Whether or not the component is disabled
            disabled: React.PropTypes.bool,

            // Whether or not the component is invalid
            invalid: React.PropTypes.bool,

            // Whether or not the component is required
            required: React.PropTypes.bool,

            // Event raised when anything is changed in the component
            onAnyChange: React.PropTypes.func
        },
        render: function() {

                var id = this.get("id");
                var value = this.get("value");
                var prependText = this.get("prependText");
                var appendText = this.get("appendText");
                var placeholder = this.get("placeholder");
                var disabled = this.get("disabled");

                var input = <input
                    id={id}
                    type="textbox"
                    className="form-control has-error"
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
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