var React = require("react");
var StringTemplate = require("./templates/stringTemplate.jsx");

var ComponentFactory = {

    /**
     * Builds the component template templateMap
     */
    buildTemplateCache: function() {
        if(!this.templaceMap)
            this.templateMap = new Object();
        this.templateMap["string"] = StringTemplate;
    },

    /**
     * Builds a component based on the given metadata
     * @param meta: metadata
     * @returns the React component based on the given metadata
     */
    build: function(meta) {
        this.buildTemplateCache();
        var template = this.templateMap["string"];
        return template.build(meta);
    }
}

module.exports = ComponentFactory;