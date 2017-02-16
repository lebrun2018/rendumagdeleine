import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', function() {
    this.route('timeline', {path: '/:app_id'});
  });
  this.route('login');
  this.route('event');
});

export default Router;
