var TabControl = React.createClass({
    mixins: [gearz],
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
                <TabHeader tabs={tabHeaderItems} activeTab={activeTab} onActiveTabChanged={ this.activeTabChanged } />
                <div className="tabControl-content">
                    { this.props.children.map(function(item) {

                        return item;
                    }) }
                </div>
            </div>;
    }
});
