angular
	.module('app')
		.controller('skillSetsCtrl', ['$scope', 'skillsets', function($scope, skillsets){
			$scope.h1Heading = "Skill Sets...";
			$scope.skillsets = skillsets;
		}])