// Gearz Router Mixins    v1.0.0
//
//  This is responsible for extending the router,
//  to make it easier to use. The following mix-ins
//  are available in this file:
//
//   - location: allows the router to store the current URI,
//          and use it to get the current route data when needed.
//  

(function() {

    function getInfo(value) {
        if (typeof value == 'string') {
            var routeMatch = this.matchRoute(value);
            var uri = this.makeURI(routeMatch.data);
            return Object.freeze({
                routeData: routeMatch.data,
                dataTokens: routeMatch.tokens,
                uri: uri });
        }
        else if (typeof value == 'object') {
            var uri = this.makeURI(value);
            var routeMatch = this.matchRoute(uri);
            return Object.freeze({
                routeData: routeMatch.data,
                dataTokens: routeMatch.tokens,
                uri: uri });
        }
        throw new Error("Invalid value passed to 'getInfo'");
    }

    var mixins = Object.freeze({
        location: function() {
            var current = {};

            this.getInfo = getInfo.bind(this);

            this.setCurrentLocation = (function(value) {
                current = this.getInfo(value);
            }).bind(this);

            this.getCurrentLocationInfo = (function() {
                return current;
            }).bind(this);

            var base = this.makeURI;
            this.makeURI = (function(target, opts) {
                if (arguments.length == 2 && typeof target == 'object' && typeof opts == 'object')
                    return base.call(this, current.routeData, target, opts);
                else if (arguments.length == 1 && typeof target == 'object')
                    return base.call(this, current.routeData, target);
                return base.apply(this, arguments);
            }).bind(this);
        }
    });

    window.routerMixins = window.routerMixins || {};
    for (var k in mixins)
        window.routerMixins[k] = mixins[k];

    return mixins;
})();