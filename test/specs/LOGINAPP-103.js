var assert = require('assert');
describe('Login page', function() {
	it('Verify login form', function() {
		browser.url('localhost:8080/');
		browser.click('#login-button');
		var url = browser.getUrl();
	    assert.equal(url, 'http://localhost:8080/login');
	    console.log('Login form verified!');  
	});
}); 