Date.Specification = new Specification({
'Exception Handling': {
    setup: function() { },
	'Date.parse() : No params': {
      run: function() { this.date = Date.parse() },
      assert: function() {  return null == this.date }
    },
	'Date.parse("") : string.empty': {
      run: function() { this.date = Date.parse('') },
      assert: function() {  return null == this.date }
    },
	'Date.parse("asdf") : Random String': {
      run: function() { this.date = Date.parse('asdf') },
      assert: function() {  return null == this.date }
    },
	'Date.parse(null) : null': {
      run: function() { this.date = Date.parse(null) },
      assert: function() {  return null == this.date }
    },    
    '29-Sep-2008.set( { day: 31 } ) : RangeError': {
      run: function() { },
      assert: function() { 
        try {
  			return new Date(2008,8,29).set( { day: 31 } ).equals( new Date(2008,9,1) );
		}
		catch(ex) {
			return (ex instanceof RangeError);
		}
		
        
        return new Date(2008,8,30).equals( this.date ) }
    },
    '29-Sep-2008.set( { month: 12 } ) : RangeError': {
      run: function() { },
      assert: function() { 
            try {
                return new Date(2008,8,29).set( { month: 12 } ).equals( new Date(2009,0,29) );
            }
            catch(ex) {
                return (ex instanceof RangeError);
            }
      }
    },
    
    'new Date("").compareTo( new Date() ) : Error': {
      run: function() { },
	      assert: function() {
		  	try {
	  			return new Date("").compareTo( new Date() ) == 0
			}
			catch(ex) {
				return (ex instanceof Error);
			}
		}
    },
    'new Date("").equals( new Date() ) : Error': {
      run: function() { },
	      assert: function() {
		  	try {
	  			return new Date("").equals( new Date() );
			}
			catch(ex) {
				return (ex instanceof Error);
			}
		}
    },
	'new Date().compareTo( 0 ) : Error': {
      run: function() { },
	      assert: function() {
		  	try {
	  			return new Date().compareTo( 0 );
			}
			catch(ex) {
				return (ex instanceof TypeError);
			}
		}
    },	
	'new Date().equals( 0 ) : TypeError': {
    run: function() { },
		assert: function() {
			try {
	  			return new Date().equals( 0 );
			}
			catch(ex) {
				return (ex instanceof TypeError);
			}
		}
	},
	'new Date().compareTo( new Date("") ) : TypeError': {
    run: function() { },
		assert: function() {
			try {
	  			return new Date().compareTo( new Date("") );
			}
			catch(ex) {
				return (ex instanceof TypeError);
			}
		}
	},
	'new Date().equals( new Date("") ) : TypeError': {
    run: function() { },
		assert: function() {
			try {
	  			return new Date().equals( new Date("") );
			}
			catch(ex) {
				return (ex instanceof TypeError);
			}
		}
	}
    },
 
	'.compareTo() and .equals()': {
    setup: function() {

	},
	'.compareTo() : today > yesterday': {
        run: function() { },
	    assert: function() {
		    return Date.today().compareTo( Date.today().addDays(-1) ) == 1;
	    }
	},
	'.compareTo() : today == today': {
        run: function() { },
	    assert: function() {
		    return Date.today().compareTo( Date.today() ) == 0;
	    }
	},
	'.compareTo() : today < tomorrow': {
        run: function() { },
	    assert: function() {
		    return Date.today().compareTo( Date.today().addDays(1) ) == -1;
	    }
	},
	'.equals() : today != yesterday': {
        run: function() { },
	    assert: function() {
		    return false == Date.today().equals( Date.today().addDays(-1) );
	    }
	},
	'.equals() : today == today': {
        run: function() { },
	    assert: function() {
		    return Date.today().equals( Date.today() );
	    }
	},
	'.equals() : today != tomorrow': {
        run: function() { },
	    assert: function() {
		    return false == Date.today().equals( Date.today().addDays(1) );
	    }
	}
},
  '.set() Tests': {
    setup: function() {
		
		  this.d1 = new Date('');
		
	},
    '15-Aug-2008 to 15-Sep-2008': {
      run: function() { 
        this.date = new Date(2008,7,15);
        this.date.set( { month: 8 } );
      },
      assert: function() { return new Date(2008,8,15).equals( this.date ) }
    },
    '15-Aug-2008 to 15-Jul-2008': {
      run: function() { 
        this.date = new Date(2008,7,15);
        this.date.set( { month: 6 } );
      },
      assert: function() { return new Date(2008,6,15).equals( this.date ) }
    },    
    '29-Feb-2008 to 28-Feb-2009': {
      run: function() { 
        this.date = new Date(2008,1,29);
        this.date.set( { year: 2009 } );
      },
      assert: function() { return new Date(2009,1,28).equals( this.date ) }
    },
    '29-Feb-2008 to 28-Feb-2007': {
      run: function() { 
        this.date = new Date(2008,1,29);
        this.date.set( { year: 2007 } );
      },
      assert: function() { return new Date(2007,1,28).equals( this.date ) }
    },
    '31-Jan-2008 to 29-Feb-2008': {
      run: function() {
        this.date = new Date(2008,0,31);
        this.date.set( { month: 1 } );
      },
      assert: function() { return new Date(2008,1,29).equals( this.date ) }
    },
    '31-Mar-2008 to 29-Feb-2008': {
      run: function() {
        this.date = new Date(2008,2,31);
        this.date.set( { month: 1 } );
      },
      assert: function() { return new Date(2008,1,29).equals( this.date ) }
    },
    '30-Sep-2008 to 30-Oct-2008': {
      run: function() {
        this.date = new Date(2008,8,30);
        this.date.set( { month: 9 } );
      },
      assert: function() { return new Date(2008,9,30).equals( this.date ) }
    },
    '30-Sep-2008 to 30-Aug-2008': {
      run: function() {
        this.date = new Date(2008,8,30);
        this.date.set( { month: 7 } );
      },
      assert: function() { return new Date(2008,7,30).equals( this.date ) }
    },
    '30-Sep-2008 to 30-Sep-2008': {
      run: function() {
        this.date = new Date(2008,8,30);
        this.date.set( { month: 8 } );
      },
      assert: function() { return new Date(2008,8,30).equals( this.date ) }
    },
    '31-Aug-2008 to 30-Sep-2008': {
      run: function() {
        this.date = new Date(2008,7,31);
        this.date.set( { month: 8 } );      },
      assert: function() { return new Date(2008,8,30).equals( this.date ) }
    },
    '31-Oct-2008 to 30-Sep-2008': {
      run: function() {
        this.date = new Date(2008,9,31);
        this.date.set( { month: 8 } );      },
      assert: function() { return new Date(2008,8,30).equals( this.date ) }
    }
  },
  
'.next() and .previous()': {
    setup: function() { },
    'next().monday()': {
      run: function() { 
        this.date = new Date().clearTime().next().monday();
      },
      assert: function() { return Date.parse('next monday').equals( this.date ) }
    },
    'next().tuesday()': {
      run: function() { 
        this.date = new Date().clearTime().next().tuesday();
      },
      assert: function() { return Date.parse('next tuesday').equals( this.date ) }
    },
    'next().wednesday()': {
      run: function() { 
        this.date = new Date().clearTime().next().wednesday();
      },
      assert: function() { return Date.parse('next wednesday').equals( this.date ) }
    },
    'next().thursday()': {
      run: function() { 
        this.date = new Date().clearTime().next().thursday();
      },
      assert: function() { return Date.parse('next thursday').equals( this.date ) }
    },
    'next().friday()': {
      run: function() { 
        this.date = new Date().clearTime().next().friday();
      },
      assert: function() { return Date.parse('next friday').equals( this.date ) }
    },
    'next().saturday()': {
      run: function() { 
        this.date = new Date().clearTime().next().saturday();
      },
      assert: function() { return Date.parse('next saturday').equals( this.date ) }
    },
    'next().sunday()': {
      run: function() { 
        this.date = new Date().clearTime().next().sunday();
      },
      assert: function() { return Date.parse('next sunday').equals( this.date ) }
    },
    'last().monday()': {
      run: function() { 
        this.date = new Date().clearTime().last().monday();
      },
      assert: function() { return Date.parse('last monday').equals( this.date ) }
    },
    'last().tuesday()': {
      run: function() { 
        this.date = new Date().clearTime().last().tuesday();
      },
      assert: function() { return Date.parse('last tuesday').equals( this.date ) }
    },
    'last().wednesday()': {
      run: function() { 
        this.date = new Date().clearTime().last().wednesday();
      },
      assert: function() { return Date.parse('last wednesday').equals( this.date ) }
    },
    'last().thursday()': {
      run: function() { 
        this.date = new Date().clearTime().last().thursday();
      },
      assert: function() { return Date.parse('last thursday').equals( this.date ) }
    },
    'last().friday()': {
      run: function() { 
        this.date = new Date().clearTime().last().friday();
      },
      assert: function() { return Date.parse('last friday').equals( this.date ) }
    },
    'last().saturday()': {
      run: function() { 
        this.date = new Date().clearTime().last().saturday();
      },
      assert: function() { return Date.parse('last saturday').equals( this.date ) }
    },
    'last().sunday()': {
      run: function() { 
        this.date = new Date().clearTime().last().sunday();
      },
      assert: function() { return Date.parse('last sunday').equals( this.date ) }
    }, 
    'monday()': {
      run: function() { 
        this.date = new Date().clearTime().monday();
      },
      assert: function() { return Date.parse('next monday').equals( this.date ) }
    },
    'tuesday()': {
      run: function() { 
        this.date = new Date().clearTime().tuesday();
      },
      assert: function() { return Date.parse('next tuesday').equals( this.date ) }
    },
    'wednesday()': {
      run: function() { 
        this.date = new Date().clearTime().wednesday();
      },
      assert: function() { return Date.parse('next wednesday').equals( this.date ) }
    },
    'thursday()': {
      run: function() { 
        this.date = new Date().clearTime().thursday();
      },
      assert: function() { return Date.parse('next thursday').equals( this.date ) }
    },
    'friday()': {
      run: function() { 
        this.date = new Date().clearTime().friday();
      },
      assert: function() { return Date.parse('next friday').equals( this.date ) }
    },
    'saturday()': {
      run: function() { 
        this.date = new Date().clearTime().saturday();
      },
      assert: function() { return Date.parse('next saturday').equals( this.date ) }
    },
    'sunday()': {
      run: function() { 
        this.date = Date.today().sunday();
      },
      assert: function() { return Date.parse('next sunday').equals( this.date ) }
    }
  },
  
  '.is()': {
    setup: function() { },
    '.is().monday()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().monday() == true; }
    },
    '.is().mon()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().mon() == true; }
    },
    '.is().tuesday()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).is().tuesday() == true; }
    },
    '.is().tue()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).is().tue() == true; }
    },
    '.is().wednesday()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 3).is().wednesday() == true; }
    },
    '.is().wed()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 3).is().wed() == true; }
    },
    '.is().thursday()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 4).is().thursday() == true; }
    },
    '.is().thu()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 4).is().thu() == true; }
    },
    '.is().friday()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 5).is().friday() == true; }
    },
    '.is().fri()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 5).is().fri() == true; }
    },
    '.is().saturday()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 6).is().saturday() == true; }
    },
    '.is().sat()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 6).is().sat() == true; }
    },
    '.is().sunday()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 7).is().sunday() == true; }
    },
    '.is().sun()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 7).is().sun() == true; }
    },
    '.is().january()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().january() == true; }
    },
    '.is().jan()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().jan() == true; }
    },
    '.is().february()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 1 ).month().is().february() == true; }
    },
    '.is().feb()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 1 ).month().feb() == true; }
    },
    '.is().march()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 2 ).months().is().march() == true; }
    },
    '.is().mar()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 2 ).months().mar() == true; }
    },
    '.is().april()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 3 ).months().is().april() == true; }
    },
    '.is().apr()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 3 ).months().april() == true; }
    },
    '.is().may()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 4 ).months().is().may() == true; }
    },
    '.is().june()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 5 ).months().is().june() == true; }
    },
    '.is().jun()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 5 ).months().jun() == true; }
    },
    '.is().july()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 6 ).months().is().july() == true; }
    },
    '.is().jul()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 6 ).months().jul() == true; }
    },
    '.is().august()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 7 ).months().is().august() == true; }
    },
    '.is().aug()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 7 ).months().aug() == true; }
    },
    '.is().september()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 8 ).months().is().september() == true; }
    },
    '.is().sep()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 8 ).months().sep() == true; }
    },
    '.is().october()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 9 ).months().is().october() == true; }
    },
    '.is().oct()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 9 ).months().oct() == true; }
    },
    '.is().november()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 10 ).months().is().november() == true; }
    },
    '.is().nov()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 10 ).months().nov() == true; }
    },
    '.is().december()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 11 ).months().is().december() == true; }
    },
    '.is().dec()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).is().add( 11 ).months().dec() == true; }
    }
    
  },
  
  '.add()': {
    setup: function() { },
    '.add( 1 ).second()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( 1 ).second().equals( new Date(2001, 0, 2, 0, 0, 1) ); }
    },
    '.add( -1 ).second()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( -1 ).second().equals( new Date(2001, 0, 1, 23, 59, 59) ); }
    },
    '.add( 10 ).seconds()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( 10 ).seconds().equals( new Date(2001, 0, 2, 0, 0, 10) ); }
    },
    '.add( -10 ).seconds()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( -10 ).seconds().equals( new Date(2001, 0, 1, 23, 59, 50) ); }
    },
    
    '.add( 1 ).minute()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( 1 ).minute().equals( new Date(2001, 0, 2, 0, 1, 0) ); }
    },
    '.add( -1 ).minute()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( -1 ).minute().equals( new Date(2001, 0, 1, 23, 59, 0) ); }
    },
    '.add( 10 ).minutes()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( 10 ).minutes().equals( new Date(2001, 0, 2, 0, 10, 0) ); }
    },
    '.add( -10 ).minutes()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( -10 ).minutes().equals( new Date(2001, 0, 1, 23, 50, 0) ); }
    },

    '.add( 1 ).hour()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( 1 ).hour().equals( new Date(2001, 0, 2, 1, 0, 0) ); }
    },
    '.add( -1 ).hour()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( -1 ).hour().equals( new Date(2001, 0, 1, 23, 0, 0) ); }
    },
    '.add( 10 ).hours()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( 10 ).hours().equals( new Date(2001, 0, 2, 10, 0, 0) ); }
    },
    '.add( -10 ).hours()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 2).add( -10 ).hours().equals( new Date(2001, 0, 1, 14, 0, 0) ); }
    },    
            
    '.add( 1 ).day()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 1 ).day().equals( new Date(2001, 0, 2) ); }
    },
    '.add( -1 ).day()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( -1 ).day().equals( new Date(2000, 11, 31) ); }
    },
    '.add( 31 ).days()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 31 ).days().equals( new Date(2001, 1, 1) ); }
    },
    '.add( -31 ).days()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( -31 ).days().equals( new Date(2000, 11, 1) ); }
    },
    '.add( 1 ).month()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 1 ).month().equals( new Date(2001, 1, 1) ); }
    },
    '.add( -1 ).month()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( -1 ).month().equals( new Date(2000, 11, 1) ); }
    },
    '.add( 6 ).months()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 6 ).months().equals( new Date(2001, 6, 1) ); }
    },
    '.add( -6 ).months()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( -6 ).months().equals( new Date(2000, 6, 1) ); }
    },
    '.add( 1 ).month() : 31-Jan to 28-Feb': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 31).add( 1 ).month().equals( new Date(2001, 1, 28) ); }
    },
    '.add( -1 ).month() : 31-Mar to 28-Feb': {
      run: function() { },
      assert: function() { return new Date(2001, 2, 31).add( -1 ).month().equals( new Date(2001, 1, 28) ); }
    },
    '.add( 1 ).month() : 31-Jan to 29-Feb [leap year]': {
      run: function() { },
      assert: function() { return new Date(2008, 0, 31).add( 1 ).month().equals( new Date(2008, 1, 29) ); }
    },
    '.add( -1 ).month() : 31-Mar to 29-Feb [leap year]': {
      run: function() { },
      assert: function() { return new Date(2008, 2, 31).add( -1 ).month().equals( new Date(2008, 1, 29) ); }
    },
    '.add( 1 ).year()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 1 ).year().equals( new Date(2002, 0, 1) ); }
    },
    '.add( -1 ).year()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( -1 ).year().equals( new Date(2000, 0, 1) ); }
    },
    '.add( -1 ).year() : 29-Feb-2000 to 28-Feb-2001 [leap year]': {
      run: function() { },
      assert: function() { return new Date(2000, 1, 29).add( 1 ).year().equals( new Date(2001, 1, 28) ); }
    },
    '.add( 5 ).years()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( 5 ).years().equals( new Date(2006, 0, 1) ); }
    },
    '.add( -5 ).years()': {
      run: function() { },
      assert: function() { return new Date(2001, 0, 1).add( -5 ).years().equals( new Date(1996, 0, 1) ); }
    }    
  }
   
});

$(document).ready( function() { Date.Specification.validate().show() } );