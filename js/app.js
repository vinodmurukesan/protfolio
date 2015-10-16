angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/about-me');


		$stateProvider

			.state('about-me', {
				url: '/about-me',
				templateUrl: 'about-me.html',
				controller: 'aboutMeCtrl'
			})

			.state('skill-sets', {
				url: '/skill-sets',
				templateUrl: 'skill-sets.html',
				controller: 'skillSetsCtrl',
				resolve: {
					skillsets: ['$http', function($http){
						return $http.get('/js/skill-sets.json').then(function(response){
							return response.data;
						})
					}]
				}
			})

			.state('projects', {
				url: '/projects',
				templateUrl: 'projects.html',
				controller: 'projectsCtrl'
			})

			.state('examples', {
				url: '/examples',
				templateUrl: 'examples.html',
				controller: 'examplesCtrl'
			})

			.state('contact-me', {
				url: '/contact-me',
				templateUrl: 'contact-me.html',
				controller: 'contactMeCtrl'
			})

	}])

	.directive('isActiveNav', [ '$location', function($location) {
		return {
		 restrict: 'A',
		 link: function(scope, element) {
		   scope.location = $location;
		   scope.$watch('location.path()', function(currentPath) {
		   	//alert('#' + currentPath + " === " + element[0].attributes['href'].nodeValue);
		     if('#' + currentPath === element[0].attributes['href'].nodeValue) {
		       element.parent().addClass('active');
		     } else {
		       element.parent().removeClass('active');
		     }

		     setTimeout(function(){
				if($('header nav ul li ul li').hasClass('active')){
					$('header nav ul li ul li.active').parents('li').addClass('active');
				}
			}, 100);

		   });
		 }
		 };
	}]);

$(document).ready(function(){
	function contentHeight(){
		setTimeout(function(){
			$('main > section').css('min-height', $(window).height() - ($('header').height() + $('footer').height() + 40));
		}, 1);
	}
	contentHeight();

	$(window).resize(function(){
		contentHeight();
	});
	
});
