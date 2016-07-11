/**
 * @ngdoc controller
 * @name ngs.states:calcCtrl
 *
 * @description
 * Стейт страницы "Calc"
 **/

angular.module('ngs.states').controller('calcCtrl', function ($scope, StateCtrl) {
    class CalcCtrl extends StateCtrl {
        initialize() {
            super.initialize();
        }
    }

    new CalcCtrl($scope);
});