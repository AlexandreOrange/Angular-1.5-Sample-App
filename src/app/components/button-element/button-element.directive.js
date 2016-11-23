const ButtonElement = () => {
    'ng-inject';
    return {
        restrict: 'A',
        compile($element, $attrs) {
            $element.addClass('Button');
        }
    }
}

export default ButtonElement;