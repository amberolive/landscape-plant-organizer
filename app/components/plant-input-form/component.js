import Ember from 'ember';

export default Ember.Component.extend({

  bedService: Ember.inject.service('bed'),

  actions: {
    createPlant() {
      this.sendAction('createPlant', this.get('commonName'), this.get('genus'), this.get('species'), this.get('trinimial'), this.get('fertilizationComments'), this.get('months'));
    },

    getSubBeds(bed) {
      this.get('bedService').getSubBeds(bed);
    }
  }
});
