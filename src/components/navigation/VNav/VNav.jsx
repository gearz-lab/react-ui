import React from 'react/addons';
import VNagGroup from './VNavGroup.jsx';

let VNav = React.createClass({

    propTypes: {
    },

    render: function () {
        return (
            <div className="panel-group rui-vnav" id="accordion">
                { this.props.children }
            </div>);
    }
});

export default VNav;
