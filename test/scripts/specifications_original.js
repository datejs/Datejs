Cruiser.Specification = {}
Cruiser.Specification.About = {
	Description : 'Javascript library for Behavior Driven Design (BDD)',
	Author : 'Dan Yoder',
	Version : { major: '0', minor: '5' },
	Notices : { Copyright: '(c) 2007 Dan Yoder' },
	License : 'Specification is freely distributable under the terms of the MIT license.',
	URL : 'http://dev.zeraweb.com/specifications/'	
}
Specification = function(spec) { this.spec = new Hash( spec ); }
Specification.log =  function(msg,tag) {
	$('div.log').append("<"+(tag||'p')+" class='message'>"+msg+"</"+(tag||'p')+">");
}
Specification.prototype = {
	validate: function() {
		Specification.log('Processing ...');
		var start = new Date();
		var result = this.spec.inject( 
			new Specification.Result(), Specification.Context.validate );
		var end = new Date();
		Specification.log('Processing Time','h1');
		Specification.log('Finished processing in ' + (end-start) + ' ms.');
		return result;
	},
	run: function() { this.validate().show() }
}
Specification.Context = {
	validate: function(r,c) {
		var name = c[0], spec = new Hash(c[1]); spec.results = new Hash();
		Specification.log(name,'h2'); 
		r.data[name] = spec.inject( spec, Specification.Test.run ).results;
		return r;
	}
}
Specification.Test = {
	run: function(r,c) {
		var name = c[0], test = c[1], time = 0, start = null;
		switch(name) { case 'results': case 'setup': case 'teardown': return r; }
		Specification.log(name,'p'); var object = {};
		try {
			if (r.setup) { r.setup.call(object); }
			if (test.run) { start = new Date(); test.run.call(object); time = (new Date()) - start }
			if (test.assert) { r.results[name] = test.assert.call(object, Specification.Assert ) }
			if (r.teardown) { r.teardown.call(object) }
		} catch(e) { time = (new Date()) - start ; Specification.log(e); r.results[name] = false }
		Specification.log('Ran in '+time+' ms.','p');
		return r;
	}
}
Specification.Assert = {
	isTrue: function() { 
		return Array.convert( arguments ).inject( true, 
		  function(r,a) { return ( ( r && a ) ? true : false ) }); 
	}
}
Specification.Result = function() { this.data = new Hash() };
Specification.Result.setOutput = function(e) { Specification.Result.output = e };
Specification.Result.prototype = {
	show: function() {
	  Specification.log("Displaying results ...",'p');
	  var r = Specification.Result, start = new Date();
	  if ( ! r.output ) { r.output = $('div.results') }
	  var addContext = function(ctx) {
	    return "<div class='context'><h1>"+ctx[0]+"</h1>"+
	      "<div class='tests'>"+ctx[1].map( addTest ).join('\n')+"</div></div>";
	  }
	  var addTest = function(test) {
	    var status = test[1]?'pass':'fail';
	    return "<div class='test'>" +
	      "<div class='description'>"+test[0]+"</div>"+
	      "<div class='result "+status+"'>"+status+"</div></div>";
	  }
    r.output.append( this.data.map( addContext ).join('\n') );
		var end = new Date();
		Specification.log("Results displayed in " + (end-start) + " ms.",'p');
	}
}