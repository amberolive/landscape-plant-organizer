import DS from 'ember-data';

export default DS.Model.extend({
  plant: DS.belongsTo('plant', {async: true, inverse: null}),
  comments: DS.attr('string'),
  complete: DS.attr('boolean'),
  months: DS.hasMany('month', {async: true, inverse: null}),
});
