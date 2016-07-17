/**
 * @ngdoc controller
 * @name ngs.states:calcCtrl
 *
 * @description
 * Стейт страницы "Calc"
 **/

angular.module('ngs.states').controller('calcCtrl', function ($scope, StateCtrl, $rootScope, calculatorService) {
    class CalcCtrl extends StateCtrl {
        initialize() {
            super.initialize();

            // Устанавливаем значения "по умолчанию"
            this.scope.calculatorDefaultFormData = {
                price: 3000000,     // стоимость квартиры (руб.)
                firstPayment: 30,   // размер первого платежа (%)
                period: 20          // срок выплат (лет)
            };

            // Отлавливаем событие, отправленное от компонента "Кредитного калькулятора"
            $rootScope.$on('mortgageCalculator:changeData', (event, data) => {
                this.scope.calculatorResult = calculatorService.count(data);
            });
        }
    }

    new CalcCtrl($scope);
});