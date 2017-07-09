export interface IAppJSON {
  /**
   * the name of the app, should be unique
   */
  name: string

  /**
   * a description of the app (what does it do?)
   */
  description: string

  /**
   * keywords are like labels
   */
  keywords: string[]

  /**
   * a website for the project (has no technical aspect, just description)
   */
  website: string

  /**
   * The location of the application’s source code, such as a Git URL
   */
  respository: string

  /**
   * The URL of the application’s logo image, preferably in svg format
   */
  logo: string

  /**
   * A URL specifying where to redirect the user once their new app is deployed
   */
  successUrl: string

  /**
   * scripts that are run after the app has been deployed
   */
  scripts: IScripts

  /**
   * Env Vars that need to be set within the running container
   */
  env: IEnvVar[]
  formation: string[] // TODO

  /**
   * the actual image of the app
   */
  image: string

  addons: string[] // TODO

  buildpacks: string[] // TODO
}

export interface IScripts {
  postdeploy: string
}

export interface IEnvVar {
  name: string
  description: string
  value: string
}
