var assert = require('assert');
describe('Index page', function() {
	it('Verify page title', function() {
		browser.url('localhost:8080/');
		var title = browser.getTitle();
		assert.equal(title, 'Joses');
		console.log("Page Title verified!");
	});
}); 