import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bed: DS.belongsTo('bed', {async: true, inverse: null}),
});
