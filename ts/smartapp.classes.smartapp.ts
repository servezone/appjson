import * as plugins from './smartapp.plugins'

export interface IScripts {
  postdeploy: string
}

export interface IEnvVar {
  name: string
  description: string
  value: string
}

export class Foldable {
  saveableProperties: string[]
  /**
   * folds a class into an object
   */
  foldToObject () {
    let newFoldedObject = {}
    for (let keyName of this.saveableProperties) {
      newFoldedObject[keyName] = plugins.lodash.cloneDeep(this[keyName])
    }
    return newFoldedObject
  }

  /**
   * enfolds data from an object
   */
  enfoldFromObject (objectArg) {
    for (let keyName in objectArg) {
      if (this.saveableProperties.indexOf(keyName) !== -1) {
        this[keyName] = objectArg[keyName]
      }
    }
  }
}

let foldable = () => {
  return (target: SmartApp, key: string) => {
    console.log('called foldable')
    if (!target.saveableProperties) { target.saveableProperties = [] }
    target.saveableProperties.push(key)
  }
}


export class SmartApp extends Foldable {
  /**
   * the name of the app, should be unique
   */
  @foldable()
  name: string

  /**
   * a description of the app (what does it do?)
   */
  @foldable()
  description: string

  /**
   * keywords are like labels
   */
  @foldable()
  keywords: string[]

  /**
   * a website for the project (has no technical aspect, just description)
   */
  @foldable()
  website: string

  /**
   * The location of the application’s source code, such as a Git URL
   */
  @foldable()
  respository: string

  /**
   * The URL of the application’s logo image, preferably in svg format
   */
  @foldable()
  logo: string

  /**
   * A URL specifying where to redirect the user once their new app is deployed
   */
  @foldable()
  successUrl: string

  /**
   * scripts that are run after the app has been deployed
   */
  @foldable()
  scripts: IScripts

  /**
   * Env Vars that need to be set within the running container
   */
  @foldable()
  env: IEnvVar[]

  @foldable()
  formation: string[] // TODO

  /**
   * the actual image of the app
   */
  @foldable()
  image: string

  @foldable()
  addons: string[] // TODO

  @foldable()
  buildpacks: string[] //TODO

  /**
   * the constructor for a SmartApp class
   */
  constructor(appJsonFilePathArg?: string) {
    super()
    if (appJsonFilePathArg) {
      this.readFromJson(appJsonFilePathArg)
    }
  }

  /**
   * read data for SmartApp from Json
   */
  readFromJson (filePathArg: string) {
    let data = plugins.smartfile.fs.toObjectSync(filePathArg)
    this.enfoldFromObject(data)
  }

  /**
   * write an representation of SmartApp to disk
   */
  writeToDisk (filePathArg: string) {
    let fileString = JSON.stringify(this.foldToObject())
    plugins.smartfile.memory.toFsSync(fileString,filePathArg)
  }

}
