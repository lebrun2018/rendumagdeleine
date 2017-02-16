import DS from 'ember-data';

export default DS.Model.extend({
	app_id: DS.attr('string'),
	app_name: DS.attr('string'),
	created_at: DS.attr('date'),
	type: DS.attr('string'),
});
