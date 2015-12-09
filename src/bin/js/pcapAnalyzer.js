var app = angular.module('pcapApp', ['ui.router', 'ngTouch', 'ui.grid', 'ngFileUpload']);


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

app.controller('NavCtrl', ['$rootScope', '$scope', '$http', 'modal', '$interval', function ($rootScope, $scope, $http, modal, $interval) {
	var myModal = new modal();
 
  $scope.hideGrid = true;
 
  $rootScope.gridOptions = {
    onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
 
      // call resize every 200 ms for 2 s after modal finishes opening - usually only necessary on a bootstrap modal
      $interval( function() {
        $scope.gridApi.core.handleWindowResize();
      }, 10, 500);
      }
  };
 
  $rootScope.gridOptions.data = [
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	},
	{
		'VLANName': 'LibreOff/Prezi',
		'fileName': 'LibreOff/Prezi_50_8122015_logs.pcap',
		'reportDate': '8/12/2015 16:25'
	}
	];

  $scope.showModal = function() {
    myModal.open();
  };
}]);

app.factory('modal', ['$compile', '$rootScope', function ($compile, $rootScope) {
  return function() {
    var elm;
    var modal = {
      open: function() {
 
        var html = '<div class="modal" ng-style="{{modalStyle}}"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"></div><div class="modal-body"><div id="grid12" ui-grid="gridOptions" class="grid"></div></div><div class="modal-footer"><button id="buttonClose" class="btn btn-primary" ng-click="close()">Close</button></div></div></div></div>';
        elm = angular.element(html);
        angular.element(document.body).prepend(elm);
 
        $rootScope.close = function() {
          modal.close();
        };
        
        $rootScope.modalStyle = {"display": "block"};
 
        $compile(elm)($rootScope);
      },
      close: function() {
        if (elm) {
          elm.remove();
        }
      }
    };
 
    return modal;
  };
}]);