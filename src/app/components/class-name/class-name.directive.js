const ClassName = () => {
    'ng-inject';
    return {
        restrict: 'A',
        link($scope, $element, $attrs) {
            $element[0].children[0].classList.add($attrs.className);
        }
    }
}

export default ClassName;