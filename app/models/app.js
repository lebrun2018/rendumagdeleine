import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	created_at: DS.attr('date'),
	updated_at: DS.attr('date', {
		defaultValue() { return new Date(); }
	}),
	url: DS.attr('string'),
});

