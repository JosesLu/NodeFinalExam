var assert = require('assert');
describe('Dashboard Update', function() {
	it('Update Function', function() {
		browser.url('localhost:8080/login');
		browser.setValue('#logEmail', 'admin@g');
		browser.setValue('#logPass', '123123123');
		browser.click('#login-button');
		browser.click('#update');
		var tabIds = browser.getTabIds();
		browser.switchTab(tabIds[1]);
		browser.setValue('#id2up', '1');
		browser.setValue('#usn2up', 'newUser@g');

		browser.click('#update-button');
		var message = browser.alertText();
		assert.equal(message, 'Update Successful!');
		browser.alertAccept();
		browser.refresh();   

	    console.log("Successfuly updated User!");
	});
}); 