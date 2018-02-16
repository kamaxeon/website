angular.module( 'edosoft', [
    'ui.router',
    'templates-app',
    'templates-common'

])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {

          $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          });

        $stateProvider
            .state('home',{
                url:'/',
                views: {
                   "main": {
                      controller: 'HomeCtrl',
                      templateUrl: 'home/home_es.tpl.html'
                   }
                }
            })
            .state('info', {
                url: '/info',
                views: {
                    "main": {
                        controller: 'InfoCtrl',
                        templateUrl: 'info/info_es.tpl.html'
                    }
                }
            })
            .state('info_en', {
                    url: '/en/info',
                    views: {
                        "main": {
                            controller: 'InfoCtrl',
                            templateUrl: 'info/info_en.tpl.html'
                        }
                    }
            })
            .state('home_en', {
                url: '/en/home',
                views: {
                    "main": {
                        controller:'HomeCtrl',
                        templateUrl: 'home/home_en.tpl.html'
                    }
                }
            })
            .state('team', {
                url: '/team',
                views: {
                    "main": {
                        controller: 'TeamCtrl',
                        templateUrl: 'team/team_es.tpl.html'
                    }
                }
            })
            .state('team_en', {
                url: '/en/team',
                views: {
                    "main": {
                        controller: 'TeamCtrl',
                        templateUrl: 'team/team_en.tpl.html'
                    }
                }
            })
            .state('services', {
                url: '/services',
                views: {
                    "main": {
                        controller: 'ServicesCtrl',
                        templateUrl: 'services/services_es.tpl.html'
                    }
                }
            })
            .state('services_en', {
                url: '/en/services',
                views: {
                    "main": {
                        controller: 'ServicesCtrl',
                        templateUrl: 'services/services_en.tpl.html'
                    }
                }
            })
            .state('iplusd', {
              url: '/iplusd',
              views: {
                "main": {
                  controller: 'IplusdCtrl',
                  templateUrl: 'iplusd/iplusd_es.tpl.html'
                }
              }
            })
            .state('iplusd_en', {
              url: '/en/iplusd',
              views: {
                "main": {
                  controller: 'IplusdCtrl',
                  templateUrl: 'iplusd/iplusd_en.tpl.html'
                }
              }
            })
            .state('cif', {
              url: '/consultora-factora/',
              views: {
                "main": {
                  controller: 'CifCtrl',
                  templateUrl: 'cif/cif_es.tpl.html'
                }
              }
            })
            .state('cif_en', {
              url: '/en/cif',
              views: {
                "main": {
                  controller: 'CifCtrl',
                  templateUrl: 'cif/cif_en.tpl.html'
                }
              }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    "main": {
                        controller: 'ContactCtrl',
                        templateUrl: 'contact/contact_es.tpl.html'
                    }
                }
            })
            .state('contact_en', {
                url: '/en/contact',
                views: {
                    "main": {
                        controller: 'ContactCtrl',
                        templateUrl: 'contact/contact_en.tpl.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    "main": {
                        controller: 'AboutCtrl',
                        templateUrl: 'about/about_es.tpl.html'
                    }
                }
            })
            .state('about_en', {
                url: '/en/about',
                views: {
                    "main": {
                        controller: 'AboutCtrl',
                        templateUrl: 'about/about_en.tpl.html'
                    }
                }
            });
  })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location) {
    /*      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
   }); }*/
    })

    .controller('HomeCtrl', function HomeCtrl($scope,$window) {
        $window.scrollTo(0, 0);

    })

    .controller( 'InfoCtrl', function InfoCtrl ($scope,$window) {
        $window.scrollTo(0, 0);

    })
    .controller( 'ContactCtrl', function ContactCtrl ($scope, $window) {
        $window.scrollTo(0, 0);

    })
    .controller( 'TeamCtrl', function TeamCtrl ($scope, $window ) {
         $window.scrollTo(0, 0);
    })
    .controller( 'CifCtrl', function CifCtrl ($scope, $window ) {
      $window.scrollTo(0, 0);

    })
    .controller( 'ServicesCtrl', function ServicesCtrl ($scope, $window) {
            $window.scrollTo(0, 0);
            $scope.showgmail =  true;
            $scope.showcalendar =  false;
            $scope.showhangouts =  false;
            $scope.showgplus =  false;
            $scope.showdocs = false;
            $scope.showspreasdsheets = false;
            $scope.showforms = false;

              // Image click behaviour
              $scope.openInNewWindow = function(id){

                    switch(id) {
                      case 'show-calendar':
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  true;
                        break;
                      case 'show-hangouts':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showhangouts =  true;
                        break;
                      case 'show-gplus':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showgplus =  true;
                        break;
                      case 'show-docs':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showdocs = true;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                        $scope.showgplus =  false;
                        break;
                      case 'show-spreadsheets':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showforms = false;
                        $scope.showspreadsheets = true;
                        break;
                      case 'show-forms':
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showforms = true;
                        break;
                      default:
                        $scope.showgmail =  true;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  false;
                        $scope.showgplus =  false;
                        $scope.showdocs = false;
                        $scope.showspreadsheets = false;
                        $scope.showforms = false;
                    }

              };


    })
    .controller( 'AboutCtrl', function AboutCtrl ($scope,$window) {
    $window.scrollTo(0, 0);

    })
    .controller( 'IplusdCtrl', function IplusdCtrl ( $scope, $window) {
    $window.scrollTo(0, 0);
    })

;


