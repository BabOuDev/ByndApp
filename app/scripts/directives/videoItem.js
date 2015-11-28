'use strict';

/**
 * @ngdoc function
 * @name BeyondApp.directives:videoItem
 * @description
 * # videoItem
 * Directive for each video item in the playlist
 */
angular.module('BeyondApp')
  .directive('videoItem', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/templates/videoItem.html',
			scope:false,			
		};
	});
