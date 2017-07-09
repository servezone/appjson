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
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartapp.plugins");
const smartjson_1 = require("smartjson");
class SmartApp extends smartjson_1.Foldable {
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
        this.enfoldFromObject(data);
    }
    /**
     * write an representation of SmartApp to disk
     */
    writeToDisk(filePathArg) {
        let fileString = JSON.stringify(this.foldToObject());
        plugins.smartfile.memory.toFsSync(fileString, filePathArg);
    }
}
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", String)
], SmartApp.prototype, "name", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", String)
], SmartApp.prototype, "description", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", Array)
], SmartApp.prototype, "keywords", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", String)
], SmartApp.prototype, "website", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", String)
], SmartApp.prototype, "respository", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", String)
], SmartApp.prototype, "logo", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", String)
], SmartApp.prototype, "successUrl", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", Object)
], SmartApp.prototype, "scripts", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", Array)
], SmartApp.prototype, "env", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", Array)
], SmartApp.prototype, "formation", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", String)
], SmartApp.prototype, "image", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", Array)
], SmartApp.prototype, "addons", void 0);
__decorate([
    smartjson_1.foldDec(),
    __metadata("design:type", Array)
], SmartApp.prototype, "buildpacks", void 0);
exports.SmartApp = SmartApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhcHAuY2xhc3Nlcy5zbWFydGFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0YXBwLmNsYXNzZXMuc21hcnRhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0MseUNBQTZDO0FBSTdDLGNBQXNCLFNBQVEsb0JBQVE7SUFzRXBDOztPQUVHO0lBQ0gsWUFBYSxrQkFBMkI7UUFDdEMsS0FBSyxFQUFFLENBQUE7UUFDUCxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUUsV0FBbUI7UUFDL0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXLENBQUUsV0FBbUI7UUFDOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQTtRQUNwRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQzNELENBQUM7Q0FFRjtBQTNGQztJQURDLG1CQUFPLEVBQUU7O3NDQUNFO0FBTVo7SUFEQyxtQkFBTyxFQUFFOzs2Q0FDUztBQU1uQjtJQURDLG1CQUFPLEVBQUU7OzBDQUNRO0FBTWxCO0lBREMsbUJBQU8sRUFBRTs7eUNBQ0s7QUFNZjtJQURDLG1CQUFPLEVBQUU7OzZDQUNTO0FBTW5CO0lBREMsbUJBQU8sRUFBRTs7c0NBQ0U7QUFNWjtJQURDLG1CQUFPLEVBQUU7OzRDQUNRO0FBTWxCO0lBREMsbUJBQU8sRUFBRTs7eUNBQ087QUFNakI7SUFEQyxtQkFBTyxFQUFFOztxQ0FDSTtBQUdkO0lBREMsbUJBQU8sRUFBRTs7MkNBQ1M7QUFNbkI7SUFEQyxtQkFBTyxFQUFFOzt1Q0FDRztBQUdiO0lBREMsbUJBQU8sRUFBRTs7d0NBQ007QUFHaEI7SUFEQyxtQkFBTyxFQUFFOzs0Q0FDVTtBQXBFdEIsNEJBZ0dDIn0=