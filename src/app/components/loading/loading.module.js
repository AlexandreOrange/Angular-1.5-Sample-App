import angular from 'angular';
import LoadingComponent from './loading.component';
import './loading.css';

const LoadingModule = angular
    .module('loading', [])
    .component('loading', LoadingComponent)
    .name;

export default LoadingModule;