var _ = Date.Parsing.Operators, G = Date.Grammar, T = Date.Translator;

var _test = function(r, s, x, y) {
    var rx; 
    x = x||{}; 
    y = y||{};
    
    var start = Date.now();
    
    try { 
        rx = r.call( x, s );
    } catch(e) { 
        console.log(e); 
    }
    
    var finish = new Date();
    
    if ( rx[0] instanceof Array ) {
        rx[0].flatten().compact().each( function( fn ) { fn.call( y ); } );      
    } else if ( rx[0] instanceof Function ) {
        rx[0].call(y);
    }
    
	if ( rx[1].length ) {
		console.log("Failed to parse: '" + rx[1] + "'.");
	}
	
    console.log("Ran in " + (finish-start) + "ms.");
    
    console.log(y);
};