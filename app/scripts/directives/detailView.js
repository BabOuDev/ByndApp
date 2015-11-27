'use strict';


angular.module('BeyondApp')
  .directive('detailView', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/templates/detailView.html',
			scope:false,
		};
	});
