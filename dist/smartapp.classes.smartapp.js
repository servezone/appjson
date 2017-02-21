"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const plugins = require("./smartapp.plugins");
class Foldable {
}
exports.Foldable = Foldable;
let foldable = () => {
    return (target, key) => {
        console.log('called foldable');
        if (!target.saveableProperties) {
            target.saveableProperties = [];
        }
        target.saveableProperties.push(key);
    };
};
class SmartApp extends Foldable {
    /**
     * the constructor for a SmartApp class
     */
    constructor(appJsonFilePathArg) {
        super();
        if (appJsonFilePathArg) {
            this.readFromJson(appJsonFilePathArg);
        }
    }
    /**
     * read data for SmartApp from Json
     */
    readFromJson(filePathArg) {
        let data = plugins.smartfile.fs.toObjectSync(filePathArg);
        console.log(data);
    }
    /**
     * write an representation of SmartApp to disk
     */
    writeToDisk(filePathArg) {
        // plugins.smartfile.memory.toFsSync()
    }
}
__decorate([
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "name", void 0);
exports.SmartApp = SmartApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhcHAuY2xhc3Nlcy5zbWFydGFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0YXBwLmNsYXNzZXMuc21hcnRhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQWE3QztDQUVDO0FBRkQsNEJBRUM7QUFFRCxJQUFJLFFBQVEsR0FBRztJQUNiLE1BQU0sQ0FBQyxDQUFDLE1BQWdCLEVBQUUsR0FBVztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtRQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNyQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFHRCxjQUFzQixTQUFRLFFBQVE7SUEwRHBDOztPQUVHO0lBQ0gsWUFBWSxrQkFBMkI7UUFDckMsS0FBSyxFQUFFLENBQUE7UUFDUCxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsV0FBbUI7UUFDOUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFdBQW1CO1FBQzdCLHNDQUFzQztJQUN4QyxDQUFDO0NBRUY7QUE5RUM7SUFEQyxRQUFRLEVBQUU7O3NDQUNDO0FBTGQsNEJBbUZDIn0=