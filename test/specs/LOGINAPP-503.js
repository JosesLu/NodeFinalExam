var assert = require('assert');
describe('Dashboard Create', function() {
	it('Create Function', function() {
		browser.url('localhost:8080/login');
		browser.setValue('#logEmail', 'admin@g');
		browser.setValue('#logPass', '123123123');
		browser.click('#login-button');
		browser.click('#create');
		var tabIds = browser.getTabIds();
		browser.switchTab(tabIds[1]);
		browser.setValue('#regEmail', 'user@g');
		browser.setValue('#regPass', '123123123');
		browser.setValue('#regConfPass', '123123123');
		browser.click('#register-button');
		var message = browser.alertText();
		assert.equal(message, 'Registration complete.');
	 	browser.alertAccept();
		browser.refresh(); 

	    console.log("Successfuly created User!");
	});
}); 