Date.Specification = new Specification({
'en-US': {
    setup: function() {
        this.today = new Date().clearTime();
    },
    '"12:00 AM" : "hh:mm tt"': {
      run: function() {},
      assert: function() { 
        return Date.today().toString("hh:mm tt") == "12:00 AM";
      }
    }, 
    '"12:05 AM" : "hh:mm tt"': {
      run: function() {},
      assert: function() { 
        return Date.today().set({minute: 5}).toString("hh:mm tt") == "12:05 AM";
      }
    },
    '"12:00  PM" : "hh:mm tt"': {
      run: function() {},
      assert: function() { 
        return Date.today().set({hour: 12}).toString("hh:mm tt") == "12:00 PM";
      }
    }, 
    '"12:05 PM" : "hh:mm tt"': {
      run: function() {},
      assert: function() { 
        return Date.today().set({hour: 12, minute: 5}).toString("hh:mm tt") == "12:05 PM";
      }
    },            
    '"December 16, 2007 - 12:00 PM" : "MMMM dd, yyyy - hh:mm tt"': {
      run: function() {},
      assert: function() { 
        return new Date(2007,11,16,12,0,0).toString("MMMM dd, yyyy - hh:mm tt") == "December 16, 2007 - 12:00 PM";
      }
    },
    '"December 16, 2007 - 12:00 AM" : "MMMM dd, yyyy - hh:mm tt"': {
      run: function() {},
      assert: function() { 
        return new Date(2007,11,16,0,0,0).toString("MMMM dd, yyyy - hh:mm tt") == "December 16, 2007 - 12:00 AM";
      }
    },
    '"December 16, 2007 - 12:51 AM" : "MMMM dd, yyyy - hh:mm tt"': {
      run: function() {},
      assert: function() { 
        return new Date(2007,11,16,0,51,53).toString("MMMM dd, yyyy - hh:mm tt") == "December 16, 2007 - 12:51 AM";
      }
    }
  }
   
});

$(document).ready( function() { Date.Specification.validate().show() } );