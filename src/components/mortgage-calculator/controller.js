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
            // Устанавливаем значения "по умолчанию"
            this.scope.data = this.scope.default;

            // Отслеживаем изменения данных формы
            this.scope.$watchCollection('data', (newData) => {
                // Отправляем событие с изменёнными данными
                this.scope.$emit('mortgageCalculator:changeData', newData);
            });
        }
    }

    new MortgageCalculatorCtrl($scope);
});