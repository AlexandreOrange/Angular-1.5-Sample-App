import angular from 'angular';
import ScrollWatcherComponent from './scroll-watcher.component';

const ScrollWatcherModule = angular
    .module('scrollWatcherModule', [])
    .component('scrollWatcher', ScrollWatcherComponent)
    .name;

export default ScrollWatcherModule;