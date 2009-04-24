/*
	Streamliner
	Copyright (c) 2009 Jonathan Snook
	Licensed under MIT license (see MIT-LICENSE.txt)
*/


Streamliner.Event = Base.extend({
	constructor: function (type) {
		this.type = type;
		var ev = document.createEvent("HTMLEvents");
	    ev.initEvent(this.type, false, false);
		this.event = ev;		
	},
	type: null,
	fire: function () {
		document.dispatchEvent(this.event);
	}
});
