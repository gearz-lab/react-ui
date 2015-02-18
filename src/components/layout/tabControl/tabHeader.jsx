var TabHeader = React.createClass({
    mixins: [gearz],
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

        return <ul className="nav nav-tabs">
        { tabs.map(function (item) {
            return <li role="presentation" className={ item.name == activeTab ? "active" : "" }>
                <a href="#" onClick={ that.setter("activeTab", item.name) }>{ item.displayName }</a>
            </li>;
        })}
        </ul>
    }
});
