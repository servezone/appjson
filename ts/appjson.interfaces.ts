export interface IAppJSON {
  /**
   * Env Vars that need to be set within the running container
   */
  env: IEnvVar[];

  /**
   * a description of the app (what does it do?)
   */
  description: string;

  /**
   * the domain that the app will be available from
   */
  domain: string;

  /**
   * the actual image of the app
   */
  dockerImage: string;

  /**
   * the name of the app, should be unique
   */
  name: string;

  /**
   * keywords are like labels
   */
  keywords: string[];

  /**
   * The URL of the application’s logo image, preferably in svg format
   */
  logo: string;

  /**
   * The location of the application’s source code, such as a Git URL
   */
  repository: string;
}

export interface IEnvVar {
  name: string;
  description: string;
  value?: string;
  generator?: string;
}
