/*
	Streamliner
	Copyright (c) 2009 Jonathan Snook
	Licensed under MIT license (see MIT-LICENSE.txt)
*/

/*
	Streamliner.LayoutManager (Singleton)
	You'd only have one LayoutManager per window. 
*/
Streamliner.LayoutManager = Base.extend({
	constructor: function (options) {
		
	}
});

/*
	Streamliner.Layout types
*/
Streamliner.Layout = { }

Streamliner.Layout.Generic = Base.extend({
	constructor: function(options){
		
	}
});

/*
	Stacked Layout allows new "cards" to be inserted into the deck
	Only one card is ever visible. Transitions can be performed between
	different cards in the deck.
*/
Streamliner.Layout.Stacked = Streamliner.Layout.Generic.extend({
	
});

