var assert = require('assert');
describe('Login page', function() {
	it('Validate empty credentials', function() {
		browser.url('localhost:8080/login');
		browser.click('#login-button');
		var error = browser.alertText();
		browser.alertAccept();
	    assert.equal(error, 'All fields require input.');
	    console.log('Empty credentials validated!');
	    
	});
}); 