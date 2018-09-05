# smartapp

create, read and interact with and from app.json format

## Availabililty

[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartapp)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartapp)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartapp)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartapp/)

## Status for master

[![build status](https://GitLab.com/pushrocks/smartapp/badges/master/build.svg)](https://GitLab.com/pushrocks/smartapp/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartapp/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartapp/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartapp.svg)](https://www.npmjs.com/package/smartapp)
[![Dependency Status](https://david-dm.org/pushrocks/smartapp.svg)](https://david-dm.org/pushrocks/smartapp)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartapp/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartapp/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartapp/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartapp)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import * as smartapp from 'smartapp';
let testSmartApp = new smartapp.SmartApp();
testSmartApp.readFromJson('./myTestApp/app.json');
// do something with the app data here
testSmartApp.writeToDisk('./myTestAppAltered/app.json');
```

### The conecpt of env vars

env vars are specified a little different than you might be used to.

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
