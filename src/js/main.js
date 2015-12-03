var app = angular.module('pcapApp', ['ui.router']);


// Routes
app.config(function ($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'templates/main.html'
	});
});

// Directives
app.directive('header',function(){
	return {
		templateUrl:'templates/header.html',
		restrict: 'E',
		replace: true,
	}
});