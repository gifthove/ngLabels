/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeldataservice.ts" />
/// <reference path="labeleditor.ts" />
var LabelApplication;
(function (LabelApplication) {
    //This is the controller of the function 
    // This is like a View Model Object
    //
    var LabelCollection = (function () {
        //This here is sort of creating the LabelCollection Class/Object as controller  
        function LabelCollection($scope, service) {
            this.$scope = $scope;
            this.service = service;
            this.sequence = service.retrieveAllLabels();
        }

        //Creating the method update
        LabelCollection.prototype.update = function (label) {
            this.service.updateLabel(label);
        };

        //creating the method addColor 
        LabelCollection.prototype.addColor = function () {
            var item = {
                Id: 6,
                Text: this._labelMessage,
                Color: this._colorValue
            };
            this.sequence = this.service.addColor(item);
        };


        Object.defineProperty(LabelCollection.prototype, "newColorValue", {

            get: function () {
                return this._colorValue;
            },

            set: function (value) {
                this._colorValue = value;
            },

            enumerable: true,
            configurable: true
        });


        Object.defineProperty(LabelCollection.prototype, "newLabelValue", {
            get: function () {
                return this._labelMessage;
            },
            set: function (value) {
                this._labelMessage = value;
            },
            enumerable: true,
            configurable: true
        });
        return LabelCollection;
    }());


    LabelApplication.LabelCollection = LabelCollection;

    //This controller is the object that  we view as the Model View Object . 
    //Pushing the LabelCollection Class/Object as controller into editorModule 
    //Registering the labelCollection controller with the module
    LabelApplication.LabelEditor.editorModule
        .controller('labelCollection', ["$scope", "labelDataService", LabelCollection]);

})(LabelApplication || (LabelApplication = {}));
//# sourceMappingURL=labelCollection.js.map