import React from "react/addons";

let SideNav = React.createClass({

    propTypes: {
        items: React.PropTypes.object.isRequired
    },

    /**
     * Returns the groups for the given items.
     * A group is a top level menu item
     * @returns {Array}
     */
    getGroups: function() {
        const items = this.props.items;
        let result = [];
        for(let item in items)
            result.push(items[item]);
        return result;
    },

    /**
     * Returns the items for a given group
     * @param group
     */
    getItems: function(group) {
        let result = [];
        for(let item in group.children)
            result.push(group.children[item]);
        return result;
    },

    render: function() {
        return <div className="panel-group rui-sidenav" id="accordion">


            <div className="panel panel-default">

                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span className="glyphicon glyphicon-folder-close">
                                </span>Content</a>
                    </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <table className="table">
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-pencil text-primary"></span><a href="http://www.jquery2dotnet.com">Articles</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-comment text-success"></span>
                                    <a href="http://www.jquery2dotnet.com">Comments</a>
                                    <span className="badge">42</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>


            </div>;
    }
});

export default SideNav;
