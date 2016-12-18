var assert = require('assert');
describe('Login to Dashboard page', function() {
	it('Validate valid credentials', function() {
		browser.url('localhost:8080/login');
		browser.setValue('#logEmail', 'admin@g');
		browser.setValue('#logPass', '123123123');
		browser.click('#login-button');
		var url = browser.getUrl();
	    assert.equal(url, 'http://localhost:8080/dashboard');
	    console.log("Valid credentials validated!");
	});
}); 