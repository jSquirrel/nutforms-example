mappingFunction = function (attribute) {
    var widgetNamespace = "default";
    if (
        attribute.primary == true
        || attribute.model.context == "read"
        || attribute.model.context == "delete"
        || (attribute.hasOwnProperty("readOnly") && attribute.readOnly == true)) {
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
