var TabControlSample = React.createClass({
    render: function () {

        return (
            <div className="container">

                <h1 className="page-header">TabControl</h1>

                <p>Displays data in tabs</p>

                { /* BASICS */ }
                <h3>Basic usage</h3>
                <p>Example of a tab</p>

                <CodeSample
                    component={
                       <TabControl activeTab="second">
                           <Tab name="first" displayName="First">
                               <p>First tab content</p>
                               <Textbox id="myTextbox1"/>
                           </Tab>
                           <Tab name="second" displayName="Second">
                               <p>Second tab content</p>
                               <Textbox id="myTextbox2"/>
                           </Tab>
                       </TabControl>
                        }
                    sourceCode= {{
                        __html: ""
                    }}
                />
            </div>
        );
    }
});