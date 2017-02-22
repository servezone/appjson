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
    it('should state the saveable properties', function () {
        smartchai_1.expect(testSmartApp.saveableProperties).to.include('env');
        smartchai_1.expect(testSmartApp.saveableProperties).to.include('logo');
        smartchai_1.expect(testSmartApp.saveableProperties).to.not.include('someother');
    });
    it('should understand an AppJson', function () {
        testSmartApp.readFromJson('./test/app.json');
        smartchai_1.expect(testSmartApp.foldToObject()).property('env').contain({
            'name': 'SECRET_TOKEN',
            'description': 'A secret key for verifying the integrity of signed cookies.',
            'generator': 'secret'
        });
    });
    it('should export a valid Json file from SmartApp to Disk', function () {
        testSmartApp.writeToDisk('./test/app2disk.json');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQix5Q0FBa0M7QUFFbEMsNEJBQTRCO0FBQzVCLDBDQUF5QztBQUV6QyxJQUFJLFlBQStCLENBQUE7QUFFbkMsUUFBUSxDQUFDLFVBQVUsRUFBRTtJQUNuQixFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFDN0MsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3RDLGtCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzFELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNDQUFzQyxFQUFFO1FBQ3pDLGtCQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN6RCxrQkFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUQsa0JBQU0sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNyRSxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRTtRQUNqQyxZQUFZLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDNUMsa0JBQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzFELE1BQU0sRUFBRSxjQUFjO1lBQ3RCLGFBQWEsRUFBRSw2REFBNkQ7WUFDNUUsV0FBVyxFQUFFLFFBQVE7U0FDdEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdURBQXVELEVBQUU7UUFDMUQsWUFBWSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFDLENBQUEifQ==