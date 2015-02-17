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
    // 'set' is used to define the value of a property, given the name of the
    // property and the new value to assign. It can also receive a third parameter,
    // representing the context of the change. For example: you can pass the
    // event data when the change is caused by a DOM event.
    // This will raise events that can be listened by parent components,
    // so that they know when the child component changes.
    set: function(propName, newValue, context) {
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
            context: context
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
    // 'setter' is used to create a function that changes the value of an
    // attribute used by this component in response to a DOM event,
    // raising other events to notify parent components,
    // and with a default behaviour of storing changes
    // in the component internal 'state'
    setter: function(propName, newValue) {
        return (function(e) {
            return this.set(propName, newValue, { domEvent: e });
        }).bind(this);
    }
};