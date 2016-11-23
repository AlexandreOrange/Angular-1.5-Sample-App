import CardModule from './card.module.js';

describe('Card', () => {
    let $rootScope, $componentController, $compile;
    
    beforeEach(window.module(CardModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    describe('CardView', () => {
        let scope, element;

        it('should have the class "Card"', () => {
            scope = $rootScope.$new();
            element = $compile(`<card></card>`)(scope);
            scope.$digest();
            expect(element[0].children[0].classList.contains('Card')).toBe(true);
        });
    });
});
