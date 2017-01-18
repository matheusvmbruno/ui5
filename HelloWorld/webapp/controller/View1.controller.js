sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
    
], function(Controller, MessageToast, JSONModel) {
	"use strict";
	
	return Controller.extend("HelloWorld.controller.View1", {
		onInit : function () {
	     // set data model on view
	     var oData = {
	        recipient : {
	           name : "World"
	        }
	     };
	     var oModel = new JSONModel(oData);
	     this.getView().setModel(oModel);
        },
		
		onShowHello : function () {
			var input = this.getView().byId("inputName");
	    	MessageToast.show("Voce digitou: " + input.getValue());
	    }
	});
});