/**
 * @ngdoc controller
 * @name ngs.states:homeCtrl
 *
 * @description
 * Стейт страницы "Home"
 **/

angular.module('ngs.states').controller('homeCtrl', function ($scope, StateCtrl) {
    class HomeCtrl extends StateCtrl {
        initialize() {
            super.initialize();
            
            // Метку помещаем в переменную только для демонстрации тестов
            this.scope.demoText = 'DEMO_DATA';

            // Демонстрация изменения модели (demoModel2) из контроллера
            this.scope.demoModel2 = 'Тестовые данные';

            // Демонстрация изменения модели (demoModel3) из контроллера. В модель записывается объект
            this.scope.demoModel3 = {
                demoText: 'Демонстрационный текст',
                demoProducts: [
                    {
                        name: 'Яблоко',
                        category: 'Фрукты',
                        price: 30
                    },
                    {
                        name: 'Груша',
                        category: 'Фрукты',
                        price: 41
                    },
                    {
                        name: 'Mac Pro',
                        category: 'Компы',
                        price: 50000
                    },
                    {
                        name: 'Кирпич',
                        category: 'Разное',
                        price: 24
                    }
                ]
            };

        }
    }

    new HomeCtrl($scope);
});