var ComponentBuilderSample = React.createClass({
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">ComponentBuilder</h1>

                { /* EXTERNAL PROPS */ }
                <h3>Using a JSON like object</h3>
                <p>The component builder can be used to render a JSON representation of controls.</p>
                <p>In fact it is a live Javascript object, so you can pass in event hanlers to the components if you wish to.</p>

                <CodeSample
                    component={
                        <ComponentBuilder
                            data={[
                                {
                                    type: "FormGroup",
                                    props: {
                                        displayName: "Test testbox"
                                    },
                                    children: [
                                        {
                                            type: "Textbox",
                                            props: {
                                                value: "Lorem ipsum dolor sit amet"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "button",
                                    props: {
                                        onClick: function() {
                                            alert("You see, event handlers also work.");
                                        }
                                    },
                                    children: "Click here to activate the 'onClick' event handler"
                                }
                            ]}
                        />
                        }
                    sourceCode= {{
                        __html: "\
<ComponentBuilder\n\
    data={[\n\
        {\n\
            type: \"FormGroup\",\n\
            props: {\n\
                displayName: \"Test testbox\"\n\
            },\n\
            children: [\n\
                {\n\
                    type: \"Textbox\",\n\
                    props: {\n\
                        value: \"Lorem ipsum dolor sit amet\"\n\
                    }\n\
                }\n\
            ]\n\
        }\n\
    ]},\n\
    {\n\
        type: \"button\",\n\
        props: {\n\
            onClick: function() {\n\
                alert(\"You see, event handlers also work.\");\n\
            }\n\
        },\n\
        children: \"Click here to activate the 'onClick' event handler\"\n\
    }\n\
/>\
"
                    }}
                />

            </div>
        );
    }
});