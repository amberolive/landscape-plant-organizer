import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bed: DS.belongsTo('bed', {async: true, inverse: null}),
  quantity: DS.attr('number'),
  plant: DS.hasMany('plant', {async: true, invers: null}),
});
