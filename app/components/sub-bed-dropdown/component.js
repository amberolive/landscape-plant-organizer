import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  bedService: Ember.inject.service('bed'),


  actions: {
    addSubBed(subBed) {
      debugger;
      //this.get('bedService').addBed(this.get('subBedsToAdd'));
      this.sendAction("action", subBed);
    }
  }
});
