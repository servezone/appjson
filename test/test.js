"use strict";
require("typings-test");
const smartchai_1 = require("smartchai");
// import the actual library
const smartapp = require("../dist/index");
let testSmartApp;
describe('smartapp', function () {
    it('should create an empty SmartApp instance', function () {
        testSmartApp = new smartapp.SmartApp();
        smartchai_1.expect(testSmartApp).to.be.instanceof(smartapp.SmartApp);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQix5Q0FBa0M7QUFFbEMsNEJBQTRCO0FBQzVCLDBDQUF5QztBQUV6QyxJQUFJLFlBQStCLENBQUE7QUFFbkMsUUFBUSxDQUFDLFVBQVUsRUFBRTtJQUNuQixFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFDN0MsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3RDLGtCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzFELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==