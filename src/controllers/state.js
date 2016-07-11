/**
 * @ngdoc provider
 * @name ngs.controllers:StateCtrl
 *
 * @description
 * Базовый класс стейтов
 **/

angular.module('ngs.controllers').provider('StateCtrl', function () {
    this.$get = function (BaseCtrl, stateService) {
        class StateCtrl extends BaseCtrl {
            initialize() {
                this.scope.appSections = [
                    {
                        state: 'home',
                        title: 'PAGE_TITLE_HOME'
                    },
                    {
                        state: 'calc',
                        title: 'PAGE_TITLE_CALC'
                    },
                    {
                        state: 'about',
                        title: 'PAGE_TITLE_ABOUT'
                    }
                ];

                this.scope.currentState = stateService.current();
            }
        }

        return StateCtrl;
    };
});
