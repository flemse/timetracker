import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return  [{
      name: 'test',
      active: true
    }];
  }
});
