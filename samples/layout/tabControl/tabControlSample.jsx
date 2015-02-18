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
                           <Tab name="first" displayName="second">
                               <Textbox
                                   id="textbox1"
                                   value="something"
                               />
                           </Tab>
                           <Tab name="second" displayName="Second">
                               <Textbox
                                   id="textbox2"
                                   value="something else"
                               />
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