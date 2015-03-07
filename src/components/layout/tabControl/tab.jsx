var Tab = React.createClass({
    mixins: [gearz],
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
