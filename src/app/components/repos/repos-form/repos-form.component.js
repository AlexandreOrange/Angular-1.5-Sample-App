import template from './repos-form.html';
import controller from './repos-form.controller';

const ReposFormComponent = {
    bindings: {
        onGetRepos: '&'
    },
    template,
    controller
};

export default ReposFormComponent;