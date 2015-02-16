var TextboxSample = React.createClass({
    getInitialState: function () {
        return {
            textbox1: {
                value: "Lorem ipsum dolor sit amet"
            },
            textbox2: {
                value: "Lorem ipsum dolor sit amet"
            },
            textbox3: {
                value: "Lorem ipsum dolor sit amet"
            },
            textbox4: {
                value: '3456'
            },
            // disabled
            textbox5: {
                value: "Lorem ipsum dolor sit amet"
            }
        };
    },
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">Textbox</h1>

                { /* EXTERNAL PROPS */ }
                <h3>Using external props (generic event)</h3>
                <p>The outer controller is responsible for re-rendering the component whenever a property changes. The on <code>onAnyChange</code> event is triggered when any property changes. <code>e.preventDefault();</code> will prevent
                    the component to change it's internal state.</p>

                <CodeSample
                    component={
                        <Textbox
                            id="textbox1"
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
    id=\"textbox1\"\n\
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

                { /* EXTERNAL PROPS 2 */ }
                <h3>Using external props (specific event)</h3>
                <p>The outer controller is responsible for re-rendering the component whenever a property changes, like the example above. The on <code>onChange</code> event is triggered when the value changes. <code>e.preventDefault();</code> will prevent
                the component to change it's internal state.</p>

                <CodeSample
                    component={
                        <Textbox
                            id="textbox2"
                            value={this.state.textbox2.value}
                            onChange={
                                function (e) {
                                    e.preventDefault();
                                    var newState = React.addons.update(
                                        this.state,
                                        {textbox2: {value: {$set: e.value}}});
                                    this.setState(newState);
                                }.bind(this)
                                }
                        />
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    id=\"textbox2\"\n\
    value={this.state.textbox2.value}\n\
    onChange={\n\
        function (e) {\n\
            e.preventDefault();\n\
            var newState = React.addons.update(\n\
                this.state,\n\
                {textbox2: {value: {$set: e.value}}}\n\
            );\n\
            this.setState(newState);\n\
        }.bind(this)\n\
    }\n\
/>"
                    }}
                />

                { /* INTERNAL PROPS */ }
                <h3>Using internal state (no events at all)</h3>
                <p>When no event handler is passed. The component will keep it's own state.</p>

                <CodeSample
                    component={
                        <Textbox
                            id="textbox3"
                            value={this.state.textbox3.value}
                        />
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    id=\"textbox3\"\n\
    value={this.state.textbox3.value}\n\
/>"
                    }}
                />

                { /* APPEND AND PREPEND */ }
                <h3>Prepending and appending text</h3>
                <p>The Textbox component supports passing text to be rendered before and after the input.</p>

                <CodeSample
                    component={
                        <Textbox
                            id="textbox4"
                            value={this.state.textbox4.value}
                            prependText="$"
                            appendText=".00"
                            placeholder="Dollar amount"
                        />
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    id=\"textbox4\"\n\
    value={this.state.textbox4.value}\n\
    prependText=\"$\"\n\
    appendText=\".00\"\n\
/>"
                    }}
                />

                { /* DISABLED */ }
                <h3>Disabling</h3>
                <p>Passing <code>{"disabled={true}"}</code> will make the Textbox disabled.</p>

                <CodeSample
                    component={
                        <Textbox
                            id="textbox5"
                            value={this.state.textbox5.value}
                            disabled={true}
                        />
                        }
                    sourceCode= {{
                        __html: "<Textbox\n\
    id=\"textbox5\"\n\
    value={this.state.textbox5.value}\n\
    disabled={true}\n\
/>"
                    }}
                />


            </div>
        );
    }
});