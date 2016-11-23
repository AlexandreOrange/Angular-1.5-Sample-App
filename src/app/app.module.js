import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './app.css';
import AppComponent from './app.component';
import ComponentsModule from './components/components.module';
//import { CommonModule } from './common/common.module';


const AppModule = angular
    .module('app', [
        ComponentsModule,
        uiRouter
    ])
    .config(($locationProvider) => {
        "ngInject";
        // HTML5 Mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent)
    .name;

export default AppModule;