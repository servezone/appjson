export interface IScripts {
    postdeploy: string;
}
export declare class Smartapp {
    name: string;
    description: string;
    keywords: string[];
    website: string;
    respository: string;
    logo: string;
    successUrl: string;
    scripts: IScripts;
    env: string[];
    formation: string[];
    image: string;
    addons: string[];
    buildpacks: string[];
    constructor();
    readFromJson(filePathArg: string): void;
    writeToDisk(filePathArg: string): void;
}
