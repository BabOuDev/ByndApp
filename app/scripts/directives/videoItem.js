'use strict';


angular.module('BeyondApp')
  .directive('videoItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/templates/videoItem.html',
			scope:false,			
		};
	});
