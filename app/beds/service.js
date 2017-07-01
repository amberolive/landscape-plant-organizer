import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  subBeds: [],
  beds: [],

  addSubBed(name) {
    this.get('subBeds').addObject(name);
  },
});
