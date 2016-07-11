/**
 * @ngdoc controller
 * @name ngs.states:mortgageCalculator
 *
 * @description
 * Контроллер компонента "Ипотечный калькулятор"
 **/

angular.module('ngs.components').controller('mortgageCalculatorCtrl', function ($scope, BaseCtrl) {
    class MortgageCalculatorCtrl extends BaseCtrl {
        initialize() {
            this.scope.data = this.scope.default;

            this.scope.$watchCollection('data', (newData) => {
                this.scope.$emit('mortgageCalculator:changeData', newData);
            });
        }
    }

    new MortgageCalculatorCtrl($scope);
});