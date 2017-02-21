import 'typings-test'
import { expect } from 'smartchai'

// import the actual library
import * as smartapp from '../dist/index'

let testSmartApp: smartapp.SmartApp

describe('smartapp', function () {
  it('should create an empty SmartApp instance', function () {
    testSmartApp = new smartapp.SmartApp()
    expect(testSmartApp).to.be.instanceof(smartapp.SmartApp)
  })
})
