'use strict';

/**
 * @ngdoc function
 * @name BeyondApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the BeyondApp
 */
angular.module('BeyondApp')
  .controller('MainCtrl', function ($scope, $http, $sce) {
	  
		$scope.playlist = [];
		$scope.playlistLength = 5;
		$scope.lengthOptions = [5, 10, 25, 50];
		$scope.prevToken = '';
		$scope.nextToken = '';
		
		$scope.isOnDetailView = false;
		$scope.selectedItem = {};
		$scope.videoUrl = '';
		
		$scope.getPlaylist = function(callback, pageToken){
			
			var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=' + 
				$scope.playlistLength +
				'&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw' +
				( pageToken ? '&pageToken=' + pageToken : '' );
				
			$http.get(url).success(function(data) {
				$scope.playlist = data.items;
				$scope.prevToken = data.prevPageToken;
				$scope.nextToken = data.nextPageToken;
				console.log('PLAYLIST : ' + url , $scope.playlist);
				if(callback){
					callback(data);
				}
			});
		};
		
		$scope.openDetail = function(index){
			$scope.selectedItem = $scope.playlist[index];
			$scope.videoUrl = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + $scope.selectedItem.snippet.resourceId.videoId);
			$scope.isOnDetailView = true;
		};
		
		$scope.closeDetail = function(){
			$scope.selectedItem = {};
			$scope.isOnDetailView = false;
		};
		
		$scope.changeLength = function(callback){
			$scope.getPlaylist(function(){
				if(callback){
					callback();
				}
			});
		};
		
		$scope.prevPage = function(callback){
			$scope.getPlaylist(function(){
				if(callback){
					callback();
				}
			}, $scope.prevToken);
		};
		
		$scope.nextPage = function(callback){
			$scope.getPlaylist(function(){
				if(callback){
					callback();
				}
			}, $scope.nextToken);
		};
		
		$scope.getPlaylist();
  });
