import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPerson: function(person) {
      alert(person);
    }
  }
});
