import Ember from 'ember';

export default Ember.Component.extend({

  bedService: Ember.inject.service('bed'),

  actions: {
    addSubBed() {
      var name = this.get('subBedName');
      this.set('subBedName', '');
      this.get('bedService').addSubBed(name);
    },

    createBed() {
      if(this.get('subBedName') !== '') {
        this.send('addSubBed', this.get('subBedName'));
      }
      this.get('bedService').createBed(this.get('bedName'));
      this.set('bedName', '');
    }
  }

});
