var TextboxSample = React.createClass({
    getInitialState: function () {
        return {
            textbox1: {
                value: "Miguel"
            },
            textbox2: {
                value: "Angelo"
            },
            numericTextBox: {
                value: 3456
            }
        };
    },
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">textbox.jsx</h1>

                <h3>Using external props (generic event)</h3>
                <p>The outer controller is responsible for re-rendering the component whenever a property changes. The on <code>onAnyChange</code> event is triggered when any property changes. <code>e.preventDefault();</code> will prevent
                    the component to change it's internal state.</p>


                <CodeSample
                    component={
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
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    value={this.state.textbox1.value}\n\
    onAnyChange={\n\
        function (e) {\n\
            // if value has changed\n\
            if (e.key == 'value') {\n\
                e.preventDefault();\n\
                var newState = React.addons.update(\n\
                    this.state,\n\
                    {textbox1: {value: {$set: e.value}}});\n\
                this.setState(newState);\n\
            }\n\
        }.bind(this)\n\
    }\n\
/>"
                    }}
                />

                <h3>Using external props (specific event)</h3>
                <p>The outer controller is responsible for re-rendering the component whenever a property changes, like the example above. The on <code>onChange</code> event is triggered when the value changes. <code>e.preventDefault();</code> will prevent
                the component to change it's internal state.</p>

                <CodeSample
                    component={
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
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    value={this.state.textbox1.value}\n\
    onChange={\n\
        function (e) {\n\
            e.preventDefault();\n\
            var newState = React.addons.update(\n\
                this.state,\n\
                {textbox1: {value: {$set: e.value}}}\n\
            );\n\
            this.setState(newState);\n\
        }.bind(this)\n\
    }\n\
/>"
                    }}
                />

                <h3>Using internal state (no events at all)</h3>
                <p>When no event handler is passed. The component will keep it's own state.</p>

                <CodeSample
                    component={
                        <Textbox
                            value={this.state.numericTextBox.value}
                        />
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    value={this.state.numericTextBox.value}\n\
/>"
                    }}
                />

                <h3>Prepending and appending text</h3>
                <p>The Textbox component supports passing text to be rendered before and after the input.</p>

                <CodeSample
                    component={
                        <Textbox
                            value={this.state.numericTextBox.value}
                            prependText="$"
                            appendText=".00"
                        />
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    value={this.state.numericTextBox.value}\n\
    prependText=\"$\"\n\
    appendText=\".00\"\n\
/>"
                    }}
                />

            </div>
        );
    }
});