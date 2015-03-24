var React = require("react");
var gearzMixin = require("../../gearz.mixin");

var TreeRow = React.createClass({
    mixins: [gearzMixin],
    propTypes: {
        onAnyChange: React.PropTypes.func,
        onCollapsedChange: React.PropTypes.func,
        path: React.PropTypes.array.isRequired
    },
    hasChildren: function(nodes) {
        if (Array.isArray(nodes))
            return nodes.length>0;
        if (typeof nodes == 'object')
            return Object.keys(nodes).length>0;
        return !!nodes;
    },
    cardinality: function(nodes) {
        if (Array.isArray(nodes))
            return nodes.length;
        if (typeof nodes == 'object')
            return Object.keys(nodes).length;
        return null;
    },
    render: function () {

        var nodes = this.get("nodes");
        var collapsed = !!this.get("collapsed");
        var display = this.get("display");
        var path = this.get("path");

        var hasChildren = this.hasChildren(nodes);
        var cardinality = this.cardinality(nodes);

        var indentation = 10 + path.length * 15 + "px";

        return (
            <li className="list-group-item noselect" style={{paddingLeft: indentation}}>
                <span
                    className={
                        !hasChildren ? "treeView-toggle-button glyphicon glyphicon-leaf" :
                            collapsed ? "treeView-toggle-button glyphicon glyphicon-triangle-right" :
                                "treeView-toggle-button glyphicon glyphicon-triangle-bottom"
                        }
                    onClick={ this.setter("collapsed", !collapsed) } >
                </span>
                <span className="treeView-content">
                        { display }
                </span>
                { hasChildren && cardinality !== null ? <span className="badge">{ cardinality }</span> : null }
            </li>
        );
    }
});

module.exports = TreeRow;