import Ember from 'ember';

export function timedeltaToSeconds(timedelta) {
  let arr = timedelta.toString().split(':');
  let hours = parseInt(arr[0], 10);
  let minuts = parseInt(arr[1], 10);
  let seconds = parseInt(arr[2], 10);
  let result = seconds+(minuts*60)+(hours*3600);
  
  return `${result}`;
}

export default Ember.Helper.helper(timedeltaToSeconds);
