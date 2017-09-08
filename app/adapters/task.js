import DRFAdapter from './drf';

export default DRFAdapter.extend({
	updateRecord(store, type, snapshot) {
        const payload = {};
        const changedAttributes = snapshot.changedAttributes();

        Object.keys(changedAttributes).forEach((attributeName) => {
            payload[attributeName] = changedAttributes[attributeName][1];
        });
        console.log(snapshot.adapterOptions);
        
        //var serializer = store.serializerFor(type.modelName);
        //serializer.serializeIntoHash(payload, type, snapshot);
        console.log(payload);

        const url = this.buildURL(type.modelName, 'update');

				const updateUrl = url+snapshot.id;
				console.log(updateUrl);
        return this.ajax(updateUrl+'/', 'PUT', {data: payload});
    }
//  updateRecord(store, type, snapshot) {
//    var data = {};
//    var serializer = store.serializerFor(type.modelName);

 //   serializer.serializeIntoHash(data, type, snapshot);

 //   var id = snapshot.id;
 //   var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');

//    return this.ajax(url, 'PUT', {data: data});
//  },

});
