import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
  	console.log(1, serialized);
  	if (serialized) {
      return moment(serialized).locale('ru').calendar();
    }
    console.log(0, serialized);
    return serialized;
  },

  serialize(deserialized) {
  	console.log(2, deserialized);
  	if (deserialized) {
      return moment(deserialized).toISOString();
    }
    return deserialized;
  }
});
