import Ember from 'ember';

export default Ember.Controller.extend({
	isExpanded: true,
	newTitle: '',
	isValid: Ember.computed.match('newTitle', /\w*/),
	
	actions: {
    addTask() {
    	const taskTitle = this.get('newTitle');
    	console.log(this.get('newTitle'));
    	
    	if (!taskTitle) {
    		alert('Please type a task title!');
    	}else{
			let nextId;
			let store;
			store = this.get('store');
			this.get('store').findAll('task').then(function(tasks) {
				tasks.getEach('id');
				nextId = Math.max(...(tasks.mapBy('id')));
				var task = store.createRecord('task', {title: taskTitle, id:nextId+1});
				task.save();
				});
			}
	}
}

});
