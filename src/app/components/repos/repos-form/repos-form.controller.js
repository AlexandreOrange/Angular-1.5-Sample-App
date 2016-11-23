export default class ReposFormComponent {
    constructor() {
      'ng-inject';
    }

    $onInit() {
      this.placeholder = "Enter a Github username";
    }

    onSubmit() {
      if (!this.username) return;
      this.onGetRepos({
        $event: {
          username: this.username
        }
      });
    }
}