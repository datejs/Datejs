// convert cruiser.js Specification objects to jasmine tests
(function(){

	var exp;

	

	function Specification(spec) {
		for(suite in spec) {
			describe(suite, function(){
				if(spec[suite].setup) {
					beforeEach(spec[suite].setup);
				}

				for(test in spec[suite]) {
					if(test !== 'setup' && spec[suite].hasOwnProperty(test)) {
					//embed in an IIFE so that the same test doesn't get run over and over
					(function(s,testJig){
						it(test, function(){
							//apply is used to ensure that run and assert get the same contexts
							 testJig.run.call(this);

							 if(testJig.expect) {
							 	testJig.expect.call(this,expect);
							 } else {

							 if(s.length > 3 && s.substring(0,4) === 'Fail') {
							 	expect(testJig.assert.call(this)).toBe(false);
							 } else {
							 	expect(testJig.assert.call(this)).toBe(true);
							 }
							}
							 
						})
					})(suite,spec[suite][test]);
				}
				}
			})
		}
	}
	
	if(typeof module !== 'undefined') {
		module.exports = Specification;
	} else {
		window.Specification = Specification;
	}

})();


