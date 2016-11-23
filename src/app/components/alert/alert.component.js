import template from './alert.html';

const AlertComponent = {
    bindings: {
        type: '@'
    },
    template,
    transclude: true
};

export default AlertComponent;