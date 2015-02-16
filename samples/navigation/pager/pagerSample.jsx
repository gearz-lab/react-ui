var PagerSample = React.createClass({
    getInitialState: function () {
        return {
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

        function onPagerChange(data, render) {
            return function (e) {
                e.preventDefault();
                data[e.key] = e.value;
                render();
            }.bind(this);
        };

        return (
            <div className="container">

                <h1 className="page-header">pager.jsx</h1>
                <h4>using external props (generic event)</h4>

                <Pager
                    page={this.state.pager1.page}
                    count={this.state.pager1.count}
                    pageSize={this.state.pager1.pageSize}
                    onAnyChange={onPagerChange(this.state.pager1, this.forceUpdate() )} />



                <div id="output1"></div>



                <h4>using external props (specific event)</h4>

                <div id="output2"></div>
                <h4>using internal state (no events at all)</h4>

                <div id="output3"></div>
                <script type="text/jsx">
                    function onPagerChange(data, render) {
                    return function (e) {
                    e.preventDefault();
                    data[e.key] = e.value;
                    render();
                    }.bind(this);
                    }
                    function render1() {
                    React.render(
                       ,
                        document.getElementById("output1")
                    );
                    }
                    function render2() {
                    React.render(
                        <Pager
                            page={glb.pager2.page}
                            count={glb.pager2.count}
                            pageSize={glb.pager2.pageSize}
                            onPageChange={onPagerChange(glb.pager2, render2)} />,
                        document.getElementById("output2")
                    );
                    }
                    function render3() {
                    React.render(
                        <Pager
                            page={1}
                            count={101}
                            pageSize={10}
                            render={render3} />,
                        document.getElementById("output3")
                    );
                    }
                    render1();
                    render2();
                    render3();
                </script>
            </div>
        );
    }
});