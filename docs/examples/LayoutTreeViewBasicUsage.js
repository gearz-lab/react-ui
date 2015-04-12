const treeNodes = {
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
};

const LayoutTreeViewBasicUsage = (
    <TreeView nodes={treeNodes} />
)

React.render(LayoutTreeViewBasicUsage, mountNode);