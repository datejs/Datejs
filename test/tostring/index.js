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
  },
  
   'Ordinal suffix, .toString("S")': {
    setup: function() {},
    '1st': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 1).toString("S") == "st"); }
    },
    '2nd': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 2).toString("S") == "nd"); }
    },
    '3rd': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 3).toString("S") == "rd"); }
    },
    '4th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 4).toString("S") == "th"); }
    },
    '5th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 5).toString("S") == "th"); }
    },
    '6th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 6).toString("S") == "th"); }
    },
    '7th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 7).toString("S") == "th"); }
    },
    '8th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 8).toString("S") == "th"); }
    },
    '9th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 9).toString("S") == "th"); }
    },
    '10th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 10).toString("S") == "th"); }
    },
    '11th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 11).toString("S") == "th"); }
    },
    '12th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 12).toString("S") == "th"); }
    },
    '13th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 13).toString("S") == "th"); }
    },
    '14th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 14).toString("S") == "th"); }
    },
    '15th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 15).toString("S") == "th"); }
    },
    '16th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 16).toString("S") == "th"); }
    },
    '17th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 17).toString("S") == "th"); }
    },
    '18th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 18).toString("S") == "th"); }
    },
    '19th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 19).toString("S") == "th"); }
    },
    '20th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 20).toString("S") == "th"); }
    },
    '21th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 21).toString("S") == "st"); }
    },
    '22th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 22).toString("S") == "nd"); }
    },
    '23rd': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 23).toString("S") == "rd"); }
    },
    '24th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 24).toString("S") == "th"); }
    },
    '25th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 25).toString("S") == "th"); }
    },
    '26th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 26).toString("S") == "th"); }
    },
    '27th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 27).toString("S") == "th"); }
    },
    '28th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 28).toString("S") == "th"); }
    },
    '29th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 29).toString("S") == "th"); }
    },
    '30th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 30).toString("S") == "th"); }
    },
    '31th': {
      run: function() { },
      assert: function() { return (new Date(2008, 0, 31).toString("S") == "st"); }
    }
  }
   
});

$(document).ready( function() { Date.Specification.validate().show() } );