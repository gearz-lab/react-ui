var TextboxSample = React.createClass({
    getInitialState: function () {
        return {
            textbox1: {
                value: "Miguel"
            },
            textbox2: {
                value: "Angelo"
            }
        };
    },
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">textbox.jsx</h1>

                <h4>using external props (generic event)</h4>

                <Textbox
                    value={this.state.textbox1.value}
                    onAnyChange={
                        function (e) {
                            // if value has changed
                            if (e.key == 'value') {
                                e.preventDefault();

                                var newState = React.addons.update(
                                    this.state,
                                    {textbox1: {value: {$set: e.value}}});
                                this.setState(newState);
                            }
                        }.bind(this)
                        }
                />

                <h4>using external props (specific event)</h4>

                <Textbox
                    value={this.state.textbox1.value}
                    onChange={
                        function (e) {
                            e.preventDefault();
                            var newState = React.addons.update(
                                this.state,
                                {textbox1: {value: {$set: e.value}}});
                            this.setState(newState);
                        }.bind(this)
                        }
                />

                <h4>using internal state (no events at all)</h4>

                <Textbox
                    value={this.state.textbox2.value}
                />

            </div>
        );
    }
});