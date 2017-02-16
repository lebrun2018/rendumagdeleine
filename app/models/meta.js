import DS from 'ember-data';

export default DS.Model.extend({
	pagination: DS.belongsTo('pagination'),
});

