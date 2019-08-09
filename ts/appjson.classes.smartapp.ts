import * as plugins from './appjson.plugins';
import { Smartjson, foldDec } from '@pushrocks/smartjson';

import { IAppJSON, IEnvVar} from './appjson.interfaces';

export class AppJson extends Smartjson implements IAppJSON {

  /**
   * a description of the app (what does it do?)
   */
  @foldDec()
  public description: string;

  /**
   * the domain the app will be reached under
   */
  @foldDec()
  public domain: string;

  /**
   * Env Vars that need to be set within the running container
   */
  @foldDec()
  public env: IEnvVar[];

  /**
   * the actual image of the app
   */
  @foldDec()
  public dockerImage: string;

  /**
   * The URL of the application’s logo image, preferably in svg format
   */
  @foldDec()
  public logo: string;

  /**
   * the name of the app, should be unique
   */
  @foldDec()
  public name: string;

  /**
   * keywords are like labels
   */
  @foldDec()
  public keywords: string[];

  /**
   * The location of the application’s source code, such as a Git URL
   */
  @foldDec()
  public repository: string;


  // ===========
  // CONSTRUCTOR
  // ===========
  /**
   * the constructor for a SmartApp class
   */
  constructor(appJsonFilePathArg?: string) {
    super();
    if (appJsonFilePathArg) {
      this.readFromJson(appJsonFilePathArg);
    }
  }

  // =======
  // METHODS
  // =======
  /**
   * read data for SmartApp from Json
   */
  public readFromJson(filePathArg: string) {
    let data = plugins.smartfile.fs.toObjectSync(filePathArg);
    this.enfoldFromObject(data);
  }

  /**
   * write an representation of SmartApp to disk
   */
  public writeToDisk(filePathArg: string) {
    const fileString = JSON.stringify(this.foldToObject());
    plugins.smartfile.memory.toFsSync(fileString, filePathArg);
  }
}
