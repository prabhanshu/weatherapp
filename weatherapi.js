var app = angular.module('myapp', []);
app.controller('DemoCtrl', function($http,$scope) {
    var ctrl = this;
    var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    //var cityName = document.getElementById("search_box").value;
    $scope.request = {
        method: 'GET',
        url: URL,
        params: {
            q: 'london',
            mode: 'json',
            units: 'metric',
            // cnt: '7',
            appid: '666edb75be8f5bcf90b099fb27b6bbb3'
        }
    }
function test() {
    $http($scope.request)
        .then(function (response) {
            ctrl.data = response.data;
            console.log(ctrl.data);
        })
}
test();
    $scope.$watch('request.params.q',function () {
        test();
    })


})