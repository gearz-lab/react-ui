var FormGroup = React.createClass({
    mixins: [gearz],
    propTypes: {
        // The display name
        displayName: React.PropTypes.string.isRequired,
        // The child (single one) that represents the inner-control to be rendered inside the FormGroup
        children: React.PropTypes.element.isRequired
    },
    render: function () {
        var displayName = this.get("displayName");
        var childId = this.props.children.props.id;
        var childInvalid = this.props.children.props.invalid;
        return (
            <div className={ childInvalid ? 'form-group has-error' : 'form-group' }>
                <label htmlFor={childId} className="control-label">{displayName}</label>
                { this.props.children }
            </div>
        );
    }
});