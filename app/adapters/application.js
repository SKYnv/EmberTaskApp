import DRFAdapter from './drf';

export default DRFAdapter.extend({
	//urlForFindAll(modelName, snapshot) {
		//console.log(modelName);
		//console.log(snapshot);
	//	return this._super(modelName) + '/?user=admin';
 // },
  buildURL(type, id, record) {
        //call the default buildURL and then append a slash
        return this._super(type, id, record) + '/?user=admin';
    },
    primaryKey: '_id'
});
