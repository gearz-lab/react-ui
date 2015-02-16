var gearz = {
    getInitialState: function() {
        return {};
    },
    // 'get' is used to get properties that may be stored in 'state' or in 'props'
    // this happens when a value is defined throw a 'setter'
    get: function(propName) {
        return this.state.hasOwnProperty(propName)
            ? this.state[propName]
            : this.props[propName];
    },
    // 'setter' is used to create a function that changes the value of an
    // attribute used by this component, raising events to notify parent
    // components (if any), and with a default behaviour of storing changes
    // in the component internal 'state'
    set: function(e, propName, newValue) {
        var prevDef = false;
        var eventData = {
            target: this,
            preventDefault: function() {
                prevDef = true;
            },
            key: propName,
            value: newValue,
            previous: this.props[propName],
            setValue: function(v){newValue=v;},
            domEvent: e
        };
        Object.freeze(eventData);

        var onAnyChange = this.props.onAnyChange;
        onAnyChange && onAnyChange(eventData);
        if (prevDef)
            return;

        var name = propName == "value" ? "" : propName[0].toUpperCase()+propName.substr(1);
        var fnName = "on"+name+"Change";
        var onPropertyChange = this.props.hasOwnProperty(fnName) && this.props[fnName];
        onPropertyChange && onPropertyChange(eventData);
        if (prevDef)
            return;

        var newState = {};
        newState[propName] = newValue;
        this.setState(newState);
    },
    setter: function(propName, newValue) {
        return (function(e) {
            return this.set(e, propName, newValue);
        }).bind(this);
    }
};