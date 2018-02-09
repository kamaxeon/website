angular.module( 'edosoft', [
    'ui.router',
    'templates-app',
    'templates-common',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.scroll',
    'feeds',
    'angular-carousel'
])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

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
    .controller('HomeCtrl', function HomeCtrl($scope,$location) {

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
    .controller( 'InfoCtrl', function InfoCtrl ( $scope, $state) {
            $state.reload();
            console.log('InfoCtrl', $scope);
    })
    .controller( 'ContactCtrl', function ContactCtrl ($scope) {
        console.log('ContactCtrl', $scope);
    })
    .controller( 'TeamCtrl', function TeamCtrl ( $scope ) {
            console.log('TeamCtrl', $scope);
    })
    .controller( 'ServicesCtrl', function ServicesCtrl ($scope) {
        console.log('ServiceCtrl', $scope);

    })
    .controller( 'AboutCtrl', function AboutCtrl ($scope) {
        console.log('AboutCtrl', $scope);

    })

;


