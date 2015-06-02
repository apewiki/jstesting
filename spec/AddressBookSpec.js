describe ("AddressBook", function() {
	var addressBook;
	var contact;

	beforeEach(function() {
		addressBook = new AddressBook();
		contact = new Contact();
	});


	it("should be able to add a contact", function() {
		addressBook.add(contact);
		expect(addressBook.getLastContact()).toBe(contact);
	});

	it("should be able to delete a contact", function() {
		addressBook.add(contact);
		addressBook.delete();

		expect(addressBook.getLastContact()).toBe(null);
	});


});

describe ("Asynch Address Book", function() {
	var addressBook;
	var contact;

	addressBook = new AddressBook();
	contact = new Contact();

	beforeEach(function(done) {

		addressBook.getInitialContacts(function() {
			done();
		});
	});

	it("should be able to retrieve contacts asynchronously", function(done) {

		expect(addressBook.initialComplete).toBe(true);
		done();
	});


});