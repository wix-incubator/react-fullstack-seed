import 'jsdom-global/register';
import {expect} from 'chai';
import React from 'react';
import {mount} from 'enzyme';
import Counter from './Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import counter from '../../reducers';

class CounterDriver {
  when = {
    created: () => {
      const store = createStore(counter);
      this.component = mount(
        <Provider store={store}>
          <Counter/>
        </Provider>
      );
      return this;
    },
    increment: () => {
      this.get.incrementButton().simulate('click');
      return this;
    },
    decrement: () => {
      this.get.decrementButton().simulate('click');
      return this;
    }
  }

  get = {
    incrementButton: () => this.component.find('.increment-button'),
    decrementButton: () => this.component.find('.decrement-button'),
    count: () => parseInt(this.component.find('p').text(), 10)
  }
}

describe('Counter container component', () => {
  let driver;
  let cleanup;

  beforeEach(() => cleanup = require('jsdom-global')());

  beforeEach(() => {
    driver = new CounterDriver();
    driver.when.created();
  });

  afterEach(() => cleanup());

  it('should display count', () => {
    expect(driver.get.count()).to.equal(0);
  });

  it('should increment', () => {
    driver.when.increment();
    expect(driver.get.count()).to.equal(1);
  });

  it('should decrement', () => {
    driver.when.decrement();
    expect(driver.get.count()).to.equal(-1);
  });
});
