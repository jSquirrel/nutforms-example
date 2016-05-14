/*
 * Variables:
 *  - mappingFunction - set your function as value of this variable
 *  - model {string} - Name of the class
 *  - context {string} - Name of the context
 *  - attributeName {string} - Name of the attribute
 *  - attributeType {string} - Type of the attribute
 *  - isAttributePrimary {boolean} - Is the attribute primary?
 */

mappingFunction = function (attribute) {
    var widgetNamespace = "default";
    if (attribute.primary == true) {
        widgetNamespace = "disabled";
    }

    var widgetName = "";
    switch (attribute.type) {
        case "java.lang.String":
            widgetName = "text-input";
            break;
        case "java.lang.Long":
            widgetName = "number-input";
            break;
        case "ToOne":
            widgetName = "relation-to-one";
            break;
        case "ToMany":
            widgetName = "relation-to-many";
            break;
    }
    return widgetNamespace + "/" + widgetName;
};
