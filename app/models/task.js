import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.attr('string', {defaultValue: 'http://localhost:8000/api/users/1/' }),
	title: DS.attr('string'),
	created_at: DS.attr('isodate', {defaultValue() { return new Date();}}),
	time_elapsed: DS.attr('string', {defaultValue: '00:00:00' }),
	status: DS.attr('number', {defaultValue: 4 }),
	is_complete: DS.attr('boolean', { defaultValue: false }),
  
  seconds: Ember.computed('time_elapsed', function() {
  let arr = `${this.get('time_elapsed')}`.toString().split(':');
  let hours = parseInt(arr[0], 10);
  let minuts = parseInt(arr[1], 10);
  let seconds = parseInt(arr[2], 10);
  return `${seconds+(minuts*60)+(hours*3600)}`;
  })

});
