var Textbox = React.createClass({
        mixins: [gearz],
        render: function() {
                var value = this.get("value");
                var setter = function(e) {
                        return this.set(e, "value", e.target.value);
                    }.bind(this);
                return (
                        <input type="textbox" className="form-control" onChange={setter} value={value} />
                    );
            }
    });