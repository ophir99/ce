angular.module('ceApp', ['ngRoute', 'ui.materialize']).config(function($routeProvider, $locationProvider){
	 
	$routeProvider.when('/',{
		templateUrl:"temps/front_page.html"
	}).when('/services',{
		templateUrl:"temps/services.html"
	}).when('/mobile-apps',{
		templateUrl:"temps/mobile_apps.html"
	}).when('/web-apps',{
		templateUrl:"temps/web_apps.html"
	}).when('/idea-product',{
		templateUrl:"temps/idea_product.html"
	}).when('/lets-meet',{
		templateUrl:"temps/lets_meet.html"
	});
	$locationProvider.html5Mode(true)
});

$(document).ready(function(){
$(".button-collapse").sideNav({
	  menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true 
});
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5
})
       
});