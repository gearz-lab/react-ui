var PagerSample = React.createClass({
    getInitialState: function () {
        return {
            name: "xpto",
            pager1: {
                page: 1,
                pageSize: 10,
                count: 45
            },
            pager2: {
                page: 1,
                pageSize: 10,
                count: 88
            }
        };
    },
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">pager.jsx</h1>

                <h4>using external props (generic event)</h4>
                <Pager
                    page={this.state.pager1.page}
                    count={this.state.pager1.count}
                    pageSize={this.state.pager1.pageSize}
                    onAnyChange={function (e) {
                            e.preventDefault();
                            var newState = React.addons.update(
                                this.state,
                                { pager1: { page: { $set: e.value } }});
                            this.setState(newState);
                        }.bind(this)} />

                <h4>using external props (specific event)</h4>
                <Pager
                    page={this.state.pager2.page}
                    count={this.state.pager2.count}
                    pageSize={this.state.pager2.pageSize}
                    onPageChange={function (e) {
                            e.preventDefault();
                            var newState = React.addons.update(
                                this.state,
                                { pager2: { page: { $set: e.value } }});
                            this.setState(newState);
                        }.bind(this)} />

                <h4>using internal state (no events at all)</h4>
                <Pager
                    page={1}
                    count={101}
                    pageSize={10} />

            </div>
        );
    }
});