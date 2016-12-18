var assert = require('assert');
describe('Login page', function() {
	it('Validate invalid credentials', function() {
		browser.url('localhost:8080/login');
		browser.setValue('#logEmail', 'wrongemail');
		browser.setValue('#logPass', 'wrongpassword');
		browser.click('#login-button');
		var error = browser.alertText();
		browser.alertAccept();
	    assert.equal(error, 'Invalid Credentials.');
	    console.log('Invalid credentials validated!');
	    
	});
}); 