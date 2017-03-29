/* SPDX-License-Identifier: MIT */

function GHDataReport(apiUrl) {
  apiUrl = apiUrl || 'http://localhost:5000/';
  var owner = this.getParameterByName('owner');
  var repo = this.getParameterByName('repo');
  this.api = new GHDataAPIClient(apiUrl, owner, repo);
  this.buildReport();
}


GHDataReport.prototype.getParameterByName = function(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

GHDataReport.prototype.buildReport = function () {
  document.getElementById('repo').innerHTML = this.api.owner + ' / ' + this.api.repo;
  // Commits
  this.api.commits().then(function (commits) {
    MG.data_graphic({
      title: "Commits/Week",
      data: MG.convert.date(commits, 'date', '%Y-%m-%dT%H:%M:%S.%LZ'),
      chart_type: 'point',
      least_squares: true,
      full_width: true,
      height: 300,
      color_range: ['#aaa'],
      x_accessor: 'date',
      y_accessor: 'commits',
      target: '#commits-over-time'
    });
  });

  // Stargazers
  this.api.stargazers().then(function (stargazers) {
    MG.data_graphic({
      title: "Stars/Week",
      data: MG.convert.date(stargazers, 'date', '%Y-%m-%dT%H:%M:%S.%LZ'),
      chart_type: 'point',
      least_squares: true,
      full_width: true,
      height: 300,
      color_range: ['#aaa'],
      x_accessor: 'date',
      y_accessor: 'watchers',
      target: '#stargazers-over-time'
    });
  });

  // Forks
  this.api.forks().then(function (forks) {
    MG.data_graphic({
      title: "Forks/Week",
      data: MG.convert.date(forks, 'date', '%Y-%m-%dT%H:%M:%S.%LZ'),
      chart_type: 'point',
      least_squares: true,
      full_width: true,
      height: 300,
      color_range: ['#aaa'],
      x_accessor: 'date',
      y_accessor: 'projects',
      target: '#forks-over-time'
    });
  });

  // Issues
  this.api.issues().then(function (issues) {
    MG.data_graphic({
      title: "Issues/Day",
      data: MG.convert.date(issues, 'date', '%Y-%m-%dT%H:%M:%S.%LZ'),
      chart_type: 'point',
      least_squares: true,
      full_width: true,
      height: 300,
      color_range: ['#aaa'],
      x_accessor: 'date',
      y_accessor: 'issues',
      target: '#issues-over-time'
    });
  });

  // Pull Requests
  this.api.pullrequests().then(function (pulls) {
    MG.data_graphic({
      title: "Pullrequests/Day",
      data: MG.convert.date(pulls, 'date', '%Y-%m-%dT%H:%M:%S.%LZ'),
      chart_type: 'point',
      least_squares: true,
      full_width: true,
      height: 300,
      color_range: ['#aaa'],
      x_accessor: 'date',
      y_accessor: 'pull_requests',
      target: '#pulls-over-time'
    });
  });
};

var client = new GHDataReport();
