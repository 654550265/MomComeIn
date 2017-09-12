angular.module('app.services', [])
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
