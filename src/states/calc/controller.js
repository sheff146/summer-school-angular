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
            
            this.scope.calculatorDefaultFormData = {
                price: 3000000,
                firstPayment: 30,
                period: 20
            };

            $rootScope.$on('mortgageCalculator:changeData', (event, data) => {
                var rate = 13.5;
                var loanAmount = data.price - data.price * data.firstPayment / 100;
                var monthlyRateFactor = rate / (12 * 100);
                var monthlyPeriodNumber = data.period * 12;
                var monthlyPayment = loanAmount * (monthlyRateFactor / (1 - Math.pow((1 + monthlyRateFactor), -1 * (monthlyPeriodNumber - 1))));
                var requiredMonthlyIncome = monthlyPayment * 2;

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