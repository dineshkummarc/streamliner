/*
	Streamliner
	Copyright (c) 2009 Jonathan Snook
	Licensed under MIT license (see MIT-LICENSE.txt)
*/

/*
	@description stores all current user preferences
	
	@param {String} [id] Unique ID for this Set of preferences
	@param {StreamlinerDatastore} [datastore] Provides interface for reading/writing to store
	@returns StreamlinerPreferences
*/
Streamliner.Preferences = function ( id, datastore ) {
	this.id = id;
	this.store = datastore;
	this.cache = null;
}

Streamliner.Preferences.prototype.load = function () {
	this.cache = JSON.parse(this.store.get(this.id));
}

Streamliner.Preferences.prototype.get = function (key) {
	return this.cache[key];
}

Streamliner.Preferences.prototype.set = function (key, val) {
	this.cache[key] = val;
	this.store.set(this.id, JSON.stringify(this.cache));
	return true;
}


