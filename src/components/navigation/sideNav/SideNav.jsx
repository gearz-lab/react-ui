var React = require("react/addons");

var tempData = {
    main: {
        display: "Main",
        children: {
            contacts: {
                display: "Contacts"
            },
            schedule: {
                display: "Schedule"
            }
        }
    }
};

var SideNav = React.createClass({

    getInitialState: function() {
      return tempData;
    },

    getGroups: function(data) {

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

module.exports = SideNav;