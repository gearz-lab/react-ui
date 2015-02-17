var TreeViewSample = React.createClass({
    getInitialState: function () {
        return {

            treeView1: {
                app: {
                    display: "ApplicationControl",
                    nodes: {
                        page: {
                            display: "PageControl",
                            nodes: {
                                editPanel: {
                                    display: "StackPanelControl",
                                    nodes: {
                                        panel: {
                                            display: "Panel (Main)",
                                            nodes: {
                                                name: {
                                                    display: "TexboxControl (Name)",
                                                },
                                                dateOfBirth: {
                                                    display: "DatePickerControl (Date of Birth)"
                                                },
                                                gender: {
                                                    display: "ToggleButtonControl (Gender)"
                                                }
                                            }
                                        },
                                        panel2: {
                                            display: "Panel (Additional Info)",
                                            nodes: {
                                                isResponsible: {
                                                    display: "ToogleButtonControl (Is Responsible)"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        };
    },
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">TreeView</h1>

                <p>Displays hierarchical data</p>

                { /* BASICS */ }
                <h3>Basic usage</h3>
                <p>Example of hierarchical data</p>

                <CodeSample
                    component={
                        <TreeView data={this.state.treeView1} />
                        }
                    sourceCode= {{
                        __html: ""
                    }}
                />
            </div>
        );
    }
});