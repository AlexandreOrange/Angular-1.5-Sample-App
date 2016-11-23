import ReposModule from './repos.module.js';

describe('Repos', () => {
    let $rootScope, $state, $location, $componentController, $compile;
    
    beforeEach(window.module(ReposModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
    }));

    describe('Routes', () => {
        // top-level specs: i.e., routes, injection, naming
        it('should be the default component', () => {
            $location.url('/');
            $rootScope.$digest();
            expect($state.current.component).toBe('repos');
        });
    });

    describe('ReposController', () => {
        let controller, ReposService;
        let mockUsername = "sampleUser";

        beforeEach(inject(($injector) => {
            ReposService = $injector.get('ReposService');
            
            controller = $componentController('repos',
                { $scope: {}, ReposService: ReposService }
            );
        }));
        
        it('should initialize state with correct properties', () => {
            controller.$onInit();

            expect(controller.username).toBe('');
            expect(controller.repos).toEqual([]);
            expect(controller.currentPage).toBe(0);
            expect(controller.lastPageNumber).toBe(0);
            expect(controller.lastPageReached).toBe(true);
            expect(controller.searchInProgress).toBe(false);
            expect(controller.userDoesExist).toBe(false);
        });
    });
});
