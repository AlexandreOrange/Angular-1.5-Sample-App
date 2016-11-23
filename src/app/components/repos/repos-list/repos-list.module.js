import angular from 'angular';
import ngAnimate from 'angular-animate';
import ReposListComponent from './repos-list.component';
import './repos-list.css';

const ReposListModule = angular
    .module('reposList', [
        ngAnimate
    ])
    .component('reposList', ReposListComponent)
    .name;

export default ReposListModule;