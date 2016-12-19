var assert = require('assert');
describe('Dashboard Delete', function() {
	it('Delete Function', function() {
		browser.url('localhost:8080/login');
		browser.setValue('#logEmail', 'admin@g');
		browser.setValue('#logPass', '123123123');
		browser.click('#login-button');
		browser.click('#delete');
		var tabIds = browser.getTabIds();
		browser.switchTab(tabIds[1]);
		browser.setValue('#id2del', '1');
		

		browser.click('#delete-button');
		browser.alertAccept();
		browser.refresh();   

	    console.log("Successfuly deleted User!");
	});
}); 