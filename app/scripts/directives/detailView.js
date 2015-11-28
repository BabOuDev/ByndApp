'use strict';

/**
 * @ngdoc function
 * @name BeyondApp.directives:detailView
 * @description
 * # detailView
 * Directive for the detail view
 */
angular.module('BeyondApp')
  .directive('detailView', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/templates/detailView.html',
			scope:false,
		};
	});
