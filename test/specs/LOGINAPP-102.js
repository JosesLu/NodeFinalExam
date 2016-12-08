var assert = require('assert');
describe('Index page', function() {
	it('Verify page description', function() {
		browser.url('localhost:8080/');
		var isExisting;
	    isExisting = browser.isExisting('#description');
	    assert.equal(isExisting, true);
	    console.log('Page-description verified!');
	});
}); 