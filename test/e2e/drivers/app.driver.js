export class AppDriver {

  given = {};

  when = {
    navigate: (path = 'http://localhost:3100/') => {
      browser.get(path);
      return this;
    },
    increaseCounterValue: () => {
      this.get.incrementButton().click();
      return this;
    }
  };

  get = {
    incrementButton: () => $(`[data-hook="increment-button"]`),
    counterValue: () => $(`[data-hook="counter-value"]`).getText()
  };
}
