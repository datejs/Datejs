// convert cruiser.js Specification objects to jasmine tests

(function(win){
	function Specification(spec) {
		for(suite in spec) {
			describe(suite, function(){
				if(spec[suite].setup) {
					beforeEach(spec[suite].setup);
				}

				for(test in spec[suite]) {
					if(test !== 'setup' && spec[suite].hasOwnProperty(test)) {
					//embed in an IIFE so that the same test doesn't get run over and over
					(function(testJig){
						it(test, function(){
							//apply is used to ensure that run and assert get the same contexts
							 testJig.run.apply(this);
							 expect(testJig.assert.apply(this)).toBe(true);
						})
					})(spec[suite][test]);
				}
				}
			})
		}
	}
	window.Specification = Specification;
})(window);
