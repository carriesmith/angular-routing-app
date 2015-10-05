// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])
// configure routes
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      // route for the home page
      .when('/', {
        templateUrl : 'views/pages/home.html',
        controller : 'homeController',
        controllerAs: 'home'
      }) // close .when home
      // route for about page
      .when('/about', {
        templateUrl : 'views/pages/about.html',
        controller : 'aboutController',
        controllerAs : 'about'
      }) // close .when about
      // route for the contact page
      .when('/contact', {
        templateUrl : 'views/pages/contact.html',
        controller : 'contactController',
        controllerAs : 'contact'
      }); // close .when contact

      // *** HTML5 history API is a standardized way to manipulate the browser history
      // using a script. This allows Angular to change the routing and URLS
      // of our pages without refreshing the page ???
      // Prevents default route URLs with hashtag, e.g. http://example.com/#/about
      $locationProvider.html5Mode(true);

  }); // close .config