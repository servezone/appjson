# @servezone/appjson
create, read and interact with and from app.json format

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@servezone/appjson)
* [gitlab.com (source)](https://gitlab.com/servezone/appjson)
* [github.com (source mirror)](https://github.com/servezone/appjson)
* [docs (typedoc)](https://servezone.gitlab.io/appjson/)

## Status for master
[![build status](https://gitlab.com/servezone/appjson/badges/master/build.svg)](https://gitlab.com/servezone/appjson/commits/master)
[![coverage report](https://gitlab.com/servezone/appjson/badges/master/coverage.svg)](https://gitlab.com/servezone/appjson/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@servezone/appjson.svg)](https://www.npmjs.com/package/@servezone/appjson)
[![Known Vulnerabilities](https://snyk.io/test/npm/@servezone/appjson/badge.svg)](https://snyk.io/test/npm/@servezone/appjson)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

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

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://servezone.gitlab.io/assets/repo-footer.svg)](https://maintainedby.lossless.com)
