import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  subBeds: [],

  addSubBed(name) {
    this.get('subBeds').addObject(name);
  }
});
