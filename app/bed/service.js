import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  subBeds: [],
  subBedsToAdd: [],
  selectedBed: [],
  subBedsForSelectedBed: [],
  bedsToAdd: [],


  addSubBed(name) {
    this.get('subBedsToAdd').pushObject(Ember.Object.create({name: name}));
  },

  addBed(name) {
    this.get('bedsToAdd').pushObject(Ember.Object.create({name: name}));
  },

  createBed(bedName) {
    var store = this.get('store');
    var bed = store.createRecord('bed', {
      name: bedName
    });
    this.get('subBeds').forEach(function(subBed) {
      var newSubBed = store.createRecord('subBed', {
        name: subBed.get('name'),
      });
      bed.get('subBeds').addObject(newSubBed);
      newSubBed.save();
    });
    bed.save();
  },

  getSubBeds(bed) {
    this.get('selectedBed').clear();
    this.get('selectedBed').pushObject(bed);
    this.get('subBedsForSelectedBed').clear();
    var subBedsForSelectedBed = this.get('subBedsForSelectedBed');
    bed._internalModel.__relationships.initializedRelationships.subBeds.canonicalMembers.list.forEach(function(subBed) {
      subBedsForSelectedBed.pushObject(subBed.record);
    });
  }
});
