import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service("session"),
  host: 'https://api.scalingo.com',
  namespace: '/v1',
  headers: Ember.computed('session.authenticationSucceeded', function() {
    return {
      "Authorization" : "Basic "+btoa(":"+this.get("session.data.authenticated.authentication_token"))
    };
  })
});
