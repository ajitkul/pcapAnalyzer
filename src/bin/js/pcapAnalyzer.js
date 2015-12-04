var app = angular.module('pcapApp', ['ui.router']);


// Routes
app.config(function ($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'templates/main.html'
	});

	$stateProvider.state('newreport', {
		url: '/newreport',
		templateUrl: 'templates/newreport.html'
	});

	$stateProvider.state('previousreports', {
		url: '/previousreports',
		templateUrl: 'templates/previousreports.html'
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

app.directive('footer',function(){
	return {
		templateUrl:'templates/footer.html',
		restrict: 'E',
		replace: true,
	}
});

 app.directive('stats',function() {
    	return {
  		templateUrl:'templates/stats.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comments': '@',
        'number': '@',
        'name': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'goto':'@'
  		}
  		
  	}
  });
