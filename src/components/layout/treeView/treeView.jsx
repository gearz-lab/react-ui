var TreeView = React.createClass({
    mixins: [gearz],
    propTypes: {

        data: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {}
    },

    // returns a list of flat data. The type of each node is "flatTreeNode"
    traverseData: function (hierachicalData) {
        var flatData = [];

        var traverseInternal = function (currentKey, level, parentData, data) {
            for (var prop in data) {
                var newKey = currentKey ? currentKey + "." + prop : prop;
                flatData.push({
                    key: newKey,
                    parentKey: currentKey,
                    data: data[prop],
                    childCount: data[prop].nodes ? Object.keys(data[prop].nodes).length : 0,
                    level: level
                });
                traverseInternal(newKey, level + 1, data[prop], data[prop].nodes)
            }
        }

        traverseInternal("", 0, null, hierachicalData);

        return flatData;
    },

    updateState: function (key, collapsed) {
        /* builds an object to update based on the following example
             var newData = React.addons.update(myData, {
                 x: {y: {z: {$set: 7}}},
                 a: {b: {$push: [9]}}
             });
         */
        var keyParts = key.split(".");
        var updateObject = {};
        var targetObject = updateObject;
        var originalObjectObject = updateObject;
        for (var i = 0; i < keyParts.length; i++) {
            updateObject[keyParts[i]] = {nodes: {}};
            targetObject = updateObject[keyParts[i]];
            updateObject = updateObject[keyParts[i]].nodes;
        }
        targetObject.collapsed = {$set: collapsed};
        /* originalObjectObject now has the following format:
            { rootNode: { nodes: { anotherNode: { $set: collapsed} } }  }
         */
        var newData = React.addons.update(this.get("data"), originalObjectObject);
        this.set("data", newData);
    },

    render: function () {

        var that = this;
        var data = this.get("data");

        var traversedData = this.traverseData(data);

        // computes the paddinng-left of a node
        var computeIdentMargin = function (node) {
            var offset = 10;
            return (offset + node.level * 15) + "px";
        }

        // determins whether or no the node is hidden
        var isNodeHidden = function (node) {
            // returns a hierarchical node that matches the given key
            var getNode = function (key) {
                for (var i = 0; i < traversedData.length; i++)
                    if (traversedData[i].key == key)
                        return traversedData[i];
                return null;
            }
            var nodeParent = getNode(node.parentKey);
            if (nodeParent == null)
                return false;
            if (nodeParent.data.collapsed == true)
                return true;
            return isNodeHidden(nodeParent)
        }

        // toggles the state of the given node
        var toggleState = function (node) {
            that.updateState(node.key, !node.data.collapsed);
        }

        return (
            <ul className="list-group">
            { traversedData.map(function (item) {
                return isNodeHidden(item) ? null :
                    <li className="list-group-item noselect" style={{paddingLeft: computeIdentMargin(item)}}>
                        <span
                            className={
                                item.childCount ?
                                (item.data.collapsed ? "treeView-toggle-button glyphicon glyphicon-triangle-right" : "treeView-toggle-button glyphicon glyphicon-triangle-bottom")
                                    : "treeView-toggle-button glyphicon glyphicon-leaf"
                                }
                            onClick={ function () {
                                toggleState(item)
                            } } >
                        </span>
                        <span className="treeView-content">
                            { item.data.display }
                        </span>
                        {
                            item.childCount ?
                                    <span className="badge">
                                        { item.childCount }
                                    </span>
                                :
                                null
                        }
                    </li>
            }) }
            </ul>
        );
    }
});