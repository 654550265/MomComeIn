angular.module('app', ['ionic', 'app.controllers', 'app.services', 'ngCordova'])
.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.config(function ($stateProvider, $urlRouterProvider, $compileProvider, $ionicConfigProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|geo|mailto|tel|chrome-extension):/);
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.views.swipeBackEnabled(false);
    $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })
    .state('login',{
        url:'/login',
        templateUrl:'templates/login/login.html',
        controller:'loginCtrl'
    })
    .state('tab.index', {
        url: '/index',
        views: {
            'tab-index': {
                templateUrl: 'templates/index/index.html',
                controller: 'indexCtrl'
            }
        }
    })
    .state('tab.Mothering', {
        url: '/Mothering',
        views: {
            'tab-Mothering': {
                templateUrl: 'templates/Mothering/Mothering.html',
                controller: 'MotheringCtrl'
            }
        }
    })
    .state('tab.Record', {
        url: '/Record',
        views: {
            'tab-Record': {
                templateUrl: 'templates/Record/Record.html',
                controller: 'RecordCtrl'
            }
        }
    })
    .state('tab.CustomerService', {
        url: '/CustomerService',
        views: {
            'tab-CustomerService': {
                templateUrl: 'templates/CustomerService/CustomerService.html',
                controller: 'CustomerServiceCtrl'
            }
        }
    })
    .state('tab.my', {
        url: '/my',
        views: {
            'tab-my': {
                templateUrl: 'templates/my/my.html',
                controller: 'myCtrl'
            }
        }
    });
    $urlRouterProvider.otherwise('tab/index');
});
