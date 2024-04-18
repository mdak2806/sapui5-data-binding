sap.ui.define([
    "sap/m/library",
    "sap/ui/core/mvc/controller"
], (mobileLibrary, Controller) => {
    "use strict";

    return Controller.extend("ui5.sapui5databinding.controller.App", {

        formatMail(sFristName, sLastName){
                const oBundle = this.getView().getModel("i18n").getResourceBundle();

                return mobileLibrary.URL.normalizeEmail(
                    `${sFristName}.${sLastName}@example.com`, 
                    oBundle.getText("mailSubject", [sFristName]),
                    oBundle.getText("mailBody")
                )
        }
    })
})