var app = angular.module('pcapApp', ['ui.router']);

app.config(function ($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'templates/main.html'
	});
});

app.directive('header',function(){
	return {
		templateUrl:'templates/header.html',
		restrict: 'E',
		replace: true,
	}
});