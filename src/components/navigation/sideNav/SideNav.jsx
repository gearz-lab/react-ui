import React from 'react/addons';

let SideNav = React.createClass({

    propTypes: {
        items: React.PropTypes.object.isRequired
    },

    /**
     * Returns the groups for the given items.
     * A group is a top level menu item
     * @returns {Array}
     */
    getGroups: function () {
        const items = this.props.items;
        let result = [];
        for (let item in items)
            if (items.hasOwnProperty(item)) {
                result.push(items[item]);
            }
        return result;
    },

    /**
     * Returns the items for a given group
     * @param group
     */
    getItems: function (group) {
        let result = [];
        for (let item in group.children)
            if (group.children.hasOwnProperty(item)) {
                result.push(group.children[item]);
            }
        return result;
    },

    renderGroup: function (group, key) {
        return (
            <div className="panel panel-default" key={key}>
                { this.renderGroupHeader(group) }
                <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <table className="table">
                            { this.getItems(group).map((item, i) => this.renderMenuItem(item, i)) }
                        </table>
                    </div>
                </div>
            </div>);
    },


    renderGroupHeader: function (group) {
        return (
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a href="#">
                        <span className="glyphicon glyphicon-folder-close"></span>
                        <span>{group.display}</span>
                    </a>
                </h4>
            </div>);
    },


    renderMenuItem: function (item, key) {
        return (
            <tr key={key}>
                <td>
                    <span className="glyphicon glyphicon-pencil text-primary"></span><a href="#">{item.display}</a>
                </td>
            </tr>);
    },


    render: function () {
        return (
            <div className="panel-group rui-sidenav" id="accordion">
                { this.getGroups().map((group, i) => this.renderGroup(group, i)) }
            </div>);
    }
});

export default SideNav;
