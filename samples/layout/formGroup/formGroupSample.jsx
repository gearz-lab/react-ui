var FormGroupSample = React.createClass({
    getInitialState: function () {
        return {
            formGroupSample1: {
                value: "Lorem ipsum dolor sit amet"
            }
        };
    },
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">FormGroup</h1>

                <p>Wraps a label and a component. The label automatically points to the child component using the <code>for</code> attribute.</p>

                { /* BASICS */ }
                <h3>Basic usage</h3>
                <p>The FormGroup component renders a label and the component passed in as a child.</p>

                <CodeSample
                    component={
                        <FormGroup displayName="Email address">
                            <Textbox
                                id="email"
                                value="Textbox value"
                            />
                        </FormGroup>
                        }
                    sourceCode= {{
                        __html: "<FormGroup displayName=\"Email address\">\n\
    <Textbox id=\"email\" value=\"Textbox value\" />\n\
</FormGroup>"
                    }}
                />

                { /* INVALID STATE */ }
                <h3>Invalid state</h3>
                <p>If the child component is invalid, the FormGroup adds a <code>has-error</code> class, highlighting both the <code>label</code> and the child component.</p>

                <CodeSample
                    component={
                        <FormGroup displayName="Email address">
                            <Textbox
                                id="email"
                                value="Textbox value"
                                invalid={true}
                            />
                        </FormGroup>
                        }
                    sourceCode= {{
                        __html: "<FormGroup displayName=\"Email address\">\n\
    <Textbox id=\"email\" value=\"Textbox value\" invalid={true} />\n\
</FormGroup>"
                    }}
                />

            </div>

        );
    }
});