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
    /**
     * folds a class into an object
     */
    foldToObject() {
        let newFoldedObject = {};
        for (let keyName of this.saveableProperties) {
            newFoldedObject[keyName] = plugins.lodash.cloneDeep(this[keyName]);
        }
        return newFoldedObject;
    }
    /**
     * enfolds data from an object
     */
    enfoldFromObject(objectArg) {
        for (let keyName in objectArg) {
            if (this.saveableProperties.indexOf(keyName) !== -1) {
                this[keyName] = objectArg[keyName];
            }
        }
    }
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
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "name", void 0);
__decorate([
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "description", void 0);
__decorate([
    foldable(),
    __metadata("design:type", Array)
], SmartApp.prototype, "keywords", void 0);
__decorate([
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "website", void 0);
__decorate([
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "respository", void 0);
__decorate([
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "logo", void 0);
__decorate([
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "successUrl", void 0);
__decorate([
    foldable(),
    __metadata("design:type", Object)
], SmartApp.prototype, "scripts", void 0);
__decorate([
    foldable(),
    __metadata("design:type", Array)
], SmartApp.prototype, "env", void 0);
__decorate([
    foldable(),
    __metadata("design:type", Array)
], SmartApp.prototype, "formation", void 0);
__decorate([
    foldable(),
    __metadata("design:type", String)
], SmartApp.prototype, "image", void 0);
__decorate([
    foldable(),
    __metadata("design:type", Array)
], SmartApp.prototype, "addons", void 0);
__decorate([
    foldable(),
    __metadata("design:type", Array)
], SmartApp.prototype, "buildpacks", void 0);
exports.SmartApp = SmartApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRhcHAuY2xhc3Nlcy5zbWFydGFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0YXBwLmNsYXNzZXMuc21hcnRhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQVk3QztJQUVFOztPQUVHO0lBQ0gsWUFBWTtRQUNWLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQTtRQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzVDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNwRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQTtJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBRSxTQUFTO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUF2QkQsNEJBdUJDO0FBRUQsSUFBSSxRQUFRLEdBQUc7SUFDYixNQUFNLENBQUMsQ0FBQyxNQUFnQixFQUFFLEdBQVc7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUE7UUFBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBR0QsY0FBc0IsU0FBUSxRQUFRO0lBc0VwQzs7T0FFRztJQUNILFlBQVksa0JBQTJCO1FBQ3JDLEtBQUssRUFBRSxDQUFBO1FBQ1AsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFFLFdBQW1CO1FBQy9CLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFFLFdBQW1CO1FBQzlCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUE7UUFDcEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0NBRUY7QUEzRkM7SUFEQyxRQUFRLEVBQUU7O3NDQUNDO0FBTVo7SUFEQyxRQUFRLEVBQUU7OzZDQUNRO0FBTW5CO0lBREMsUUFBUSxFQUFFOzswQ0FDTztBQU1sQjtJQURDLFFBQVEsRUFBRTs7eUNBQ0k7QUFNZjtJQURDLFFBQVEsRUFBRTs7NkNBQ1E7QUFNbkI7SUFEQyxRQUFRLEVBQUU7O3NDQUNDO0FBTVo7SUFEQyxRQUFRLEVBQUU7OzRDQUNPO0FBTWxCO0lBREMsUUFBUSxFQUFFOzt5Q0FDTTtBQU1qQjtJQURDLFFBQVEsRUFBRTs7cUNBQ0c7QUFHZDtJQURDLFFBQVEsRUFBRTs7MkNBQ1E7QUFNbkI7SUFEQyxRQUFRLEVBQUU7O3VDQUNFO0FBR2I7SUFEQyxRQUFRLEVBQUU7O3dDQUNLO0FBR2hCO0lBREMsUUFBUSxFQUFFOzs0Q0FDUztBQXBFdEIsNEJBZ0dDIn0=