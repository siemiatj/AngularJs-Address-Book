app.controller('ContactsController', [
    '$scope', '$location', 'contactsService',
    function ($scope, $location, contactsService) {
        $scope.contacts = contactsService.getContacts();

        $scope.editContact = function (id) {
            $location.path('/edit-contact/' + id);
        };

        $scope.showDetails = function (id) {
            var el = angular.element(document.getElementById('#ct-details-' + id));
            el.toggleClass('details-hidden');
        }
    }
]);

app.controller('ContactAddController', [
    '$scope', '$location', 'contactsService',
    function ($scope, $location, contactsService) {
        $scope.insertContact = function () {
            contactsService.addContact($scope.contact);
            $scope.contact = contactsService.resetContact();
            $location.path('/contacts');
        };
    }
]);

app.controller('ContactEditController', [
    '$scope', '$routeParams', '$location', 'contactsService',
    function ($scope, $routeParams, $location, contactsService) {
        var contactId = $routeParams.contactId ? parseInt($routeParams.contactId, 10) : 0;
        $scope.contact = contactsService.getContact(contactId, true);

        $scope.editContact = function() {
            contactsService.editContact($scope.contact);
            $scope.contact = contactsService.resetContact();
            $location.path('/contacts');
        };
    }
]);
