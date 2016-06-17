/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
//Aan object that we will use to go back forth the server
var LabelApplication;
(function (LabelApplication) {
    LabelApplication.LabelEditor.editorModule.factory('labelDataService', ['$resource', function (r) {
            return new LabelDataService(r);
        }]);
    //exporting because we are going to be using it in other modules
    var LabelDataService = (function () {
        function LabelDataService($resource) {
            //Casting the object to  ILabelResourceClass using the <>
            this.resource = $resource("/api/Labels/:id", { id: "@id" }, {
                get: { method: "GET" },
                save: { method: "PUT" },
                create: { method: "POST" },
                query: { method: "GET", isArray: true },
                delete: { method: "DELETE" }
            });
        }
        LabelDataService.prototype.retrieveAllLabels = function () {
            return this.resource.query();
        };
        LabelDataService.prototype.updateLabel = function (label) {
            return this.resource.save({ id: label.Id }, label);
        };
        LabelDataService.prototype.addColor = function (label) {
            this.resource.create(label);
            return this.resource.query();
        };
        return LabelDataService;
    }());
    LabelApplication.LabelDataService = LabelDataService;
})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labeldataservice.js.map