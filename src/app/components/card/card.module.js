import angular from 'angular';
import CardComponent from './card.component';
import './card.css';

const CardModule = angular
    .module('card', [])
    .component('card', CardComponent)
    .name;

export default CardModule;