describe('Address Book', function () {
    //korduvkasutatavad
    //mõtekas üks kord defineerida
    var addressBook,
        thisContact;

    //korduvkasutatavad
    //mõtekas üks kord defineerida
    //nendega hakatakse testima
    beforeEach(function () {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    //kontakti lisamine listi (id järgi)
    it('should be able to add a contact', function () {
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    //kontakti kustutamine listist (id järgi)
    it('should be able to delete a contact', function () {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    });

    //test
    describe('Async Address Book', function () {
        var addressBook = new AddressBook();

        // callback tagasi ja siis saab alles testida
        beforeEach(function (done) {
            addressBook.getInitialContacts(function () {
                // Tehtud
                done();
            });
        });

        it('should grab inital contacts', function () {
            expect(addressBook.initialComplete).toBe(true);
        });
    });
});