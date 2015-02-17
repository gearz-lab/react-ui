var StackPanel = React.createClass({
    mixins: [gearz],
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