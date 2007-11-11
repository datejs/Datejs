var Cruiser = {
	About: {
		Description : 'Javascript framework ',
		Author : 'Dan Yoder',
		Version : { major: '0', minor: '4' },
		Notices : { Copyright: '(c) 2007 Dan Yoder' },
		License : 'Cruiser is freely distributable under the terms of the MIT license.',
		URL : 'http://dev.zeraweb.com/cruiser/'
	}
}
var Module = function(m) {
  if (m) {
    for( var k in Module.prototype ) { m[k] = Module.prototype[k] }; return m;
  } else { return this }
};
Module.prototype = {
  extend: function(m) { for( var k in m ) { this.prototype[k] = m[k] }; return this; }
};
Cruiser.String = {
  lstrip: function() { return this.replace(/^\s*/,'') },
  rstrip: function() { return this.replace(/\s*$/,'') },
  strip: function() { return this.lstrip().rstrip() },
  map: function( args, f ) {
  	var g = function( s, p ) { return f.apply( s, p ); }
  	return  args.inject( this, g );
  }, 
  toCharArray: String.prototype.toArray,
  toArray: function( separator ) {
  	if ( separator ) {
  		var f = function( s ) { return s.blank() ? null : s.strip() };
  		return this.split( separator || ',' ).map( f );
  	} else { return this.toCharArray() }
  }
};
Module( String ).extend( Cruiser.String );
