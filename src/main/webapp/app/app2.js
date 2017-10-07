
var appIngresos = angular.module('appIngre', ['ngRoute','ngAnimate', 'toastr', 'ngTable','datatables','ui.bootstrap','ui.utils']);


appIngresos.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/map.html',
        controller: 'mapController'
    })
    .when('/main', {
        templateUrl: 'Mains.html',
        controller: 'sampleController'
    })
    .when('/Alumnos', {
        templateUrl: 'app/views/Alumnos.html',
        controller: 'AlumnosController'
    })
    .when('/Tabla', {
        templateUrl: 'app/views/Tabla.html',
        controller: 'validationCtrl'
    })
    .when('/ingresos', {
        templateUrl: 'app/views/ingresos.html',
        controller: 'ingresosController'
    })
    .when('/egresos', {
        templateUrl: 'app/views/egresos.html',
        controller: 'egresosController'
    })
    .when('/registro', {
        templateUrl: 'app/views/registro.html',
        controller: 'registroController'
    })
    .when('/usuario', {
        templateUrl: 'app/views/usuario.html',
        controller: 'usuarioController'
    })
    .when('/passw', {
        templateUrl: 'app/views/contraseña.html',
        controller: 'passwordController'
    })
    .when('/Catedraticos', {
        templateUrl: 'app/views/Catedraticos.html',
        controller: 'CatedraticosController'
    })
    .when('/cursos', {
        templateUrl: 'app/views/Cursos.html',
        controller: 'cursosController'
    })
    .when('/cursosCat', {
        templateUrl: 'app/views/cursosCatedratico.html',
        controller: 'cursosCatController'
    })
    .otherwise({
            redirectTo: '/'
        });
}])
