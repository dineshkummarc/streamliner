/*
	Streamliner
	Copyright (c) 2009 Jonathan Snook
	Licensed under MIT license (see MIT-LICENSE.txt)
*/

/*
	Service Namespace
*/
Streamliner.Service = {};

/*
	Service class stores properties for use of a particular service like
	Twitter, Flickr, etc. 
*/
Streamliner.Service.Base = Base.extend({
	constructor: function( options ) {
		
	},
	baseUrl: null, /* include trailing slash */
	https: false,
	servicePoints: [],
	addServicePoint: function( options ) {
		var point = {
			resource: '',
			baseParams: {}
		};
		this.servicePoints.push(point); 
	}
});

