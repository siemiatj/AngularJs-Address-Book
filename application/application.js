var app = angular.module('addressBook', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/contacts',
            {
                controller: 'ContactsController',
                templateUrl: './application/templates/contacts.html'
            })
        .when('/add-contact',
            {
                controller: 'ContactAddController',
                templateUrl: './application/templates/addContact.html'
            })
        .when('/edit-contact/:contactID',
            {
                controller: 'ContactEditController',
                templateUrl: './application/templates/editContact.html'
            })
        .otherwise({ redirectTo: '/contacts' });
});




