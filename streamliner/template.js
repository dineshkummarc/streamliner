/*
	Streamliner
	Copyright (c) 2009 Jonathan Snook
	Licensed under MIT license (see MIT-LICENSE.txt)
*/

/*
	@description Takes the template and replaces {tags} with data accessed
	via keys in internal data property.
	
	@param {String} [str] String template
	@param {json} [data] Key/value pairs for template insertion
	@returns StreamlinerTemplate
*/

Streamliner.Template = function ( str, data ) {
	this.template = str;
	this.data = data;
	this.parsedTemplate = null;
}

/*
	@description: Takes the template and replaces {tags} with data accessed
	via keys in internal data property.
	
	@param {json} [data] Key/value pairs 
	@returns {String} parsedTemplate
*/
Streamliner.Template.prototype.parse = function ( data ) {
	var self = this;
	
	if (data) {
		this.data = data;
	}
	
	this.parsedTemplate = this.template.replace(/\{[^\}]*\}/, function(key){
		return self.data[key.slice(1,-1)] || '';
	});
	return this.parsedTemplate;
}
