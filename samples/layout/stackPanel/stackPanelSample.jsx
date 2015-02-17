var StackPanelSample = React.createClass({
    getInitialState: function () {
        return {
        };
    },
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">StackPanel</h1>

                <p>Organizes it's content in a stack. Currently only supports vertical orientation.</p>

                { /* BASICS */ }
                <h3>Basic usage</h3>
                <p>The StackPanel component renders it's children vertically stacked</p>

                <CodeSample
                    component={
                        <StackPanel>
                            <FormGroup displayName="Email">
                                <Textbox
                                    id="email"
                                    value="Textbox value"
                                />
                            </FormGroup>
                            <FormGroup displayName="Phone">
                                <Textbox
                                    id="phone"
                                    value="Phone number"
                                />
                            </FormGroup>
                        </StackPanel>
                        }
                    sourceCode= {{
                        __html: "<StackPanel>\n\
    <FormGroup displayName=\"Email\">\n\
        <Textbox\n\
            id=\"email\"\n\
            value=\"Textbox value\"\n\
        />\n\
    </FormGroup>\n\
    <FormGroup displayName=\"Phone\">\n\
        <Textbox\n\
            id=\"phone\"\n\
            value=\"Phone number\"\n\
        />\n\
    </FormGroup>\n\
</StackPanel>"
                    }}
                />

            </div>

        );
    }
});