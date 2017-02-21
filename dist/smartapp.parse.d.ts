import { SmartApp } from './smartapp.classes.smartapp';
export interface IAppJson {
}
export declare let smartAppToObject: (SmartApp: SmartApp) => IAppJson;
export declare let objectToSmartApp: () => void;
