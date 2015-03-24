var React = require("react");
var gearzMixin = require("../../gearz.mixin");

var Tab = React.createClass({
    mixins: [gearzMixin],
    propTypes: {
        // the tab name
        name: React.PropTypes.string.isRequired,
        // the tab display name
        displayName: React.PropTypes.string.isRequired,
    },

    render: function () {
        return <div>
                { this.props.children }
            </div>
    }
});

module.exports = Tab;