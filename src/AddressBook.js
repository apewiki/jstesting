function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;
}

AddressBook.prototype.add = function(contact) {
	this.contacts.push(contact);
};

AddressBook.prototype.getLastContact = function() {
	var len = this.contacts.length;
	var c = null;
	if (len > 0) {
		c = this.contacts[len - 1];
	}
	return c;
};

AddressBook.prototype.delete = function() {
	var len = this.contacts.length;
	if (len > 0) {
		this.contacts.pop();
	}
};

AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;

	setTimeout(function() {
		//Important use self here not this!!!
		self.initialComplete = true;
		if (cb) {
			console.log("cb is called!" + this.initialComplete);
			return cb();
		}
	}, 3);
};

AddressBook.prototype.getContactAt = function(index) {
	var len = this.contacts.length;
	var c = null;
	if (index < len) {
		return this.contacts[index];
	}
};