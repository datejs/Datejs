if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Times': {
    setup: function() {
      this.baseline = []; 
      this.baseline[0] = Date.today().set( { hour: 6 } );
      this.baseline[1] = Date.today().set( { hour: 6, minute: 45 } );
      this.baseline[2] = Date.today().set( { hour: 22 } );
      this.baseline[3] = Date.today().set( { hour: 22, minute: 30 } );
    }, 
    '12 am': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parse("12 am")) }
    },
    '12 AM': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parse("12 am")) }
    }, 
    '12 A': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parse("12 A")) }
    }, 
    '12A': {
      run: function() { },
      assert: function() { return Date.today().equals(Date.parse("12A")) }
    },         
    '12 pm': {
      run: function() { },
      assert: function() { return Date.today().add(12).hours().equals(Date.parse("12 pm")) }
    }, 
    '12 PM': {
      run: function() { },
      assert: function() { return Date.today().add(12).hours().equals(Date.parse("12 PM")) }
    }, 
    '12 P': {
      run: function() { },
      assert: function() { return Date.today().add(12).hours().equals(Date.parse("12 P")) }
    }, 
    '12P': {
      run: function() { },
      assert: function() { return Date.today().add(12).hours().equals(Date.parse("12P")) }
    },                    

    '22:30': {
      run: function() { this.date = Date.parse('22:30') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },

    '6:45': {
      run: function() { this.date = Date.parse('6:45') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },  
    '06:45': {
      run: function() { this.date = Date.parse('06:45') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },        
    '10 pm': {
      run: function() { this.date = Date.parse('10 pm') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '10pm': {
      run: function() { this.date = Date.parse('10pm') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '10 p.m.': {
      run: function() { this.date = Date.parse('10 p.m.') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },

    '10 PM': {
      run: function() { this.date = Date.parse('10 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '10PM': {
      run: function() { this.date = Date.parse('10PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '10 P.M.': {
      run: function() { this.date = Date.parse('10 P.M.') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },    
    
    '6 am': {
      run: function() { this.date = Date.parse('6 am') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '6am': {
      run: function() { this.date = Date.parse('6am') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    '06 am': {
      run: function() { this.date = Date.parse('06 am') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '06am': {
      run: function() { this.date = Date.parse('06am') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '6 AM': {
      run: function() { this.date = Date.parse('6 AM') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '6AM': {
      run: function() { this.date = Date.parse('6AM') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    '6 A.M.': {
      run: function() { this.date = Date.parse('6 A.M.') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },     
    '06 AM': {
      run: function() { this.date = Date.parse('06 AM') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '06AM': {
      run: function() { this.date = Date.parse('06AM') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '06 A.M.': {
      run: function() { this.date = Date.parse('06 A.M.') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },          

    '10:30P': {
      run: function() { this.date = Date.parse('10:30P') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '10:30 P': {
      run: function() { this.date = Date.parse('10:30 P') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '10:30 PM': {
      run: function() { this.date = Date.parse('10:30 PM') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '10:30PM': {
      run: function() { this.date = Date.parse('10:30PM') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },    
    '10:30 P.M.': {
      run: function() { this.date = Date.parse('10:30 P.M.') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },

    '6:45A': {
      run: function() { this.date = Date.parse('6:45A') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },        
    '6:45 A': {
      run: function() { this.date = Date.parse('6:45 A') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },        
    '6:45 AM': {
      run: function() { this.date = Date.parse('6:45 AM') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },
    '6:45AM': {
      run: function() { this.date = Date.parse('6:45AM') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },    
    '6:45 A.M.': {
      run: function() { this.date = Date.parse('6:45 A.M.') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },    
    
    
    '22:30': {
      run: function() { this.date = Date.parse('22:30') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '6:45': {
      run: function() { this.date = Date.parse('6:45') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },
    '06:45': {
      run: function() { this.date = Date.parse('06:45') },
      assert: function() { return this.baseline[1].equals( this.date ) }
    },  


    '22:30:45': {
      run: function() { this.date = Date.parse('22:30:45') },
      assert: function() { return this.baseline[3].addSeconds(45).equals( this.date ) }
    },        
    '06:45:25': {
      run: function() { this.date = Date.parse('06:45:25') },
      assert: function() { return this.baseline[1].addSeconds(25).equals( this.date ) }
    },


    '10:30:45 PM': {
      run: function() { this.date = Date.parse('10:30:45 PM') },
      assert: function() { return this.baseline[3].addSeconds(45).equals( this.date ) }
    },
    '10:30:45PM': {
      run: function() { this.date = Date.parse('10:30:45PM') },
      assert: function() { return this.baseline[3].addSeconds(45).equals( this.date ) }
    },
    '10:30:45 P': {
      run: function() { this.date = Date.parse('10:30:45 P') },
      assert: function() { return this.baseline[3].addSeconds(45).equals( this.date ) }
    },    
    '10:30:45P': {
      run: function() { this.date = Date.parse('10:30:45P') },
      assert: function() { return this.baseline[3].addSeconds(45).equals( this.date ) }
    },
    '10:30:45 P.M.': {
      run: function() { this.date = Date.parse('10:30:45 P.M.') },
      assert: function() { return this.baseline[3].addSeconds(45).equals( this.date ) }
    },    
    
            
    '6:45:25 AM': {
      run: function() { this.date = Date.parse('6:45:25 AM') },
      assert: function() { return this.baseline[1].addSeconds(25).equals( this.date ) }
    }, 
    '6:45:25AM': {
      run: function() { this.date = Date.parse('6:45:25AM') },
      assert: function() { return this.baseline[1].addSeconds(25).equals( this.date ) }
    },
    '6:45:25 A': {
      run: function() { this.date = Date.parse('6:45:25 A') },
      assert: function() { return this.baseline[1].addSeconds(25).equals( this.date ) }
    },
    '6:45:25A': {
      run: function() { this.date = Date.parse('6:45:25A') },
      assert: function() { return this.baseline[1].addSeconds(25).equals( this.date ) }
    }, 
    '6:45:25 A.M.': {
      run: function() { this.date = Date.parse('6:45:25 A.M') },
      assert: function() { return this.baseline[1].addSeconds(25).equals( this.date ) }
    }     
  },
  
'With Timezones': {
    setup: function() { 
      this.d = [];
      this.d[0] = Date.today().set({hour: 22, minute: 30 }).setTimezoneOffset(-500);
      this.d[1] = Date.today().set({hour: 22 }).setTimezoneOffset(-500);
    },
    '10:30 PM EST': {
      run: function() { this.date = Date.parse('10:30 PM EST') },
      assert: function() { return this.d[0].equals( this.date ) }
    },
    '10:30 PM -0500 : Offset': {
      run: function() { this.date = Date.parse('10:30 PM -0500') },
      assert: function() { return this.d[0].equals( this.date ) }
    }
  } ,
  
'Misc': {
    setup: function() { 
    },
    '10:2 == 10:02': {
      run: function() { this.date = Date.parse('10:2') },
      assert: function() { return Date.today().set({hour: 10, minute: 2}).equals( this.date ) }
    },
    '10:2:5 == 10:02:05': {
      run: function() { this.date = Date.parse('10:2:5') },
      assert: function() { return Date.today().set({hour: 10, minute: 2, second: 5}).equals( this.date ) }
    }
  }  
});

