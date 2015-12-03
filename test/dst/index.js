if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}

Date.Specification = new Specification({
'Daylight Saving Time': {
    setup: function() { },
	'3/11/2007 1:59:59 + 1 second = 3/11/2007 3:00:00': {
      	run: function() { },
		assert: function() {  
	  		return new Date(2007,2,11,1,59,59).addSeconds(1).equals(new Date(2007,2,11,3,0,0));
		}
    },
  },
 'Quriks': {
 	"End of DST Doesn't work the way Start of DST does": {
 		//at the end of DST, the date doesn't jump backwards.  instead, just the timezone changes
 		//to ensure that this is caught, we compare the timezone offsets between the two dates
      	run: function() { },
		assert: function() {  
	  		var date1 = new Date(2015,10,1,2,0,0,0);
	  		var date2 = new Date(2015,10,1,2,0,0,-1);
	  		return date1.getTimezoneOffset() != date2.getTimezoneOffset();
		}
    },
 }
   
});

