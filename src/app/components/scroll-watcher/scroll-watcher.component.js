import controller from './scroll-watcher.controller.js';

const ScrollWatcherComponent = {
    bindings: {
        onScrollBottom: '&',
        bindScroll: '<'
    },
    controller
};

export default ScrollWatcherComponent;