import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import Ember from 'ember';


export default DeviseAuthenticator.extend({
  identificationAttributeName: "login",
  serverTokenEndpoint: "https://api.scalingo.com/v1/users/sign_in",
  tokenAttributeName: "authentication_token",
  _validate: function(data) {
    const tokenAttributeName = this.get('tokenAttributeName');
    const resourceName = this.get('resourceName');
    const _data = data[resourceName] ? data[resourceName] : data;

    return !Ember.isEmpty(_data[tokenAttributeName]);
  }
});
