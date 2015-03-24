var React = require("react");
var TabHeader = require("./tabHeader.jsx");
var gearzMixin = require("../../gearz.mixin");

var TabControl = React.createClass({
    mixins: [gearzMixin],
    propTypes: {
        // current tab
        activeTab: React.PropTypes.string.isRequired,
        // A collection of Tab controls
        children: React.PropTypes.array.isRequired
    },
    getInitialState: function () {
        return {}
    },
    activeTabChanged: function(e) {
        this.set("activeTab", e.value);
    },
    render: function() {
        var tabs = this.props.children;
        var activeTab = this.get("activeTab");
        var tabHeaderItems = [];
        for(var i = 0; i < tabs.length; i++)
        {
            var tab = tabs[i];
            tabHeaderItems.push({name: tab.props.name, displayName: tab.props.displayName })
        }

        return <div className="tabControl">
                <TabHeader tabs={tabHeaderItems} activeTab={activeTab} onActiveTabChange={ this.activeTabChanged } />
                <div className="tabControl-content">
                    { this.props.children.map(function(item) {
                        var tabName = item.props.name;
                        return <div className={ activeTab == tabName ? "tab activeTab" : "tab" }>
                                {item}
                            </div>;
                    }) }
                </div>
            </div>;
    }
});

module.exports = TabControl;