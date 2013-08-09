
app.service('contactsService', function () {
    this.getContacts = function() {
        return contacts;
    };

    this.addContact = function(fN, lN, eA, aD, zC, cT, cN) {
        var nextId = contacts.length + 1;

        contacts.push({
            id: nextId,
            firstName: fN,
            lastName: lN,
            emailAddress: eA,
            address: aD,
            city: cT,
            country: cN
        });
    };

    this.editContact = function(id, fN, lN, eA, aD, zC, cT, cN) {
        var idx = this.getContact(id),
            contact = contacts[idx];

        contacts[idx] = {
            id: contact.id,
            firstName: fN,
            lastName: lN,
            emailAddress: eA,
            address: aD,
            city: cT,
            country: cN                    
        };
    };

    this.getContact = function(id, getObj) {
        for (var i=0, l=contacts.length; i<l; i+=1) {
            if (contacts[i].id === id) {
                return getObj ? contacts[i] : i;

                break;
            }
        }        
    };

    var contacts = [
        {
            id: 0, 
            firstName: 'John', 
            lastName: 'Smith', 
            address: 'Baywatch Dr. 547.', 
            city: 'Orlando',
            country: 'USA',
            zipCode: '05100',
            emailAddress: 'john43@yahoo.com'
        },
        {
            id: 1, 
            firstName: 'Mike', 
            lastName: 'Smith', 
            address: '459 5th Av.', 
            city: 'New York',
            country: 'USA',
            zipCode: '03335',
            emailAddress: 'mikes5@gmail.com'           
        }
    ];

});