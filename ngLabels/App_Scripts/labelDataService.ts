/// <reference path="label.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />

//Aan object that we will use to go back forth the server
module LabelApplication {

    //Importing the Sub Module
    import Rest = LabelApplication.Rest;

    //Importing ng.resource
    import ngr = ng.resource;

    LabelEditor.editorModule.factory('labelDataService', ['$resource', (r) => {
        return new LabelDataService(r);
    }]);

    //Extending the ngr.IResourceClass < ngr.IResource < Rest.Label >> by creating a new interface
    //So interfaces impliments other interfaces by using the EXTENDS keyword.
    interface ILabelResourceClass extends ngr.IResourceClass<ngr.IResource<Rest.Label>> {
        create(label: Rest.Label);
    }


    //exporting because we are going to be using it in other modules
    export class LabelDataService {

        private resource: ILabelResourceClass;

        constructor($resource: ngr.IResourceService) {

            //Casting the object to  ILabelResourceClass using the <>
            this.resource   = <ILabelResourceClass> $resource("/api/Labels/:id", { id: "@id" },
                {
                    get: { method: "GET" },
                    save: { method: "PUT" },
                    create: { method: "POST" },
                    query: { method: "GET", isArray: true },
                    delete: { method: "DELETE" }
                });
        }

        public retrieveAllLabels() {
            return this.resource.query();
        }

        public updateLabel(label: Rest.Label) {
            return this.resource.save({ id: label.Id }, label);
        }

        public addColor(label: Rest.Label) {
            this.resource.create(label);
            return this.resource.query();
        }
    }
}
 