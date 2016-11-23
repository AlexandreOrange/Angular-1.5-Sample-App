const InputElement = () => {
    'ng-inject';
    return {
        restrict: 'A',
        compile($element, $attrs) {
            $element.addClass('Input');
        }
    }
}

export default InputElement;