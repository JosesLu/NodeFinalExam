var assert = require('assert');
describe('Registration page', function() {
	it('Verify successful registration', function() {
		browser.url('localhost:8080/register');	
		browser.setValue('#regEmail', 'user@g');
		browser.setValue('#regPass', '123123123');
		browser.setValue('#regConfPass', '123123123');
		browser.click('#register-button');
		browser.alertAccept();
		browser.refresh();   
	    console.log("Successful registration verified!");
	});
}); 