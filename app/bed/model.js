import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  subBeds: DS.hasMany('sub-bed', {async: true, inverse: null}),
});
