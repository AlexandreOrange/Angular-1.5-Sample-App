import angular from 'angular';
import InputElement from './input-element.directive';
import './input-element.css';

const InputModule = angular
    .module('inputElement', [])
    .directive('inputElement', InputElement)
    .name;

export default InputModule;