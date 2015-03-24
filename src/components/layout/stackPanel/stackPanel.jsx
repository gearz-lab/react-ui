var React = require("react");
var gearzMixin = require("../../gearz.mixin");

var StackPanel = React.createClass({
    mixins: [gearzMixin],
    propTypes: {
    },
    render: function () {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
});

module.exports = StackPanel;