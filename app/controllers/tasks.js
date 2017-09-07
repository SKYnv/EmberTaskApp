import Ember from 'ember';

export default Ember.Controller.extend({
		actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
    deleteTask(task){
			//console.log('delete ', task.id);
			this.get('store').findRecord('task', task.id, { backgroundReload: false }).then(function(post) {
      post.destroyRecord();});
		}
  },
  isExpanded: false
});
