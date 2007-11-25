Date.Specification = new Specification({
'Daylight Saving Time': {
    setup: function() { },
	'3/11/2007 1:59:59 + 1 second = 3/11/2007 3:00:00': {
      	run: function() { },
		assert: function() {  
	  		return new Date(2007,2,11,1,59,59).addSeconds(1).equals(new Date(2007,2,11,3,0,0));
		}
    },
	'11/4/2007 1:59:59 + 1 second = 11/4/2007 1:00:00': {
      	run: function() { },
		assert: function() {  
	  		return new Date(2007,10,4,1,59,59).addSeconds(1).equals(new Date(2007,10,4,1,0,0));
		}
    }
}
   
});

$(document).ready( function() { Date.Specification.validate().show() } );