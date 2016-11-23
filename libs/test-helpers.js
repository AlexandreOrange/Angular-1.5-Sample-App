/* Angular 1.5 doesn’t offer shallow rendering out-of-the-box, 
 * but it can be achieved with the following function.
 */

export function componentSpyOn(name, template = '') {
  function componentSpy($provide) {
    componentSpy.bindings = [];
 
    $provide.decorator(name + 'Directive', ($delegate) => {
      let component = $delegate[0];
 
      component.template = template;
      component.controller = class {
        constructor() {
          componentSpy.bindings.push(this);
        }
      };
 
      return $delegate;
    });
  }
 
  return componentSpy;
};