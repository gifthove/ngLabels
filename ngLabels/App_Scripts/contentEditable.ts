/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeleditor.ts" />
module LabelApplication {

    class ContentEditable implements ng.IDirective {
       
        //This is a factory that creates object that implements ng.Idirective
        static factory(): ng.IDirectiveFactory {

            //Fat arrow methodology
            return () => new ContentEditable();
        }

        //Restricting the contentEditable  directive to  html attributes
        restrict = 'A';

        //To modify the model thats associated with this directive
        //We are going to require to edit the model
        require = 'ngModel';


        //If you want to manipulate the dom you need to impliment the link function.
        //implimenting the optional link function
        link = (scope: ng.IScope, element: ng.IRootElementService, attrs: any, ngModel: ng.INgModelController) => {
            function read() {
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function () {
                element.html(ngModel.$viewValue || "");
            }

            element.bind("blur keyup change", function () {
                scope.$apply(read);
            });
        }

    }

    //Registering a new Directive factory with a Module
    //Dependency Injection happens here where the ContentEditable class is injected by name
    LabelEditor.editorModule.directive("contentEditable", ContentEditable.factory());
}