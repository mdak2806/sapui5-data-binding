sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/BindingMode"
], (UIComponent, BindingMode) => {
	"use strict";

	return UIComponent.extend("ui5.sapui5databinding.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		// BELOW NOT REQUIRED ANYMORE AS DONT WANT TO SET ONE-WAY DATA BINDING
		// init(){
		// 	// call the init function of the parent
		// 	UIComponent.prototype.init.apply(this, arguments);
		// 	// Set the default binding mode for the model to OneWay
		// 	this.getModel().setDefaultBindingMode(BindingMode.OneWay);
		// }
	});
});