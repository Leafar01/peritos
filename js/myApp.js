var varApp=angular.module('miAppRouter',['ngRoute', 'ngAnimate','ui.bootstrap']);

varApp.config(function($routeProvider) {
$routeProvider
.when("/who", {
templateUrl : "pages/who.html",
controller : "controllerWho"
})
.when("/offer", {
templateUrl : "pages/offer.html",
controller : "controllerOffer"
})
.when("/client", {
templateUrl : "pages/client.html",
controller : "controllerClient"
})
.when("/catalog", {
templateUrl : "pages/catalog.html",
controller : "controllerCatalog"
})
.when("/contact", {
templateUrl : "pages/contact.html",
controller : "controllerContact"
})
.when("/legal", {
templateUrl : "pages/legal.html",
controller : "controllerLegal"
})
.when("/", {
templateUrl : "pages/main.html",
controller : "controllerMain"
})
.otherwise({ reditrectTo : "/" });
});

varApp.controller("controllerWho", function ($scope){
$scope.nombre = 'Quienes Somos'});
varApp.controller("controllerOffer", function ($scope){
$scope.nombre = 'Que Ofrecemos'});
varApp.controller("controllerClient", function ($scope){
$scope.nombre = 'Clientes'});
varApp.controller("controllerCatalog", function ($scope){
$scope.nombre = 'Catalogo'});
varApp.controller("controllerContact", function ($scope){
$scope.nombre = 'Contacto'});
varApp.controller("controllerLegal", function ($scope){
$scope.nombre = 'legal'});
varApp.controller("controllerMain", function ($scope){
$scope.nombre = 'Peritaciones rápidas, con calidad y a un buen precio'});


varApp.controller('formCtrl', function ($scope) {
            $scope.agregar = function (nuevo) {
                if (form1.$valid) {
                    $scope.mensaje = nuevo.nombre + "(" + nuevo.email + ")" + nuevo.politica;
                } else {
                    $scope.mostrarValidacion = true;
                }
            };
            $scope.mensajeError = function (error) {
                if (angular.isDefined(error)) {
                    if (error.inputEmail3) {
                        return "Introduce un mail válido";
                    } else if (error.required){
                        return "Campo obligario";
                    }
                }
            }
        });

varApp.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = true;
});