var gearz = {
    getInitialState: function () {
        return {};
    },

    // 'get' is used to get properties that may be stored in 'state' or in 'props'
    // this happens when a value is defined throw a 'setter'

    get: function (propName) {
        return this.state.hasOwnProperty(propName)
            ? this.state[propName]
            : this.props[propName];
    },

    // 'setter' is used to create a function that changes the value of an
    // attribute used by this component, raising events to notify parent
    // components (if any), and with a default behaviour of storing changes
    // in the component internal 'state'

    setter: function (propName, newValue) {
        return function (e) {
            var prevDef = false;
            var e1 = {
                preventDefault: function () {
                    prevDef = true;
                },
                key: propName,
                value: newValue,
                previous: this.props[propName],
                setValue: function (v) {
                    newValue = v;
                },
                domEvent: e
            };
            Object.freeze(e1);

            var fn0 = this.props.onAnyChange;
            fn0 && fn0(e1);
            if (prevDef)
                return;

            var name = propName == "value"
                ? ""
                : propName[0].toUpperCase() + propName.substr(1);
            var fn1 = this.props["on" + name + "Change"];
            fn1 && fn1(e1);
            if (prevDef)
                return;

            this.state[propName] = newValue;
            this.props.render();
        }.bind(this);
    }
};