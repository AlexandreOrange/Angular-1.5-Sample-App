import angular from 'angular';
import AlertComponent from './alert.component';
import './alert.css';

const AlertModule = angular
    .module('alert', [])
    .component('alert', AlertComponent)
    .name;

export default AlertModule;