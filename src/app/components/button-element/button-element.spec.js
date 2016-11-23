import ButtonElementModule from './button-element.module.js';

describe('ButtonElement', () => {
    let $rootScope, $componentController, $compile;
    
    beforeEach(window.module(ButtonElementModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    describe('ButtonElementDirective', () => {
        let scope, element;

        it('should add the class "Button"', () => {
            scope = $rootScope.$new();
            element = $compile(`<button button-element></button>`)(scope);
            scope.$digest();
            expect(element.hasClass('Button')).toBe(true);
        });
    });
});
