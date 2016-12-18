var assert = require('assert');
describe('Register page', function() {
	it('Verify empty fields', function() {
		browser.url('localhost:8080/register');	
		browser.click('#register-button');
		var error = browser.alertText();
	    assert.equal(error, 'All fields require input.');
	    console.log('Empty fields verified!');
	});
}); 