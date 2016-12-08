var assert = require('assert');
describe('Login to Dashboard page to logout', function() {
	it('Verify logout navigation', function() {
		browser.url('localhost:8080/login');
		browser.setValue('#logEmail', 'admin@g');
		browser.setValue('#logPass', '123123123');
		browser.click('#login-button');
		var isButtonVisible = browser.isVisible('#logout-button');
	    assert.equal(isButtonVisible, true);
	    console.log("Logout navigation verified!");
	});
}); 