import { expect, tap } from '@pushrocks/tapbundle';

// import the actual library
import * as smartapp from '../ts/index';

let testSmartApp: smartapp.SmartApp;

tap.test('should create an empty SmartApp instance', async () => {
  testSmartApp = new smartapp.SmartApp();
  expect(testSmartApp).to.be.instanceof(smartapp.SmartApp);
});

tap.test('should state the saveable properties', async () => {
  expect(testSmartApp.saveableProperties).to.include('env');
  expect(testSmartApp.saveableProperties).to.include('logo');
  expect(testSmartApp.saveableProperties).to.not.include('someother');
});

tap.test('should understand an AppJson', async () => {
  testSmartApp.readFromJson('./test/app.json');
  expect(testSmartApp.foldToObject())
    .property('env')
    .to.deep.include({
      name: 'SECRET_TOKEN',
      description: 'A secret key for verifying the integrity of signed cookies.',
      generator: 'secret'
    });
});

tap.test('should export a valid Json file from SmartApp to Disk', async () => {
  testSmartApp.writeToDisk('./test/app2disk.json');
});

tap.start();
