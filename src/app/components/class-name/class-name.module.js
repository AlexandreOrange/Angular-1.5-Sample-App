import angular from 'angular';
import ClassName from './class-name.directive';

const ClassNameModule = angular
    .module('className', [])
    .directive('className', ClassName)
    .name;

export default ClassNameModule;