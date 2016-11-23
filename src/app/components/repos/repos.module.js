import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ReposFormModule from './repos-form/repos-form.module';
import ReposListModule from './repos-list/repos-list.module';

import ReposComponent from './repos.component';
import ReposService from './repos.service';

const ReposModule = angular
    .module('repos', [
        uiRouter,
        ReposFormModule,
        ReposListModule
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('repos', {
            url: '/',
            component: 'repos'
            });
    })
    .component('repos', ReposComponent)
    .service('ReposService', ReposService)
    .name;

export default ReposModule;