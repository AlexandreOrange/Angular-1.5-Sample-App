import angular from 'angular';
import ButtonElement from './button-element.directive';
import './button-element.css';

const ButtonModule = angular
    .module('buttonElement', [])
    .directive('buttonElement', ButtonElement)
    .name;

export default ButtonModule;