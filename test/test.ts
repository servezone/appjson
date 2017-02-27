import 'typings-test'
import { expect } from 'smartchai'

require('babel-register')

// import the actual library
import * as smartapp from '../dist/index'

let testSmartApp: smartapp.SmartApp

describe('smartapp', function () {
  it('should create an empty SmartApp instance', function () {
    testSmartApp = new smartapp.SmartApp()
    expect(testSmartApp).to.be.instanceof(smartapp.SmartApp)
  })

  it('should state the saveable properties', function() {
    expect(testSmartApp.saveableProperties).to.include('env')
    expect(testSmartApp.saveableProperties).to.include('logo')
    expect(testSmartApp.saveableProperties).to.not.include('someother')
  })

  it('should understand an AppJson', function () {
    testSmartApp.readFromJson('./test/app.json')
    expect(testSmartApp.foldToObject()).property('env').contain({
      'name': 'SECRET_TOKEN',
      'description': 'A secret key for verifying the integrity of signed cookies.',
      'generator': 'secret'
    })
  })

  it('should export a valid Json file from SmartApp to Disk', function () {
    testSmartApp.writeToDisk('./test/app2disk.json')
  })

})
