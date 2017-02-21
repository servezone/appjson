import * as plugins from './smartapp.plugins'


export interface IScripts {
    postdeploy: string
}

export interface IEnvVar {
    name: string
    description: string
    value: string
}

export class Smartapp {
    name: string
    description: string
    keywords: string[]
    website: string
    respository: string
    logo: string
    successUrl: string
    scripts: IScripts
    env: IEnvVar[] // TODO
    formation: string[] // TODO
    image: string
    addons: string[] // TODO
    buildpacks: string[] //TODO
    constructor(){}
    readFromJson(filePathArg:string){}
    writeToDisk(filePathArg:string){}

}

