App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({});

App.ApplicationController = Ember.Controller.extend({
  actions: {
    pushInfo: function () {
      Bootstrap.GNM.push('INFO!', 'Hello, this is just an info message!', 'info');
    },
    pushSuccess: function () {
      Bootstrap.GNM.push('SUCCESS!', 'Successfully performed operation!', 'success');
    },
    pushWarn: function() {
          Bootstrap.GNM.push('WARN!', 'Could not perform operation!', 'warning');
    },
    pushDanger: function() {
          Bootstrap.GNM.push('Danger!', 'System is halting!', 'danger');
    }
  }
});
