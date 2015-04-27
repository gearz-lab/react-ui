import React from 'react/addons';
import VNavItem from './VNavItem.jsx';


let VNavGroup = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        onSelect: React.PropTypes.func,
        href: React.PropTypes.string
    },

    renderGroupHeader: function () {
        return (
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a href={ this.props.href ? this.props.href : '#' } onClick={this.handleSelect }>
                        <span className="glyphicon glyphicon-folder-close"></span>
                        <span>{this.props.title}</span>
                    </a>
                </h4>
            </div>);
    },

    handleSelect: function() {
        if(this.props.onSelect) {
            this.props.onSelect(this.props.name);
            return false;
        }
    },

    render: function () {
        return (
            <div className="panel panel-default">
                { this.renderGroupHeader() }
                <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <table className="table">
                            { this.props.children }
                        </table>
                    </div>
                </div>
            </div>);
    }

});

export default VNavGroup;
