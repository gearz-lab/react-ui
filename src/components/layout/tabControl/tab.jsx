var Tab = React.createClass({
    mixins: [gearz],
    propTypes: {
        // the tab name
        name: React.PropTypes.string.isRequired,
        // the tab display name
        displayName: React.PropTypes.string.isRequired,
        // whether or not this tab is active. The tab will not render if not
        active: React.PropTypes.bool
    },

    render: function () {
        var active = this.get("active");
        return <div class={ active ? "tabControl-tab active" : "tabControl-tab" } >
                { this.props.children }
            </div>
    }
});
