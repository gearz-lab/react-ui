var Link = React.createClass({
    mixins: [gearz],
    processAjaxData: function (response, urlPath) {
        document.getElementById("content").innerHTML = response.html;
        document.title = response.pageTitle;
        window.history.pushState({"html": response.html, "pageTitle": response.pageTitle}, "", urlPath);
    },
    navigator: function (routeInfo) {
        return function (e) {
            var onNavigate = this.props.onNavigate;
            onNavigate && onNavigate(e);
            if (routeInfo.routeData.isClient) {
                //var currentInfo = this.props.router.getCurrentLocationInfo();
                var Component = window[routeInfo.routeData.pageComponent];
                var targetElement = document.getElementById(this.props.target);
                if (Component && targetElement) {
                    React.render(<Component />, targetElement);
                    window.history.pushState(
                        {
                            pageComponent: routeInfo.routeData.pageComponent,
                            viewData: {},
                            "pageTitle": "TITLE"
                        },
                        null,
                        routeInfo.uri);
                }
            }

            e.preventDefault();
        }.bind(this);
    },
    render: function () {
        var href = this.props.href,
            router = this.props.router,
            onNavigate = this.props.onNavigate; // triggered when navigating through this link

        var routeInfo = router.getInfo(href);

        return (
            <a href={routeInfo.uri} onClick={this.navigator(routeInfo)}>
                            {routeInfo.uri}
            </a>
        );
    }
});
