angular.module('app.services', [])

.factory('Chats', function () {
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})
.factory('loginServe',function($http,$q){
    return {
        login:function(data){
            var deferred=$q.defer();
            var promise=deferred.promise;
            $http.get(weburl+"/Api/XmApp/AppLogin",{
                params:data,
            }).success(function(){
                deferred.resolve(data);
            }).error(function(){
                deferred.reject('数据错误');
            });
            promise.success=function(fn){
                promise.then(fn);
                return promise;
            };
            promise.error=function(fn) {
                promise.then(null,fn);
                return promise;
            };
            return promise;
        }
    }
});
