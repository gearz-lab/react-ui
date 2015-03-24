var React = require("react");
var gearzMixin = require("../../gearz.mixin");

var TabHeader = React.createClass({
    mixins: [gearzMixin],
    propTypes: {
        // Active tab name
        activeTab: React.PropTypes.string.isRequired,
        // tab array. Each element is of type { name (string), displayName (string) }
        tabs: React.PropTypes.array.isRequired
    },

    render: function () {
        var that = this;
        var activeTab = this.get("activeTab");
        var tabs = this.get("tabs");

        return <ul className="nav nav-tabs tabControl">
        { tabs.map(function (item) {
            return <li role="presentation" className={ item.name == activeTab ? "active" : "" }>
                <a onClick={ that.setter("activeTab", item.name) }>{ item.displayName }</a>
            </li>;
        })}
        </ul>
    }
});

module.exports = TabHeader;