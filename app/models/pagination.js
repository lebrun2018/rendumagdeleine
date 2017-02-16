import DS from 'ember-data';

export default DS.Model.extend({
	current_page: DS.attr('string'),
	next_page: DS.attr('string'),
	prev_page: DS.attr('string'),
	total_pages: DS.attr('string'),
	total_count: DS.attr('string'),
});

