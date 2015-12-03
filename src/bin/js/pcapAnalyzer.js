var app = angular.module('pcapApp', ['ui.router']);

app.config(function ($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		template: '<h1>Hi</h1>'
	});
});
