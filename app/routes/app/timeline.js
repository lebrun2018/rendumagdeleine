import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model: function(params) {
		return RSVP.hash({
			apps: this.get('store').findRecord('app', params.app_id),
			events: this.get('store').findAll('event')
		});
	},
});
