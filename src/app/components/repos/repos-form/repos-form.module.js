import angular from 'angular';
import ReposFormComponent from './repos-form.component';
import './repos-form.css';

const ReposFormModule = angular
    .module('reposForm', [])
    .component('reposForm', ReposFormComponent)
    .name;

export default ReposFormModule;