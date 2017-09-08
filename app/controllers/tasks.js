import Ember from 'ember';

export default Ember.Controller.extend({
		actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    },
    deleteTask(task){
			console.log('delete ', task.id);
			this.get('store').findRecord('task', task.id, { backgroundReload: false }).then(function(post) {
      post.destroyRecord();});
		},
		finishTask(task){
			console.log('update ', task.id);
			
			this.get('store').findRecord('task', task.id).then(function(update) {
			update.set('is_complete', true);
			update.set('status', 2);

			if (update.get('is_complete')){ 
				update.save({ adapterOptions: { id: task.id } });
				};
			});

		}
  },
  isExpanded: false
});
