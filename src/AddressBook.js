
//Aadressiraamat
function AddressBook() {
    //Kontaktide list
    this.contacts = [];
    //vaikimisi vale
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function (cb) {

    // Et saaks kasutada this-i praeguse hetke väärtust ka hiljem(this väärtus muutub pidevalt),
    // tuleb määrata see muutuja väärtusena
    var self = this;


    setTimeout(function () {

        // Kui kõik õige muudetakse initialComplete true'ks
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    })
};

//addContact lisab kontakti kontaktide listi
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
};

//getContact leiab id'ga kontakti listist
AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
};

//deleteContact kustutab kontakti listist id järgi
AddressBook.prototype.deleteContact = function (index) {
    this.contacts.splice(index, 1);
};