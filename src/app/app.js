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

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location,AnchorLinkService ) {
        /*$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
           if ( angular.isDefined( toState.data.pageTitle ) ) {
           $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
         }); }*/
        $scope.scrollTo = function(id) {
            AnchorLinkService.scrollTo(id);
        };
        $scope.scrollTop = function(){
            AnchorLinkService.scrollTop();
        };

        $(window).scroll(function(){
            var pos = $(window).scrollTop();
            if (pos >300) {
                $(".navbar").addClass("static-menu");
            } else {
                $(".navbar").removeClass("static-menu");
            }
        });

    })
    .controller('HomeCtrl', function HomeCtrl($scope) {

    })
    .service('AnchorLinkService', function ($location, $anchorScroll,$window){
        this.scrollTo = function(id){
            $location.hash(id);
            $anchorScroll();
        };
        this.scrollTop = function(){
            $window.scrollTo(0,0);
        };
    })
    .controller( 'InfoCtrl', function InfoCtrl ( $scope) {

    })
    .controller( 'ContactCtrl', function ContactCtrl ($scope) {

    })
    .controller( 'TeamCtrl', function TeamCtrl ( $scope ) {

    })
    .controller( 'CifCtrl', function CifCtrl ( $scope ) {

    })
    .controller( 'ServicesCtrl', function ServicesCtrl ($scope) {

            $scope.showgmail =  true;
            $scope.showcalendar =  false;
            $scope.showhangouts =  false;

              // Image click behaviour
              $scope.openInNewWindow = function(id){

                    switch(id) {
                      case 'show-calendar':
                        $scope.showhangouts =  false;
                        $scope.showgmail =  false;
                        $scope.showcalendar =  true;
                        break;
                      case 'show-hangouts':
                        $scope.showgmail =  false;
                        $scope.showcalendar =  false;
                        $scope.showhangouts =  true;
                        break;
                      case 'signage-title':
                        document.getElementById('signage-indicator').style.display = 'block';
                        document.getElementById('signage-description').style.display = 'block';
                        break;
                      case 'kiosk-title':
                        document.getElementById('kiosk-indicator').style.display = 'block';
                        document.getElementById('kiosk-description').style.display = 'block';
                        break;
                      default:
                        $scope.showcalendar = false;
                        $scope.showgmail = true;
                        $scope.showhangouts =  false;
                    }

              };


    })
    .controller( 'AboutCtrl', function AboutCtrl ($scope) {

    })
    .controller( 'IplusdCtrl', function IplusdCtrl ( $scope, $state) {

    })

;


