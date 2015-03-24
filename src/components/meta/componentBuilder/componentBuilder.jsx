var React = require("react");
var gearzMixin = require("../../gearz.mixin");

var ComponentBuilder = React.createClass({
    mixins: [gearzMixin],
    propTypes: {},
    isUpper: function (x) {
        var u = x.toUpperCase(),
            l = x.toLowerCase();
        return x == u && x != l;
    },
    isLower: function (x) {
        var u = x.toUpperCase(),
            l = x.toLowerCase();
        return x == l && x != u;
    },
    getComponents: function (data) {
        if (!data)
            return [];
        var array = Array.isArray(data) ? data : [data];
        return array.map(function (item) {
            if (!item)
                return null;

            if (typeof item == 'string')
                return item;

            var args = [];

            // React convention:
            //  first letter lower-case named components are HTML tags
            //  first letter upper-case named components are custom React components
            if (this.isUpper(item.type[0]) && window[item.type])
                args.push(window[item.type]);
            else if (this.isLower(item.type[0]))
                args.push(item.type);
            else
                return null;

            args.push(item.props);
            args.push.apply(args, this.getComponents(item.children));

            return React.createElement.apply(React, args);
        }.bind(this));
    },
    render: function () {
        var data = this.get("data");
        if (!data)
            return (<div>No components to render</div>);
        var components = this.getComponents(data);
        return (
            <div>{components}</div>
        );
    }
});

module.exports = ComponentBuilder;