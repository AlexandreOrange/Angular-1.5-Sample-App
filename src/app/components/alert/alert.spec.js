import AlertModule from './alert.module.js';

describe('Alert', () => {
    let $rootScope, $componentController, $compile;
    
    beforeEach(window.module(AlertModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    describe('AlertView', () => {
        let scope, element;
        let mockType = "danger";

        it('should have the right class when passing the "type" prop', () => {
            scope = $rootScope.$new();
            element = $compile(`<alert type=${mockType}></alert>`)(scope);
            scope.$digest();
            expect(element[0].querySelector('.Alert').classList.contains(`Alert--${mockType}`)).toBe(true);
        });
    });
});
