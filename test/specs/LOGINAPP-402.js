var assert = require('assert');
describe('Dashboard to index page', function() {
	it('Validate successful logout', function() {
		browser.url('localhost:8080/login');
		browser.setValue('#logEmail', 'admin@g');
		browser.setValue('#logPass', '123123123');
		browser.click('#login-button');
		browser.click('#logout-button');
		var error = browser.alertText();
	    assert.equal(error, 'You have successfully logged out.');
		browser.alertAccept();
	    console.log("Successful logout validated!");
	});
}); 