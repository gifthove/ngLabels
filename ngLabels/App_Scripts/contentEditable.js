/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
var LabelApplication;
(function (LabelApplication) {
    var ContentEditable = (function () {
        function ContentEditable() {
            //Restricting the contentEditable  directive to  html attributes
            this.restrict = 'A';
            //To modify the model thats associated with this directive
            //We are going to require to edit the model
            this.require = 'ngModel';
            //If you want to manipulate the dom you need to impliment the link function.
            //implimenting the optional link function
            this.link = function (scope, element, attrs, ngModel) {
                function read() {
                    ngModel.$setViewValue(element.html());
                }
                ngModel.$render = function () {
                    element.html(ngModel.$viewValue || "");
                };
                element.bind("blur keyup change", function () {
                    scope.$apply(read);
                });
            };
        }
        //This is a factory that creates object that implements ng.Idirective
        ContentEditable.factory = function () {
            //Fat arrow methodology
            return function () { return new ContentEditable(); };
        };
        return ContentEditable;
    }());
    //Registering a new Directive factory with a Module
    //Dependency Injection happens here where the ContentEditable class is injected by name
    LabelApplication.LabelEditor.editorModule.directive("contentEditable", ContentEditable.factory());
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=contentEditable.js.map