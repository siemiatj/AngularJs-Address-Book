app.controller('ContactsController', function ($scope, $location, contactsService) {

    (function() {
        $scope.contacts = contactsService.getContacts();
    })();

    $scope.editContact = function(id) {
        $location.path('/edit-contact/'+id);
    };

    $scope.showDetails = function($event, id) {
        var el = document.getElementById('ct-details-'+id),
            cName = el.classList;

        if (cName.contains('details-hidden')) {
            cName.remove('details-hidden');
        } else {
            cName.add('details-hidden');
        }
    }
});

app.controller('ContactAddController', function ($scope, $location, contactsService) {
    $scope.insertContact = function () {
        var nC = $scope.newContact;

        var fN = nC.firstName;
        var lN = nC.lastName;
        var eA = nC.emailAddress;
        var aD = nC.address;
        var zC = nC.zipCode;
        var cT = nC.city;
        var cN = nC.country;

        contactsService.addContact(fN, lN, eA, aD, zC, cT, cN);
        nC.firstName = '';
        nC.lastName = '';
        nC.emailAddress = '';
        nC.address = '';
        nC.zipCode = '';
        nC.city = '';
        nC.country = '';

        $location.path('/contacts');
    };
});

app.controller('ContactEditController', function ($scope, $routeParams, $location, contactsService) {

    init();

    $scope.contact = {};

    init();

    function init() {       
        var contactID = ($routeParams.contactID) ? parseInt($routeParams.contactID) : 0;
            
        $scope.contact = contactsService.getContact(contactID, true);
    }

    $scope.editContact = function() {
        var c = $scope.contact;

        var fN = c.firstName;
        var lN = c.lastName;
        var eA = c.emailAddress;
        var aD = c.address;
        var zC = c.zipCode;
        var cT = c.city;
        var cN = c.country;

        contactsService.editContact($scope.contact.id, fN, lN, eA, aD, zC, cT, cN);
        c.firstName = '';
        c.lastName = '';
        c.emailAddress = '';
        c.address = '';
        c.zipCode = '';
        c.city = '';
        c.country = '';

        $location.path('/contacts');
    };
});