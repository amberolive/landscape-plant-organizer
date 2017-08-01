import DS from 'ember-data';

export default DS.Model.extend({
  commonName: DS.attr('string'),
  species: DS.attr('string'),
  genus: DS.attr('string'),
  trinimial: DS.attr('string'),
  type: DS.attr('string'),
  season: DS.attr('string'),
  fertilization: DS.belongsTo('fertilization', {async: true, inverse: null}),
  startBloomTime: DS.attr('date'),
  endBloomTime: DS.attr('date'),
  website: DS.attr('string'),
  comments: DS.attr('string'),
  beds: DS.hasMany('sub-bed', {async: true, inverse: null}),
});
