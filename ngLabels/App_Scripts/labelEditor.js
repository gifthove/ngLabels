/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var LabelApplication;
(function (LabelApplication) {
    //Creating a LabelEditor Class translates to a ==> function
    var LabelEditor = (function () {
        function LabelEditor() {
        }
        //Creating a static angular Module
        LabelEditor.editorModule = angular.module('labelEditor', ['ngResource']);
        return LabelEditor;
    }());
    LabelApplication.LabelEditor = LabelEditor;
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labeleditor.js.map