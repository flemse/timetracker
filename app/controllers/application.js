import Ember from 'ember';

export default Ember.Controller.extend({
  active: Ember.computed.filterBy('model', 'active', true),
  inactive: Ember.computed.filterBy('model', 'active', false),

  actions: {
    start: function() {
      this.get('model').pushObject({
        name: this.get('currentTrack'),
        active: false
      });
    }
  }
});
