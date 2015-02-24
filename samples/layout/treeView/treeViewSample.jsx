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
                                                    display: "TexboxControl (Name)"
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
            },

            treeView2: [
                {
                    display: "ApplicationControl",
                    nodes: [
                        {
                            display: "PageControl",
                            nodes: [
                                {
                                    display: "StackPanelControl",
                                    nodes: [
                                        {
                                            display: "Panel (Main)",
                                            nodes: [
                                                {
                                                    display: "TexboxControl (Name)"
                                                },
                                                {
                                                    display: "DatePickerControl (Date of Birth)"
                                                },
                                                {
                                                    display: "ToggleButtonControl (Gender)"
                                                }
                                            ]
                                        },
                                        {
                                            display: "Panel (Additional Info)",
                                            nodes: [
                                                {
                                                    display: "ToogleButtonControl (Is Responsible)"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
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
                        <TreeView nodes={this.state.treeView2} />
                        }
                    sourceCode= {{
                        __html: ""
                    }}
                />
                <p>
                    <strong>Notes:</strong> when using internal state to store node attributes,
                    the values outlive the nodes sent through the <code>nodes</code> prop.
                    This means that even if a collapsed node is removed from the tree,
                    it is still marked as being collapsed, so that if the node is reinserted in the tree
                    it appears collapsed again.
                </p>
            </div>
        );
    }
});