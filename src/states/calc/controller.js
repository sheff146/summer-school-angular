/**
 * @ngdoc controller
 * @name ngs.states:calcCtrl
 *
 * @description
 * Стейт страницы "Calc"
 **/

angular.module('ngs.states').controller('calcCtrl', function ($scope, StateCtrl, $rootScope) {
    class CalcCtrl extends StateCtrl {
        initialize() {
            super.initialize();

            // Устанавливаем значения "по умолчанию"
            this.scope.calculatorDefaultFormData = {
                price: 3000000,     // стоимость квартиры (руб.)
                firstPayment: 30,   // размер первого платежа (%)
                period: 20          // срок выплат (лет)
            };

            $rootScope.$on('mortgageCalculator:changeData', (event, data) => {
                // Определяем параметры ипотечного кредита
                var rate = 13.5;    // процентная ставка (%)
                var loanAmount = data.price - data.price * data.firstPayment / 100;     // размер кредита (руб.)
                var monthlyRateFactor = rate / (12 * 100);      // месячная процентная ставка (коэффициент)
                var monthlyPeriodNumber = data.period * 12;     // количество периодов/платежей
                var monthlyPayment = loanAmount * (monthlyRateFactor / (1 - Math.pow((1 + monthlyRateFactor), -1 * (monthlyPeriodNumber - 1))));    // ежемесячный платёж
                var requiredMonthlyIncome = monthlyPayment * 2; // минимальный ежемесячный доход

                // Передаём результат вычислений в модель
                this.scope.calculatorResult = {
                    rate: rate,
                    loanAmount: loanAmount,
                    monthlyPayment: monthlyPayment,
                    requiredMonthlyIncome: requiredMonthlyIncome
                };
            });
        }
    }

    new CalcCtrl($scope);
});