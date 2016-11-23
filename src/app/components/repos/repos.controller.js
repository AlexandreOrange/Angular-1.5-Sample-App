export default class ReposComponent {
    constructor(ReposService) {
        'ngInject';
        this.reposService = ReposService;
    }

    $onInit() {
        // TODO: use immutable data structures to avoid accidental state mutation
        // For more complex apps, Redux would have been used.
        this.username = ""; 
        this.repos = [];
        this.currentPage = 0;
        this.lastPageNumber = 0;
        this.lastPageReached = true;
        this.searchInProgress = false;
        this.userDoesExist = false;
    }

    getReposByUsername({ username }) {
        if (!username || this.username === username) return;
        
        //Re-initialise part of state
        this.repos = [];
        this.username = username;
        this.currentPage = 1;
        this.lastPageReached = true;
        this.userDoesExist = true;

        // Toggle the search state to hide the state transition
        this.searchInProgress = true;

        this.reposService.getRepos(this.username, this.currentPage)
            .then(response => {
                this.repos = response.data;
                this.searchInProgress = false;
                this.lastPageNumber = this.reposService.getReposLastPageNumber(response);
                if (this.lastPageNumber) this.lastPageReached = false;
            }, (response) => {
                this.searchInProgress = false;
                this.userDoesExist = this.reposService.doesUserExist(response);
                this.lastPageNumber = 1;
            });
    }

    getUserReposNextPage() {
        this.searchInProgress = true;
        this.currentPage += 1;
        if (this.currentPage === this.lastPageNumber) this.lastPageReached = true;
        this.reposService.getRepos(this.username, this.currentPage).then(response => {
            this.repos.push(...response.data);
            this.searchInProgress = false;
        });
    }

    usernameIsNotEmpty() {
        return this.username.length > 0;
    }

    userHasRepos() {
        return this.repos.length > 0;
    }
}