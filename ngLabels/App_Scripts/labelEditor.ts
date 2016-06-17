/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
module LabelApplication {

    //Creating a LabelEditor Class translates to a ==> function
    export class LabelEditor {
        //Creating a static angular Module
        static editorModule = angular.module('labelEditor', ['ngResource']); 
    }
}