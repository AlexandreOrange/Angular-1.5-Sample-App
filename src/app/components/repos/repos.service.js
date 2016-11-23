import parse from 'parse-link-header';

export default class ReposService {
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }

  getRepos(username, page = 1) {
    return this.$http
        .get(`https://api.github.com/users/${username}/repos?page=${page}`);
  }

  getReposLastPageNumber(response) {
    const linkHeader = response.headers().link || null;
    let lastPageNumber = 0;

    if (linkHeader) {
      // TODO: Test for type of page
      const parsed = parse(linkHeader);
      lastPageNumber = parseInt(parsed.last.page);
    }

    return lastPageNumber;
  }

  doesUserExist(response) {
    return response.status !== 404;
  }
}