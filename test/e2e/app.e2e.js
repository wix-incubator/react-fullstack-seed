import {AppDriver} from './drivers/app.driver';

let appDriver;

beforeEach(() => {
  appDriver = new AppDriver();
});


describe('React application', () => {
  it('should display a working counter', () => {
    appDriver
      .when.navigate();
    browser.pause();
    appDriver.when.increaseCounterValue();


    expect(appDriver.get.counterValue()).toEqual('1 Apple');
  });
});
