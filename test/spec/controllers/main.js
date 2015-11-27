'use strict';

describe('Controller: MainCtrl', function () {

	// load the controller's module
	beforeEach(module('BeyondApp'));

	var MainCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope: scope
			// place here mocked dependencies
		});
	}));
  
	it('should have a MainCtrl controller defined', function() {
		expect(MainCtrl).toBeDefined();
	});
	
	it('should have an empty list at the begining', function() {
		expect(scope.playlist.length).toBe( 0 );
	});
	
	it('should have a list with 5 items after geting the playlist', function() {
		scope.getPlaylist(function(){
			expect(scope.playlist.length).toBe( 5 );
		});
	});
	
	it('should have a selected item defined when opening detail view', function() {
		scope.getPlaylist(function(){
			scope.openDetail(0);
			expect(scope.selectedItem.snippet.title).toBeDefined();
			scope.closeDetail();
			expect(scope.selectedItem.snippet.title).toBe( {} );
		});
	});
	
	it('should have a list with 10 items after changing the list length', function() {
		scope.playlistLength = 10;
		scope.changeLength(function(){
			expect(scope.playlist.length).toBe( 10 );
		});
	});
	
	it('should have a list with different items after changing page', function() {
		scope.getPlaylist(function(){
			var item = scope.playlist[0];
			expect(item).toBeDefined();
			scope.nextPage(function(){
				expect(scope.playlist[0]).notToBe( item );
			});
		});
	});
});
