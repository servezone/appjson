"use strict";
const plugins = require("./smartapp.plugins");
class SmartApp {
    /**
     * the constructor for a SmartApp class
     */
    constructor(appJsonFilePathArg) {
        if (appJsonFilePathArg) {
            this.readFromJson(appJsonFilePathArg);
        }
    }
    /**
     * read data for SmartApp from Json
     */
    readFromJson(filePathArg) {
        plugins.smartfile.fs.toObjectSync(filePathArg);
    }
    /**
     * write an representation of SmartApp to disk
     */
    writeToDisk(filePathArg) {
        // plugins.smartfile.memory.toFsSync()
    }
}
exports.SmartApp = SmartApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhcHAuY2xhc3Nlcy5zbWFydGFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0YXBwLmNsYXNzZXMuc21hcnRhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE2QztBQWE3QztJQXlERTs7T0FFRztJQUNILFlBQWEsa0JBQTJCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBRSxXQUFtQjtRQUMvQixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFFLFdBQW1CO1FBQzlCLHNDQUFzQztJQUN4QyxDQUFDO0NBRUY7QUFoRkQsNEJBZ0ZDIn0=