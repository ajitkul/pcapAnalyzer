var app = angular.module('pcapApp', ['ui.router', 'ngTouch', 'ui.grid']);


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


app.controller('MainCtrl', ['$scope', function ($scope) {

	$scope.problemGrid = {
		enableSorting: false,
		columnDefs: [
		{ name: 'iP', field: 'ip' },
		{ name: 'Issue Details', field: 'issue' },
		{ name: 'Frame', field: 'frame' }
		]
	};
	$scope.problemGrid.data = [
	{
		'ip': '172.168.24.1',
		'issue': 'Communication Across VLAN',
		'frame': 'Show Frame',
	},
	{
		'ip': '172.168.24.5',
		'issue': 'Communication Across VLAN',
		'frame': 'Show Frame',
	},
	{
		'ip': '172.168.24.8',
		'issue': 'Communication Across VLAN',
		'frame': 'Show Frame',
	}
	];
}]);


app.controller('FileUploadCtrl', ['$scope', function ($scope) {

}]);