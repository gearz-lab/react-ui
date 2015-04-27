import React from 'react/addons';


let VNavItem = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        onSelect: React.PropTypes.func,
        href: React.PropTypes.string
    },

    handleSelect: function() {
        if(this.props.onSelect) {
            this.props.onSelect(this.props.name);
            return false;
        }
    },

    render: function () {
        return (
            <tr>
                <td>
                    <span className="glyphicon glyphicon-pencil text-primary"></span><a href={ this.props.href ? this.props.href : '#' } onClick={this.handleSelect }>{ this.props.title }</a>
                </td>
            </tr>);
    }

});

export default VNavItem;
