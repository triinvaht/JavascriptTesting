
//Aadressiraamat
function AddressBook() {
    //Kontaktide list
    this.contacts = [];
}

//addContact lisab kontakti kontaktide listi
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
};

//getContact leiab id'ga kontakti listist
AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
};