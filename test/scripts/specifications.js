Cruiser.Specification = {};
Cruiser.Specification.About = {
	Description : 'Javascript library for Behavior Driven Design (BDD)',
	Author : 'Dan Yoder',
	Version : { major: '0', minor: '5' },
	Notices : { Copyright: '(c) 2007 Dan Yoder' },
	License : 'Specification is freely distributable under the terms of the MIT license.',
	URL : 'http://dev.zeraweb.com/specifications/'	
};

Specification = function(spec) { this.spec = new Hash( spec ); }

Specification.prototype = {
	validate: function() {
		var result = this.spec.inject( 
			new Specification.Result(), Specification.Context.validate );
		return result;
	},
	
	run: function() { 
	    this.validate().show();
	}
}
Specification.Context = {
	validate: function(r,c) {
		var name = c[0], spec = new Hash(c[1]); spec.results = new Hash();
		r.data[name] = spec.inject( spec, Specification.Test.run ).results;
		return r;
	}
}
Specification.Test = {
	run: function(r,c) {
		var name = c[0], test = c[1], time = 0, start = null;
		switch(name) { 
		    case 'results': 
		    case 'setup': 
		    case 'teardown': 
		    return r; 
		}
		
		var object = {};
		
		try {
			if (r.setup) { 
			    r.setup.call(object); 
			}
			
			if (test.run) { 
			    start = new Date(); 
			    test.run.call(object); 
			    time = (new Date()) - start;
			}
			
			if (test.assert) { 
			    r.results[name] = test.assert.call(object, Specification.Assert );
			}
			
			if (r.teardown) { 
			    r.teardown.call(object);
		    }
		} 
		catch(e) { 
		    time = (new Date()) - start ; 
		    r.results[name] = false;
		}
		
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
        var r = Specification.Result;
        
        if ( !r.output ) { 
            r.output = $('div.results');
        }
        
        var addContext = function(ctx) {
            return '<h2>' + ctx[0] + '</h2>' +
              '<table class="test">' + ctx[1].map( addTest ).join('\n') + '</table>';
        }
        
        var addTest = function(test) {
            var status = test[1] ? "pass" : "fail";
            return '<tr class="' + status +  '"><th>' + test[0] + '</th><td>&nbsp;<!-- TIME HERE --></td>';
            
            // with new testItem object
            // Sample testItem object
            // test = { id: 34, name: "Random Curve ball", value: "7-8, '04", result: true, time: 5 };
            // return '<tr class="' + (test.result) ? "pass" : "fail" +  '"><td class="id">' + test.id + '</td><td class="value">' + test.value + '</th><td class="name">' + test.name + '</td><td class="time">' + test.time + '</td>';
        }

        r.output.append( this.data.map( addContext ).join('\n') );
    }
}