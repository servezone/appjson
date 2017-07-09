import * as plugins from './smartapp.plugins'
import { Foldable, foldDec } from 'smartjson'

import { IAppJSON, IEnvVar, IScripts } from './smartapp.interfaces'

export class SmartApp extends Foldable implements IAppJSON {
  /**
   * the name of the app, should be unique
   */
  @foldDec()
  name: string

  /**
   * a description of the app (what does it do?)
   */
  @foldDec()
  description: string

  /**
   * keywords are like labels
   */
  @foldDec()
  keywords: string[]

  /**
   * a website for the project (has no technical aspect, just description)
   */
  @foldDec()
  website: string

  /**
   * The location of the application’s source code, such as a Git URL
   */
  @foldDec()
  respository: string

  /**
   * The URL of the application’s logo image, preferably in svg format
   */
  @foldDec()
  logo: string

  /**
   * A URL specifying where to redirect the user once their new app is deployed
   */
  @foldDec()
  successUrl: string

  /**
   * scripts that are run after the app has been deployed
   */
  @foldDec()
  scripts: IScripts

  /**
   * Env Vars that need to be set within the running container
   */
  @foldDec()
  env: IEnvVar[]

  @foldDec()
  formation: string[] // TODO

  /**
   * the actual image of the app
   */
  @foldDec()
  image: string

  @foldDec()
  addons: string[] // TODO

  @foldDec()
  buildpacks: string[] // TODO

  /**
   * the constructor for a SmartApp class
   */
  constructor (appJsonFilePathArg?: string) {
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
