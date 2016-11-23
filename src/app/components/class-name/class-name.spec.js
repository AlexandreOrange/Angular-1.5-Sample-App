// The mocking of a fake component doesn't work for the moment.'

// import ClassNameModule from './class-name.module.js';

// function componentSpyOn(name, template = '') {
//     function componentSpy($provide) {
//         componentSpy.bindings = [];
    
//         $provide.decorator(name + 'Directive', ($delegate) => {
//         let component = $delegate[0];
    
//         component.template = template;
//         component.controller = class {
//             constructor() {
//             componentSpy.bindings.push(this);
//             }
//         };
    
//         return $delegate;
//         });
//     }

// return componentSpy;
// };

// describe('ClassName', () => {
//     let $rootScope, $componentController, $compile;
//     let mockComponentTemplate = '<div></div>';
//     let mockComponent = componentSpyOn('mockComponent', mockComponentTemplate);

//     beforeEach(window.module(ClassNameModule, mockComponent));

//     beforeEach(inject(($injector) => {
//         $rootScope = $injector.get('$rootScope');
//         $compile = $injector.get('$compile');
//     }));

//     describe('ClassNameDirective', () => {
//         let scope, element;
//         let mockClass = 'mockClass';
//         let mockElementTemplate = `<mock-component class-name="${mockClass}"></mock-component>`;

//         it('should add the "class" prop on the first  element', () => {
//             scope = $rootScope.$new();
//             element = $compile(mockElementTemplate)(scope);
//             scope.$digest();
//             console.log(element);
//             expect(element[0].children[0].classList.contains(mockClass)).toBe(true);
//         });
//     });
// });
