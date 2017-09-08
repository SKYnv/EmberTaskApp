import DRFSerializer from './drf';

export default DRFSerializer.extend({
	primaryKey: 'id',
	//serialize(snapshot, options) {
  //  var self = this;
  //  var json = {};


  //  	//hack
  //  	options = options ? options : {}; // handle the case where options is undefined
	//		options.includeId = true;
	//		json[this.get('primaryKey')] = snapshot.id;
	//		json['title'] = snapshot.record.data['title'];
	//		json['created_at'] = snapshot.record.data['created_at'];
	//		console.log(snapshot.record.data);
	//		console.log(json);


    
 //   const changedAttributes = Object.keys(snapshot.changedAttributes());
 //   snapshot.eachAttribute(function(key, attribute) {
 //     if (changedAttributes.indexOf(key) !== -1) {
  //      self.serializeAttribute(snapshot, json, key, attribute);
  //    }
 //  });

 //   snapshot.eachRelationship(function(key, relationship) {
  //    if (relationship.kind === 'belongsTo') {
 //       self.serializeBelongsTo(snapshot, json, relationship);
  //    } else if (relationship.kind === 'hasMany') {
 //      self.serializeHasMany(snapshot, json, relationship);
  //    }
  //  });
	//	//console.log(json);
 //   return json;
 // }
	
});
