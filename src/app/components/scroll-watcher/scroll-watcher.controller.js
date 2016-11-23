import angular from 'angular';
import throttle from 'lodash/throttle';

export default class ScrollWatcherComponent {
    constructor($window) {
      'ngInject';
      this.window = $window;
      this.windowEl = angular.element($window);
    }

    $onChanges(changes) {
        if (changes.bindScroll.currentValue) this.bindScrollEvent()
        else this.unbindScrollEvent();
    }

    isPageBottomReached() {
        const scrollElement = this.window;
        return scrollElement.innerHeight + scrollElement.pageYOffset > scrollElement.document.body.offsetHeight;
    }

    handleScrollEvent() {
        (throttle(() => {
            if (this.isPageBottomReached()) this.onScrollBottom();                
        }, 1000))();
    }

    bindScrollEvent() {
        this.windowEl.on('scroll', this.handleScrollEvent.bind(this));
    }

    unbindScrollEvent() {
        this.windowEl.off('scroll');
    }
}