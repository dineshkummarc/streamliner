/*
	Streamliner
	Copyright (c) 2009 Jonathan Snook
	Licensed under MIT license (see MIT-LICENSE.txt)
*/



Streamliner.Template = Base.extend({
	/*
		@description Takes the template and replaces {tags} with data accessed
		via keys in internal data property.

		@param {String} [str] String template
		@param {json} [data] Key/value pairs for template insertion
		@returns StreamlinerTemplate
	*/
	constructor: function ( str, data ) {
		this.template = str;
		this.data = data;
		this.parsedTemplate = null;
	},
	/*
		@description: Takes the template and replaces {tags} with data accessed
		via keys in internal data property.

		@param {json} [data] Key/value pairs 
		@returns {String} parsedTemplate
	*/	
	parse: function ( data ) {
		var self = this;

		if (data) {
			this.data = data;
		}

		this.parsedTemplate = this.template.replace(/\{[^\}]*\}/, function(key){
			return self.data[key.slice(1,-1)] || '';
		});
		return this.parsedTemplate;	
	}
});

