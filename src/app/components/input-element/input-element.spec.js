import InputElementModule from './input-element.module.js';

describe('InputElement', () => {
    let $rootScope, $componentController, $compile;
    
    beforeEach(window.module(InputElementModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    describe('InputElementDirective', () => {
        let scope, element;

        it('should add the class "Input"', () => {
            scope = $rootScope.$new();
            element = $compile(`<input input-element />`)(scope);
            scope.$digest();
            expect(element.hasClass('Input')).toBe(true);
        });
    });
});