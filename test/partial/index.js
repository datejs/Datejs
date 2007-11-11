Date.Specification = new Specification({
  'Partial Date: No Year': {
     setup: function() {
       this.today = new Date().clearTime(); 
       this.baseline = []; 
       this.baseline[0] = this.today.clone().set( { month: 6, day: 1 } )
       this.baseline[1] = this.today.clone().set( { month: 6, day: 1, hour: 22 } );
       this.baseline[2] = this.today.clone().set( { month: 6, day: 1, hour: 22, minute: 30 } );
       
       this.baseline[3] = this.today.clone().set( { month: 6, day: 15 } )
       this.baseline[4] = this.today.clone().set( { month: 6, day: 15, hour: 6 } );
       this.baseline[5] = this.today.clone().set( { month: 6, day: 15, hour: 6, minute: 45 } );
     },
     
    '7/1 10 PM': {
      run: function() { this.date =  Date.parse('7/1 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10 PM': {
      run: function() { this.date =  Date.parse('07/01 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10 PM': {
      run: function() { this.date =  Date.parse('07/01 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '7/1 10 PM': {
      run: function() { this.date =  Date.parse('7/1 10 PM') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },   
    '7/15 6 AM': {
      run: function() { this.date =  Date.parse('7/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6 AM': {
      run: function() { this.date =  Date.parse('07/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6 AM': {
      run: function() { this.date =  Date.parse('07/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '7/15 6 AM': {
      run: function() { this.date =  Date.parse('7/15 6 AM') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '7/1 10pm': {
      run: function() { this.date =  Date.parse('7/1 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10pm': {
      run: function() { this.date =  Date.parse('07/01 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '07/01 10pm': {
      run: function() { this.date =  Date.parse('07/01 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },
    '7/1 10pm': {
      run: function() { this.date =  Date.parse('7/1 10pm') },
      assert: function() { return this.baseline[1].compareTo( this.date ) == 0 }
    },   
    '7/15 6am': {
      run: function() { this.date =  Date.parse('7/15 6am') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6am': {
      run: function() { this.date =  Date.parse('07/15 6am') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '07/15 6am': {
      run: function() { this.date =  Date.parse('07/15 6am') },
      assert: function() { return this.baseline[4].compareTo( this.date ) == 0 }
    },
    '7/15 6am': {
      run: function() { this.date =  Date.parse('7/15 6am') },
      assert: function() { return this.baseline[4].equals( this.date ) }
    },
    '7/1 10:30 PM': {
      run: function() { this.date =  Date.parse('7/1 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30 PM': {
      run: function() { this.date =  Date.parse('07/01 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30 PM': {
      run: function() { this.date =  Date.parse('07/01 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '7/1 10:30 PM': {
      run: function() { this.date =  Date.parse('7/1 10:30 PM') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },   
    '7/15 6:45 AM': {
      run: function() { this.date =  Date.parse('7/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45 AM': {
      run: function() { this.date =  Date.parse('07/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45 AM': {
      run: function() { this.date =  Date.parse('07/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '7/15 6:45 AM': {
      run: function() { this.date =  Date.parse('7/15 6:45 AM') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '7/1 10:30p': {
      run: function() { this.date =  Date.parse('7/1 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30p': {
      run: function() { this.date =  Date.parse('07/01 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '07/01 10:30p': {
      run: function() { this.date =  Date.parse('07/01 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },
    '7/1 10:30p': {
      run: function() { this.date =  Date.parse('7/1 10:30p') },
      assert: function() { return this.baseline[2].equals( this.date ) }
    },   
    '7/15 6:45a': {
      run: function() { this.date =  Date.parse('7/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45a': {
      run: function() { this.date =  Date.parse('07/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '07/15 6:45a': {
      run: function() { this.date =  Date.parse('07/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '7/15 6:45a': {
      run: function() { this.date =  Date.parse('7/15 6:45a') },
      assert: function() { return this.baseline[5].equals( this.date ) }
    },
    '1-Jul': {
      run: function() { this.date =  Date.parse('1-Jul') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '1-July': {
      run: function() { this.date =  Date.parse('1-July') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },    
    '01-Jul': {
      run: function() { this.date =  Date.parse('01-Jul') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    '01-July': {
      run: function() { this.date =  Date.parse('01-July') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },     
    '15-Jul': {
      run: function() { this.date =  Date.parse('15-Jul') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '15-July': {
      run: function() { this.date =  Date.parse('15-July') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },  


    'July 1': {
      run: function() { this.date =  Date.parse('July 1') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },   
    'Jul 1': {
      run: function() { this.date =  Date.parse('Jul 1') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    'July 01': {
      run: function() { this.date =  Date.parse('July 01') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },   
    'Jul 01': {
      run: function() { this.date =  Date.parse('Jul 01') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },      
    'July 15': {
      run: function() { this.date =  Date.parse('July 15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    }, 
    'Jul 15': {
      run: function() { this.date =  Date.parse('Jul 15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },       
    
    
    'July 1st': {
      run: function() { this.date =  Date.parse('July 1st') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },   
    'July 2nd': {
      run: function() { this.date =  Date.parse('July 2nd') },
      assert: function() { return this.baseline[0].addDays(1).equals( this.date ) }
    },   
    'July 3rd': {
      run: function() { this.date =  Date.parse('July 3rd') },
      assert: function() { return this.baseline[0].addDays(2).equals( this.date ) }
    },   
    'July 4th': {
      run: function() { this.date =  Date.parse('July 4th') },
      assert: function() { return this.baseline[0].addDays(3).equals( this.date ) }
    }, 
    
    
    '7/1': {
      run: function() { this.date =  Date.parse('7/1') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    },
    '07/01': {
      run: function() { this.date =  Date.parse('07/01') },
      assert: function() { return this.baseline[0].equals( this.date ) }
    }, 
    '7/15': {
      run: function() { this.date =  Date.parse('7/15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    },
    '07/15': {
      run: function() { this.date =  Date.parse('07/15') },
      assert: function() { return this.baseline[3].equals( this.date ) }
    }              

 },
  


   'No Day: Default To First Of Month': {
    setup: function() { 
      this.baseline = new Date(2004,6,1);
    },
    'July 2004': {
      run: function() { this.date =  Date.parse('July 2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    'Jul 2004': {
      run: function() { this.date =  Date.parse('Jul 2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7/2004': {
      run: function() { this.date =  Date.parse('7/2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    }, 
    '7 2004': {
      run: function() { this.date =  Date.parse('7 2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7-2004': {
      run: function() { this.date =  Date.parse('7-2004') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004 7': {
      run: function() { this.date =  Date.parse('2004 7') },
      assert: function() { return this.baseline.equals( this.date ) }
    },    
    '2004-7': {
      run: function() { this.date =  Date.parse('2004-7') },
      assert: function() { return this.baseline.equals( this.date ) }
    },    
    '2004/7': {
      run: function() { this.date =  Date.parse('2004/7') },
      assert: function() { return this.baseline.equals( this.date ) }
    }
  },  
  
  
    'No Year or Month': {
    setup: function() { 
      //default to current Year and Month
        this.baseline = new Date(2004,6,1);
        
        this.today = Date.today();
        this.now = Date.now();
    },
    '1': {
      run: function() { this.date =  Date.parse('1') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 1).equals( this.date ) }
    }, 
    '5': {
      run: function() { this.date =  Date.parse('5') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 5).equals( this.date ) }
    }, 
    '12': {
      run: function() { this.date =  Date.parse('12') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 12).equals( this.date ) }
    },    
    '13': {
      run: function() { this.date =  Date.parse('13') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 13).equals( this.date ) }
    },    
    '15': {
      run: function() { this.date =  Date.parse('15') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 15).equals( this.date ) }
    },
    '28': {
      run: function() { this.date =  Date.parse('28') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 28).equals( this.date ) }
    }, 
	'29 : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('29');
		    if( this.date != null && Date.today().getDaysInMonth() >= 29 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30 : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('30');
		    if( this.date != null && Date.today().getDaysInMonth() >= 30 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31 : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('31');
		    if( this.date != null && Date.today().getDaysInMonth() == 31 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},	
	'32 : Year 2032': {
    run: function() { },
		assert: function() {
            return Date.today().set( { year: 2032 } ).equals( Date.parse('32') );
		}
	},
    '1st': {
      run: function() { this.date =  Date.parse('1st') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 1).equals( this.date ) }
    }, 
    '2nd': {
      run: function() { this.date =  Date.parse('2nd') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 2).equals( this.date ) }
    }, 
    '3rd': {
      run: function() { this.date =  Date.parse('3rd') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 3).equals( this.date ) }
    },     
    '5th': {
      run: function() { this.date =  Date.parse('5th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 5).equals( this.date ) }
    }, 
    '12th': {
      run: function() { this.date =  Date.parse('12th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 12).equals( this.date ) }
    },    
    '13th': {
      run: function() { this.date =  Date.parse('13th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 13).equals( this.date ) }
    },    
    '15th': {
      run: function() { this.date =  Date.parse('15th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 15).equals( this.date ) }
    },
    '28th': {
      run: function() { this.date =  Date.parse('28th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 28).equals( this.date ) }
    },    
	'29th : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('29th');
		    if( this.date != null && Date.today().getDaysInMonth() >= 29 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30th : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('30th');
		    if( this.date != null && Date.today().getDaysInMonth() >= 30 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31st : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('31st');
		    if( this.date != null && Date.today().getDaysInMonth() == 31 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},		
    '1 st': {
      run: function() { this.date =  Date.parse('1 st') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 1).equals( this.date ) }
    }, 
    ' 2 nd': {
      run: function() { this.date =  Date.parse('2 nd') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 2).equals( this.date ) }
    }, 
    '3 rd': {
      run: function() { this.date =  Date.parse('3 rd') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 3).equals( this.date ) }
    },     
    '5 th': {
      run: function() { this.date =  Date.parse('5 th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 5).equals( this.date ) }
    }, 
    '12 th': {
      run: function() { this.date =  Date.parse('12 th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 12).equals( this.date ) }
    },    
    '13 th': {
      run: function() { this.date =  Date.parse('13 th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 13).equals( this.date ) }
    },    
    '15 th': {
      run: function() { this.date =  Date.parse('15 th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 15).equals( this.date ) }
    },
    '28 th': {
      run: function() { this.date =  Date.parse('28 th') },
      assert: function() { return new Date(this.today.getFullYear(), this.today.getMonth(), 28).equals( this.date ) }
    },    
	'29 th : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('29 th');
		    if( this.date != null && Date.today().getDaysInMonth() >= 29 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30 th : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('30 th');
		    if( this.date != null && Date.today().getDaysInMonth() >= 30 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31 st : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('31 st');
		    if( this.date != null && Date.today().getDaysInMonth() == 31 ) {
		        return true;
		    }
		    if( Date.today().getDaysInMonth() < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	}
  }
  
});

$(document).ready( function() { Date.Specification.validate().show() } );