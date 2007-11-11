var benchmark = function( fn ) { 
	var start = new Date(); fn(); var end = new Date(); 
	return end - start; 
};

var micro_benchmark = function( fn ) { 
	var x = 0; for( var i = 0; i < 1000; i++ ) { x+=benchmark(fn); }; return x;
};

var dateBenchmark = function( tests, fn ) {
	var month, day, year; var time = 0;
	for ( var i = 0 ; i < tests ; i++ ) {
		month = Math.round( Math.random() * 11 );
		day = Math.round( Math.random() * 27 ) + 1;
		year = Math.round( Math.random() * 10 ) + 1995;
    var s = month.toString()+'/'+day.toString()+'/'+year.toString();
    time += benchmark( function() { fn(s) } );
	}
	return (Math.round(time/tests*1000));
};

$(document).ready(function() {
	var tests = 250;
	var results = {
		'Native: .parse': dateBenchmark( tests, Date._parse ),
		'Ext: parseDate': dateBenchmark( tests, function(s) { Date.parseDate( s, 'm/d/Y' ); } ),
        'Datejs: .parseExact': dateBenchmark( tests, function(s) { Date.parseExact( s, 'M/d/yyyy' ); } ),		
		'Datejs: .getParseFunction': dateBenchmark( tests, Date.getParseFunction('M/d/yyyy')  ),        
        'Datejs: .parse': dateBenchmark( tests, Date.parse )
	};
	var max = 0; for ( var k in results ) { max = ( max < results[k] ) ? results[k]:max ; }
	var addResult = function(h, r) { $('#chart').append(
		'<div class="bar">' + 
			'<label>'+h+'</label>'+
			'<div class="value" style="width:'+(r/max*(1/3)*100)+'%"></div>' +
			'<div class="display">'+r+' microseconds</div>');
	};
	for ( var k in results ) { addResult( k, results[k]); }
});