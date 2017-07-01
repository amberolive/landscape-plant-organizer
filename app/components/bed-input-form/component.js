import Ember from 'ember';

export default Ember.Component.extend({

  bedService: Ember.inject.service('bed'),

  actions: {
    addSubBed() {
      var name = this.get('subBedName');
      this.get('bedService').addSubBed(name);
    },

    createBed(bedName) {
      var bedName = this.get('bedName');
      this.get('bedService').createBed(bedName);
    }
  }

});
