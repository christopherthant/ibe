// spec.js
describe('Protractor IBE TEst', function() {
  it('should have a title', function() {
    browser.get('http://localibe20:81/');

    expect(browser.getTitle()).toEqual('IBE 2.0');
  });
});