var varApp=angular.module('miAppRouter',['ngRoute']);

varApp.config(function($routeProvider) {
$routeProvider
.when("/quienes", {
templateUrl : "pages/quienes.html",
controller : "controllerQuienes"
})
.when("/ofrecemos", {
templateUrl : "pages/ofrecemos.html",
controller : "controllerOfrecemos"
})
.when("/clientes", {
templateUrl : "pages/clientes.html",
controller : "controllerClientes"
})
.when("/catalogo", {
templateUrl : "pages/catalogo.html",
controller : "controllerCatalogo"
})
.when("/contacto", {
templateUrl : "pages/contacto.html",
controller : "controllerContacto"
})
.when("/", {
templateUrl : "pages/inicio.html",
controller : "controllerInicio"
})
.otherwise({ reditrectTo : "/" });
});

varApp.controller("controllerQuienes", function ($scope){
$scope.nombre = 'Quienes Somos'});
varApp.controller("controllerOfrecemos", function ($scope){
$scope.nombre = 'Que Ofrecemos'});
varApp.controller("controllerClientes", function ($scope){
$scope.nombre = 'Clientes'});
varApp.controller("controllerCatalogo", function ($scope){
$scope.nombre = 'Catalogo'});
varApp.controller("controllerContacto", function ($scope){
$scope.nombre = 'Contacto'});
varApp.controller("controllerInicio", function ($scope){
$scope.nombre = 'Peritaciones rápidas, con calidad y a un buen precio'});
