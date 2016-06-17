/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="labeldataservice.ts" />
/// <reference path="labeleditor.ts" />

module LabelApplication {

    //This is the controller of the function 
    // This is like a View Model Object
    //

    export class LabelCollection {

        sequence: ng.resource.IResourceArray<ng.resource.IResource<LabelApplication.Rest.Label>>;

        //This here is sort of creating the LabelCollection Class/Object as controller  
        constructor(private $scope: ng.IScope, private service: LabelDataService) {
            this.sequence = service.retrieveAllLabels();
        }       

        //Creating the method update
        public update(label: Rest.Label) {
            this.service.updateLabel(label);
        }

        //creating the method addColor 
        public addColor() {

            var item: LabelApplication.Rest.Label = {
                Id: 6,
                Text: this._labelMessage,
                Color: this._colorValue
            }

           this.sequence = this.service.addColor(item);

        }

        //Typescript properties
        //define a private variable first  then define the get and the set
        private _colorValue: string;

        get newColorValue() {
           return this._colorValue;
        }

        set newColorValue(value: string) {
            this._colorValue = value;
        }


        //Typescript properties
        //define a private variable first  then define the get and the set
        private _labelMessage: string;

        get newLabelValue() {
           return this._labelMessage;
        }

        set newLabelValue(value: string) {
            this._labelMessage = value;
        }
    }

    //This controller is the object that  we view as the Model View Object . 

    //Pushing the LabelCollection Class/Object as controller into editorModule 
    //Registering the labelCollection controller with the module
    LabelEditor.editorModule
        .controller('labelCollection', ["$scope","labelDataService", LabelCollection]);
}