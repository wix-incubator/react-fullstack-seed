import 'jsdom-global/register';
import {expect} from 'chai';
import nock from 'nock';
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from '../../store/configureStore';
import {getTestBaseUrl} from '../../../test/test-common';
import SiteList from './SiteList';

class SiteListDriver {

  baseUrl = getTestBaseUrl();

  given = {
    siteListValidData: () => {
      this.sites = [
        {
          id: 1,
          siteName: 'my cool site'
        }, {
          id: 2,
          siteName: 'another cool site'
        }, {
          id: 3,
          siteName: 'a different cool site'
        }];

      nock(this.baseUrl).get('/sites').reply(200, this.sites);

      return this;
    }
  };
  when = {
    created: () => {
      const store = configureStore();
      this.component = mount(
        <Provider store={store}>
          <SiteList/>
        </Provider>
      );
      return this;
    }
  }

  get = {
    mockedSites: () => this.sites,
    sites: () => this.component.find('.site')
  }
}

describe('SiteList container component', () => {
  let driver;
  let cleanup;

  beforeEach(() => cleanup = require('jsdom-global')());

  beforeEach(() => {
    driver = new SiteListDriver();
  });

  afterEach(() => cleanup());

  it('should display sites', done => {
    driver.given.siteListValidData()
      .when.created();

    setTimeout(() => {// TODO: fix
      expect(driver.get.sites().length).to.equal(3);
      expect(driver.get.sites().first().text()).to.equal(driver.get.mockedSites()[0].siteName);
      done();
    }, 1000);
  });
});
