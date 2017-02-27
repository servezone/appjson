"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-test");
const smartchai_1 = require("smartchai");
require('babel-register');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUI7QUFDckIseUNBQWtDO0FBRWxDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRXpCLDRCQUE0QjtBQUM1QiwwQ0FBeUM7QUFFekMsSUFBSSxZQUErQixDQUFBO0FBRW5DLFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFDbkIsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzdDLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN0QyxrQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMxRCxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtRQUN6QyxrQkFBTSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekQsa0JBQU0sQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFELGtCQUFNLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDckUsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsOEJBQThCLEVBQUU7UUFDakMsWUFBWSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzVDLGtCQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMxRCxNQUFNLEVBQUUsY0FBYztZQUN0QixhQUFhLEVBQUUsNkRBQTZEO1lBQzVFLFdBQVcsRUFBRSxRQUFRO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHVEQUF1RCxFQUFFO1FBQzFELFlBQVksQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUNsRCxDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsQ0FBQyxDQUFBIn0=