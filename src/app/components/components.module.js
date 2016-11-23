import angular from 'angular';
import ReposModule from './repos/repos.module';
import InputElementModule from './input-element/input-element.module';
import ButtonElementModule from './button-element/button-element.module';
import ClassNameModule from './class-name/class-name.module';
import CardModule from './card/card.module';
import AlertModule from './alert/alert.module';
import LoadingModule from './loading/loading.module';
import ScrollWatcherModule from './scroll-watcher/scroll-watcher.module';


const ComponentsModule = angular
  .module('app.components', [
    ReposModule,
    InputElementModule,
    ButtonElementModule,
    ClassNameModule,
    CardModule,
    ScrollWatcherModule,
    AlertModule,
    LoadingModule
  ])
  .name;

  export default ComponentsModule;