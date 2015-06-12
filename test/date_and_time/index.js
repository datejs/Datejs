if(typeof require !== 'undefined') {
  var Specification = require('../scripts/specification-converter.js');
}


Date.Specification = new Specification({
  'Overview': {
    setup: function() {
      this.d = [];
      this.d[0] = new Date(2004,6,8,22,30,0,0);
      this.d[1] = this.d[0].clone().setTimezoneOffset('-0400');
    },
    'July 8th, 2004, 10:30 PM': {
      run: function() { this.date = Date.parse('July 8th, 2004, 10:30 PM') },
      assert: function() { return this.d[0].compareTo( this.date ) == 0 }
    },
    '2004.07.08 22:30': {
      run: function() { this.date = Date.parse('2004.07.08 22:30') },
      assert: function() { return this.d[0].compareTo( this.date ) == 0 }
    },
    '10:30pm 08-July-2004': {
      run: function() { this.date = Date.parse('10:30pm 08-July-2004') },
      assert: function() { return this.d[0].compareTo( this.date ) == 0 }
    },
    'Thu Jul 8 2004 22:30:00 GMT-0400': {
      run: function() { this.date = Date.parse('Thu Jul 8 2004 22:30:00 GMT-0400') },
      assert: function() { return this.d[1].equals( this.date ) }      
    }
  },
  
  'Standard Patterns': {
    setup: function() {  
        this.today = new Date().clearTime();
        this.baseline = new Date(2004,6,1,22,30,0);
        this.baseline2 = new Date(2004,6,15,6,45,0);
    },

    '2004, July 01, 10:30:00 PM : FullDateTimePattern [dddd, MMMM dd, yyyy h:mm:ss tt]': {
      run: function() { this.date =  Date.parse('2004, July 01, 10:30:00 PM') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004, July 15, 6:45:00 AM : FullDateTimePattern [dddd, MMMM dd, yyyy h:mm:ss tt]': {
      run: function() { this.date =  Date.parse('2004, July 15, 6:45:00 AM') },
      assert: function() { return this.baseline2.equals( this.date ) }
    }, 

    
    'Thursday, July 01, 2004 : LongDatePattern [dddd, MMMM dd, yyyy]': {
      run: function() { this.date =  Date.parse('Thursday, July 01, 2004') },
      assert: function() { return this.baseline.clearTime().equals( this.date ) }
    },
    'Thursday, July 15, 2004 : LongDatePattern [dddd, MMMM dd, yyyy]': {
      run: function() { this.date =  Date.parse('Thursday, July 15, 2004') },
      assert: function() { return this.baseline2.clearTime().equals( this.date ) }
    },


    '10:30:00 PM : LongTimePattern [h:mm:ss tt]': {
      run: function() { this.date =  Date.parse('10:30:00 PM') },
      assert: function() { return this.today.clone().set( { hour: 22, minute: 30 } ).equals( this.date ) }
    },
    '6:45:00 AM : LongTimePattern [h:mm:ss tt]': {
      run: function() { this.date =  Date.parse('6:45:00 AM') },
      assert: function() { return this.today.clone().set( { hour: 6, minute: 45 } ).equals( this.date ) }
    },    
      
        
    'July 01 : MonthDayPattern [MMMM dd]': {
      run: function() { this.date =  Date.parse('July 01') },
      assert: function() { return this.today.clone().set( { month: 6, day: 1 } ).equals( this.date ) }
    },
    'July 15 : MonthDayPattern [MMMM dd]': {
      run: function() { this.date =  Date.parse('July 15') },
      assert: function() { return Date.today().set( { month: 6, day: 15 } ).equals( this.date ) }
    },
    'July 2004 : YearMonthPattern [MMMM, yyyy]': {
      run: function() { this.date =  Date.parse('July 2004') },
      assert: function() { return new Date(2004,6,1).equals( this.date ) }
    },
    '7/1/2004 : ShortDatePattern [M/d/yyyy]': {
      run: function() { this.date =  Date.parse('7/1/2004') },
      assert: function() { return this.baseline.clearTime().equals( this.date ) }
    },
    '7/15/2004 : ShortDatePattern [M/d/yyyy]': {
      run: function() { this.date =  Date.parse('7/15/2004') },
      assert: function() { return this.baseline2.clearTime().equals( this.date ) }
    },
    '10:30 PM : ShortTimePattern [h:mm tt]': {
      run: function() { this.date =  Date.parse('10:30 PM') },
      assert: function() { return this.today.clone().set( { hour: 22, minute: 30 } ).equals( this.date ) }
    },
    '6:45 AM : ShortTimePattern [h:mm tt]': {
      run: function() { this.date =  Date.parse('6:45 AM') },
      assert: function() { return this.today.clone().set( { hour: 6, minute: 45 } ).equals( this.date ) }
    },    

    '2004-07-01T22:30:00 : SortableDateTimePattern [yyyy-MM-ddTHH:mm:ss]': {
      run: function() { this.date =  Date.parse('2004-07-01T22:30:00') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '2004-07-15T06:45:00 : SortableDateTimePattern [yyyy-MM-ddTHH:mm:ss]': {
      run: function() { this.date =  Date.parse('2004-07-15T06:45:00') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '11 Aug 2007 7:15:00 am EDT': {
      run: function() { this.date =  Date.parse('11 Aug 2007 7:15:00 am EDT') },
      assert: function() { return new Date(2007,7,11,7,15,0).setTimezone('EDT').equals( this.date ) }
    },
    'Tue Nov 20 2007 08:00:00 UTC': {
      run: function() { this.date = Date.parse("Tue Nov 20 2007 08:00:00 UTC") },
      assert: function() { return new Date(2007,10,20,8,0,0).setTimezone("UTC").equals( this.date ) }
    },
    '24 Apr 2008 17:00': {
      run: function() { this.date = Date.parse("24 Apr 2008 17:00") },
      assert: function() { return new Date(2008,3,24,17,0,0).equals( this.date ) }
    },
    '24 April 2008 17:00': {
      run: function() { this.date = Date.parse("24 April 2008 17:00") },
      assert: function() { return new Date(2008,3,24,17,0,0).equals( this.date ) }
    }   
},
    
    'Numeric Variations': {
    setup: function() {
        this.baseline = new Date(2004,6,1,22,30,0);
        this.baseline2 = new Date(2004,6,15,6,45,0);
    },
    '7/1/2004 10 PM': {
      run: function() { this.date = Date.parse('7/1/2004 10 PM') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },
    '07/01/2004 10 PM': {
      run: function() { this.date = Date.parse('07/01/2004 10 PM') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },
    '07/01/04 10 PM': {
      run: function() { this.date = Date.parse('07/01/04 10 PM') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },
    '7/1/04 10 PM': {
      run: function() { this.date = Date.parse('7/1/04 10 PM') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },   
    '7/15/2004 6 AM': {
      run: function() { this.date = Date.parse('7/15/2004 6 AM') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
    '07/15/2004 6 AM': {
      run: function() { this.date = Date.parse('07/15/2004 6 AM') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
    '07/15/04 6 AM': {
      run: function() { this.date = Date.parse('07/15/04 6 AM') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
    '7/15/04 6 AM': {
      run: function() { this.date = Date.parse('7/15/04 6 AM') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
    

    '7/1/2004 10pm': {
      run: function() { this.date = Date.parse('7/1/2004 10pm') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },
    '07/01/2004 10pm': {
      run: function() { this.date = Date.parse('07/01/2004 10pm') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },
    '07/01/04 10pm': {
      run: function() { this.date = Date.parse('07/01/04 10pm') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },
    '7/1/04 10pm': {
      run: function() { this.date = Date.parse('7/1/04 10pm') },
      assert: function() { return this.baseline.addMinutes(-30).equals( this.date ) }
    },   
     
    
    '7/15/2004 6am': {
      run: function() { this.date = Date.parse('7/15/2004 6am') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
    '07/15/2004 6am': {
      run: function() { this.date = Date.parse('07/15/2004 6am') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
    '07/15/04 6am': {
      run: function() { this.date = Date.parse('07/15/04 6am') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
    '7/15/04 6am': {
      run: function() { this.date = Date.parse('7/15/04 6am') },
      assert: function() { return this.baseline2.addMinutes(-45).equals( this.date ) }
    },
        
    
    
    '7/1/2004 10:30 PM': {
      run: function() { this.date = Date.parse('7/1/2004 10:30 PM') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/2004 10:30 PM': {
      run: function() { this.date = Date.parse('07/01/2004 10:30 PM') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/04 10:30 PM': {
      run: function() { this.date = Date.parse('07/01/04 10:30 PM') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7/1/04 10:30 PM': {
      run: function() { this.date = Date.parse('7/1/04 10:30 PM') },
      assert: function() { return this.baseline.equals( this.date ) }
    },   
     
    
    '7/15/2004 6:45 AM': {
      run: function() { this.date = Date.parse('7/15/2004 6:45 AM') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/15/2004 6:45 AM': {
      run: function() { this.date = Date.parse('07/15/2004 6:45 AM') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/15/04 6:45 AM': {
      run: function() { this.date = Date.parse('07/15/04 6:45 AM') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7/15/04 6:45 AM': {
      run: function() { this.date = Date.parse('7/15/04 6:45 AM') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    
    
    '7/1/2004 10:30p': {
      run: function() { this.date = Date.parse('7/1/2004 10:30p') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/2004 10:30p': {
      run: function() { this.date = Date.parse('07/01/2004 10:30p') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '07/01/04 10:30p': {
      run: function() { this.date = Date.parse('07/01/04 10:30p') },
      assert: function() { return this.baseline.equals( this.date ) }
    },
    '7/1/04 10:30p': {
      run: function() { this.date = Date.parse('7/1/04 10:30p') },
      assert: function() { return this.baseline.equals( this.date ) }
    },   
    '7/15/2004 6:45a': {
      run: function() { this.date = Date.parse('7/15/2004 6:45a') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/15/2004 6:45a': {
      run: function() { this.date = Date.parse('07/15/2004 6:45a') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '7/15/04 6:45a': {
      run: function() { this.date = Date.parse('7/15/04 6:45a') },
      assert: function() { return this.baseline2.equals( this.date ) }
    },
    '07/01 10 PM': {
      run: function() { this.date = Date.parse('07/01 10 PM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22 } ).equals( this.date ) }
    },
    '7/1 10 PM': {
      run: function() { this.date = Date.parse('7/1 10 PM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22 } ).equals( this.date ) }
    },   
    '07/15 6 AM': {
      run: function() { this.date = Date.parse('07/15 6 AM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6 } ).equals( this.date ) }
    },
    '7/15 6 AM': {
      run: function() { this.date = Date.parse('7/15 6 AM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6 } ).equals( this.date ) }
    },
    '07/01 10pm': {
      run: function() { this.date = Date.parse('07/01 10pm') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22 } ).equals( this.date ) }
    },
    '7/1 10pm': {
      run: function() { this.date = Date.parse('7/1 10pm') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22 } ).equals( this.date ) }
    },   
    '7/15 6am': {
      run: function() { this.date = Date.parse('7/15 6am') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6 } ).equals( this.date ) }
    },
    '07/15 6am': {
      run: function() { this.date = Date.parse('07/15 6am') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6 } ).equals( this.date ) }
    },
    '07/01 10:30 PM': {
      run: function() { this.date = Date.parse('07/01 10:30 PM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22, minute: 30 } ).equals( this.date ) }
    },
    '7/1 10:30 PM': {
      run: function() { this.date = Date.parse('7/1 10:30 PM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22, minute: 30 } ).equals( this.date ) }
    },
    '7/15 6:45 AM': {
      run: function() { this.date = Date.parse('7/15 6:45 AM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6, minute: 45 } ).equals( this.date ) }
    },
    '07/15 6:45 AM': {
      run: function() { this.date = Date.parse('07/15 6:45 AM') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6, minute: 45 } ).equals( this.date ) }
    },
    '7/1 10:30p': {
      run: function() { this.date = Date.parse('7/1 10:30p') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22, minute: 30 } ).equals( this.date ) }
    },
    '07/01 10:30p': {
      run: function() { this.date = Date.parse('07/01 10:30p') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 1, hour: 22, minute: 30 } ).equals( this.date ) }
    },
    '07/15 6:45a': {
      run: function() { this.date = Date.parse('07/15 6:45a') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6, minute: 45 } ).equals( this.date ) }
    },
    '7/15 6:45a': {
      run: function() { this.date = Date.parse('7/15 6:45a') },
      assert: function() { return new Date().clearTime().set( { month: 6, day: 15, hour: 6, minute: 45 } ).equals( this.date ) }
    }
  },
    'Phrase Variations': {
    setup: function() { 
      var today = new Date().clearTime();
      this.baseline = new Date(2004,06,01,22,30,0,0);
      this.baseline2 = new Date(2004,06,15,6,45,0,0);
      this.baseline3 = new Date( today.getFullYear(),06,1,22,30,0,0);
      this.baseline4 = new Date( today.getFullYear(),06,15,6,45,0,0)
    },
    'Thu Jul 1 2004 22:30:00': {
      run: function() { this.date =  Date.parse('Thu Jul 1 2004 22:30:00') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },  
    'Thu July 01 2004 22:30:00': {
      run: function() { this.date =  Date.parse('Thu July 01 2004 22:30:00') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'Thu Jul 15 2004 06:45:00': {
      run: function() { this.date =  Date.parse('Thu Jul 15 2004 06:45:00') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },  
    'Thu July 15 2004 06:45:00': {
      run: function() { this.date =  Date.parse('Thu July 15 2004 06:45:00') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },    
    'July 1 2004 22:30:00': {
      run: function() { this.date =  Date.parse('July 1 2004 22:30:00') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    }, 
    'July 01 2004 22:30:00': {
      run: function() { this.date =  Date.parse('July 01 2004 22:30:00') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    }, 
    'Jul 15 2004 06:45:00': {
      run: function() { this.date =  Date.parse('Jul 15 2004 06:45:00') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },  
    'July 15 2004 06:45:00': {
      run: function() { this.date =  Date.parse('July 15 2004 06:45:00') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    }, 
    'July 1 2004 10 PM': {
      run: function() { this.date =  Date.parse('July 1 2004 10 PM') },
      assert: function() { return this.baseline.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1 2004 10:30 PM': {
      run: function() { this.date =  Date.parse('July 1 2004 10:30 PM') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'Jul 1 2004 10PM': {
      run: function() { this.date =  Date.parse('Jul 1 2004 10PM') },
      assert: function() { return this.baseline.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'Jul 1 2004 10:30PM': {
      run: function() { this.date =  Date.parse('Jul 1 2004 10:30PM') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'July 1 2004 10p': {
      run: function() { this.date =  Date.parse('July 1 2004 10p') },
      assert: function() { return this.baseline.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1 2004 10:30p': {
      run: function() { this.date =  Date.parse('July 1 2004 10:30p') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'July 15 2004 6 AM': {
      run: function() { this.date =  Date.parse('July 15 2004 6 AM') },
      assert: function() { return this.baseline2.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15 2004 6:45 AM': {
      run: function() { this.date =  Date.parse('July 15 2004 6:45 AM') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },
    'Jul 15 2004 6AM': {
      run: function() { this.date =  Date.parse('Jul 15 2004 6AM') },
      assert: function() { return this.baseline2.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'Jul 15 2004 6:45AM': {
      run: function() { this.date =  Date.parse('Jul 15 2004 6:45AM') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },
    'July 15 2004 6a': {
      run: function() { this.date =  Date.parse('July 15 2004 6a') },
      assert: function() { return this.baseline2.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15 2004 6:45a': {
      run: function() { this.date =  Date.parse('July 15 2004 6:45a') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },
    'July 1st 2004 10 PM': {
      run: function() { this.date =  Date.parse('July 1st 2004 10 PM') },
      assert: function() { return this.baseline.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1st 2004 10:30 PM': {
      run: function() { this.date =  Date.parse('July 1st 2004 10:30 PM') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'Jul 1 2004 10PM': {
      run: function() { this.date =  Date.parse('Jul 1 2004 10PM') },
      assert: function() { return this.baseline.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'Jul 1 2004 10:30PM': {
      run: function() { this.date =  Date.parse('Jul 1 2004 10:30PM') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'July 1st 2004 10p': {
      run: function() { this.date =  Date.parse('July 1st 2004 10p') },
      assert: function() { return this.baseline.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1st 2004 10:30p': {
      run: function() { this.date =  Date.parse('July 1st 2004 10:30p') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'July 15th 2004 6 AM': {
      run: function() { this.date =  Date.parse('July 15th 2004 6 AM') },
      assert: function() { return this.baseline2.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15th 2004 6:45 AM': {
      run: function() { this.date =  Date.parse('July 15th 2004 6:45 AM') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },
    'Jul 15 2004 6AM': {
      run: function() { this.date =  Date.parse('Jul 15 2004 6AM') },
      assert: function() { return this.baseline2.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'Jul 15 2004 6:45AM': {
      run: function() { this.date =  Date.parse('Jul 15 2004 6:45AM') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },
    'July 15th 2004 6a': {
      run: function() { this.date =  Date.parse('July 15th 2004 6a') },
      assert: function() { return this.baseline2.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15th 2004 6:45a': {
      run: function() { this.date =  Date.parse('July 15th 2004 6:45a') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    },
    'July 1 10 PM': {
      run: function() { this.date =  Date.parse('July 1 10 PM') },
      assert: function() { return this.baseline3.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1 10:30 PM': {
      run: function() { this.date =  Date.parse('July 1 10:30 PM') },
      assert: function() { return this.baseline3.compareTo( this.date ) == 0 }
    },
    'Jul 1 10PM': {
      run: function() { this.date =  Date.parse('Jul 1 10PM') },
      assert: function() { return this.baseline3.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'Jul 1 10:30PM': {
      run: function() { this.date =  Date.parse('Jul 1 10:30PM') },
      assert: function() { return this.baseline3.compareTo( this.date ) == 0 }
    },
    'July 1 10p': {
      run: function() { this.date =  Date.parse('July 1 10p') },
      assert: function() { return this.baseline3.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1 10:30p': {
      run: function() { this.date =  Date.parse('July 1 10:30p') },
      assert: function() { return this.baseline3.compareTo( this.date ) == 0 }
    },
    'July 15 6 AM': {
      run: function() { this.date =  Date.parse('July 15 6 AM') },
      assert: function() { return this.baseline4.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15 6:45 AM': {
      run: function() { this.date =  Date.parse('July 15 6:45 AM') },
      assert: function() { return this.baseline4.compareTo( this.date ) == 0 }
    },
    'Jul 15 6AM': {
      run: function() { this.date =  Date.parse('Jul 15 6AM') },
      assert: function() { return this.baseline4.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'Jul 15 6:45AM': {
      run: function() { this.date =  Date.parse('Jul 15 6:45AM') },
      assert: function() { return this.baseline4.compareTo( this.date ) == 0 }
    },
    'July 15 6a': {
      run: function() { this.date =  Date.parse('July 15 6a') },
      assert: function() { return this.baseline4.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15 6:45a': {
      run: function() { this.date =  Date.parse('July 15 6:45a') },
      assert: function() { return this.baseline4.compareTo( this.date ) == 0 }
    },
    'July 1st 10 PM': {
      run: function() { this.date =  Date.parse('July 1st 10 PM') },
      assert: function() { return this.baseline3.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1st 10:30 PM': {
      run: function() { this.date =  Date.parse('July 1st 10:30 PM') },
      assert: function() { return this.baseline3.compareTo( this.date ) == 0 }
    },
    'Jul 1 10PM': {
      run: function() { this.date =  Date.parse('Jul 1 10PM') },
      assert: function() { return this.baseline3.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'Jul 1 10:30PM': {
      run: function() { this.date =  Date.parse('Jul 1 10:30PM') },
      assert: function() { return this.baseline3.compareTo( this.date ) == 0 }
    },
    'July 1st 10p': {
      run: function() { this.date =  Date.parse('July 1st 10p') },
      assert: function() { return this.baseline3.addMinutes(-30).compareTo( this.date ) == 0 }
    }, 
    'July 1st 10:30p': {
      run: function() { this.date =  Date.parse('July 1st 10:30p') },
      assert: function() { return this.baseline3.compareTo( this.date ) == 0 }
    },
    'July 15th 6 AM': {
      run: function() { this.date =  Date.parse('July 15th 6 AM') },
      assert: function() { return this.baseline4.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15th 6:45 AM': {
      run: function() { this.date =  Date.parse('July 15th 6:45 AM') },
      assert: function() { return this.baseline4.compareTo( this.date ) == 0 }
    },
    'Jul 15 6AM': {
      run: function() { this.date =  Date.parse('Jul 15 6AM') },
      assert: function() { return this.baseline4.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'Jul 15 6:45AM': {
      run: function() { this.date =  Date.parse('Jul 15 6:45AM') },
      assert: function() { return this.baseline4.compareTo( this.date ) == 0 }
    },
    'July 15th 6a': {
      run: function() { this.date =  Date.parse('July 15th 6a') },
      assert: function() { return this.baseline4.addMinutes(-45).compareTo( this.date ) == 0 }
    }, 
    'July 15th 6:45a': {
      run: function() { this.date =  Date.parse('July 15th 6:45a') },
      assert: function() { return this.baseline4.compareTo( this.date ) == 0 }
    }, 
    'JSON: 2004-07-01T22:30:00': {
      run: function() { this.date =  Date.parse('2004-07-01T22:30:00') },
      assert: function() { return this.baseline.compareTo( this.date ) == 0 }
    },
    'JSON: 2004-07-15T06:45:00': {
      run: function() { this.date =  Date.parse('2004-07-15T06:45:00') },
      assert: function() { return this.baseline2.compareTo( this.date ) == 0 }
    }
  },
 'Common Formats': {
    setup: function() {
          this.d = [];
          this.d[0] = new Date(2004,6,1,22,30,0,0);
          this.d[1] = new Date(2004,6,15,6,45,0,0);
          this.d[2] = Date.today().set( { hour: 22, minute: 30 } );
          this.d[3] = Date.today().set( { hour: 6, minute: 45 } );
          this.d[4] = Date.today().set( { month: 6, day: 1 } );
          this.d[5] = Date.today().set( { month: 6, day: 15 } );
          this.d[6] = Date.today().set( { month: 6, day: 1, year: 2004 } );
          this.d[7] = this.d[0].clone().setTimezoneOffset( 0 );
          this.d[8] = this.d[1].clone().setTimezoneOffset( '-0400' );
    },

    'Thursday, July 01, 2004 10:30:00 PM : "dddd, MMMM dd, yyyy h:mm:ss tt"': {
        run: function() { this.date =  Date.parse('Thursday, July 01, 2004 10:30:00 PM') },
        assert: function() {  return this.d[0].equals( this.date ) }
    },
      'Thursday, July 01, 2004 : "dddd, MMMM dd, yyyy"': {
        run: function() { this.date =  Date.parse('Thursday, July 01, 2004') },
        assert: function() { return this.d[0].clearTime().equals( this.date ) }
      },
      'Thursday, July 15, 2004 : "dddd, MMMM dd, yyyy"': {
        run: function() { this.date =  Date.parse('Thursday, July 15, 2004') },
        assert: function() { return this.d[1].clearTime().equals( this.date ) }
      },
      '10:30:00 PM : "h:mm:ss tt"': {
        run: function() { this.date =  Date.parse('10:30:00 PM') },
        assert: function() { return this.d[2].equals( this.date ) }
      },
      '6:45:00 AM : "h:mm:ss tt"': {
        run: function() { this.date =  Date.parse('6:45:00 AM') },
        assert: function() { return this.d[3].equals( this.date ) }
      },    
      'July 01 : "MMMM dd"': {
        run: function() { this.date =  Date.parse('July 01') },
        assert: function() { return this.d[4].equals( this.date ) }
      },
      'July 15 : "MMMM dd"': {
        run: function() { this.date =  Date.parse('July 15') },
        assert: function() { return this.d[5].equals( this.date ) }
      },
      'July 2004 : "MMMM, yyyy"': {
        run: function() { this.date =  Date.parse('July 2004') },
        assert: function() { return this.d[6].equals( this.date ) }
      },
      '7/1/2004 : "M/d/yyyy"': {
        run: function() { this.date =  Date.parse('7/1/2004') },
        assert: function() { return this.d[0].clearTime().equals( this.date ) }
      },
      '7/15/2004 : "M/d/yyyy"': {
        run: function() { this.date =  Date.parse('7/15/2004') },
        assert: function() { return this.d[1].clearTime().equals( this.date ) }
      },
      '10:30 PM : "h:mm tt"': {
        run: function() { this.date =  Date.parse('10:30 PM') },
        assert: function() { return this.d[2].equals( this.date ) }
      },
      '6:45 AM : "h:mm tt"': {
        run: function() { this.date =  Date.parse('6:45 AM') },
        assert: function() { return this.d[3].equals( this.date ) }
      },    
      '2004-07-01T22:30:00 : "yyyy-MM-ddTHH:mm:ss"': {
        run: function() { this.date =  Date.parse('2004-07-01T22:30:00') },
        assert: function() { return this.d[0].equals( this.date ) }
      },
      '2004-07-15T06:45:00 : "yyyy-MM-ddTHH:mm:ss"': {
        run: function() { this.date =  Date.parse('2004-07-15T06:45:00') },
        assert: function() { return this.d[1].equals( this.date ) }
      },    
      '2004-07-15 06:45:00 -0400 : "yyyy-MM-dd HH:mm:ss Z"': {
        run: function() { this.date =  Date.parse('2004-07-15 06:45:00 -0400') },
        assert: function() { return this.d[8].equals( this.date ) }
      },
      'Thu, 1 July 2004 22:30:00 GMT : "ddd, dd MMM yyyy HH:mm:ss GMT"': {
        run: function() { this.date =  Date.parse('Thu, 1 July 2004 22:30:00 GMT') },
        assert: function() { return this.d[7].equals( this.date ) }
      }
  },


'ISO 8601 Formats': {
    setup: function() {
          this.d = [];
          this.d[0] = new Date(2004,6,1,22,30,0,0);
          this.d[1] = new Date(2004,6,15,6,45,0,0);
          this.d[2] = Date.today().set( { hour: 22, minute: 30 } );
          this.d[3] = Date.today().set( { hour: 6, minute: 45 } );
          this.d[4] = Date.today().set( { month: 6, day: 1 } );
          this.d[5] = Date.today().set( { month: 6, day: 15 } );
          this.d[6] = Date.today().set( { month: 6, day: 1, year: 2004 } );
          this.d[7] = this.d[0].clone().setTimezoneOffset( 0 );
          this.d[8] = this.d[1].clone().setTimezoneOffset( '-0400' );
    },

      '1997 : "YYYY"': {
        run: function() { },
        assert: function() { return Date.today().set({year: 1997, day: 1}).equals( Date.parse('1997') ) }
      },
      '1997-07 : "YYYY-MM"': {
        run: function() { },
        assert: function() { return Date.july().set({year: 1997}).equals( Date.parse('1997-07') ) }
      },
      '1997-07-16 : "YYYY-MM-DD"': {
        run: function() { },
        assert: function() { return Date.july().set({year: 1997, day: 16}).equals( Date.parse('1997-07-16') ) }
      },      
      '1997-07-16T19:20 : "YYYY-MM-DDThh:mm"': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,0).equals( Date.parse('1997-07-16T19:20') ) }
      },
      '1997-07-16T19:20 : "YYYY-MM-DDThh:mm" : .parseExact': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,0).equals( Date.parseExact('1997-07-16T19:20',"yyyy-MM-ddTHH:mm") ) }
      },      
      '1997-07-16T19:20:15 : "YYYY-MM-DDThh:mm:ss"': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,15).equals( Date.parse('1997-07-16T19:20:15') ) }
      },
      '1997-07-16T19:20:15 : "YYYY-MM-DDThh:mm:ss" : .parseExact': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,15).equals( Date.parseExact('1997-07-16T19:20:15', "yyyy-MM-ddTHH:mm:ss") ) }
      },

      '1997-07-16T19:20+01:00 : "YYYY-MM-DDThh:mmTZD"': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,0).setTimezoneOffset('+0100').equals( Date.parse('1997-07-16T19:20+01:00') ) }
      },
      '1997-07-16T19:20+01:00 : "YYYY-MM-DDThh:mmTZD" : parseExact': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,0).setTimezoneOffset('+0100').equals( Date.parseExact('1997-07-16T19:20+01:00', "yyyy-MM-ddTHH:mmz") ) }
      },
       '1997-07-16T19:20:30+01:00 : "YYYY-MM-DDThh:mm:ssTZD"': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,30).setTimezoneOffset('+0100').equals( Date.parse('1997-07-16T19:20:30+01:00') ) }
      },
       '1997-07-16T19:20:30+01:00 : "YYYY-MM-DDThh:mm:ssTZD" : parseExact': {
        run: function() { },
        assert: function() { return new Date(1997,6,16,19,20,30).setTimezoneOffset('+0100').equals( Date.parseExact('1997-07-16T19:20:30+01:00', "yyyy-MM-ddTHH:mm:ssz") ) }
      },
  },

'RFC 3339 Formats': {
    setup: function() {
          this.d = [];
          this.d[0] = new Date(2004,6,1,22,30,0,0);
          this.d[1] = new Date(2004,6,15,6,45,0,0);
          this.d[2] = Date.today().set( { hour: 22, minute: 30 } );
          this.d[3] = Date.today().set( { hour: 6, minute: 45 } );
          this.d[4] = Date.today().set( { month: 6, day: 1 } );
          this.d[5] = Date.today().set( { month: 6, day: 15 } );
          this.d[6] = Date.today().set( { month: 6, day: 1, year: 2004 } );
          this.d[7] = this.d[0].clone().setTimezoneOffset( 0 );
          this.d[8] = this.d[1].clone().setTimezoneOffset( '-0400' );
    },

      '1985-04-12T23:20:50': {
        run: function() { },
        assert: function() { return new Date(1985,3,12,23,20,50).equals( Date.parse('1985-04-12T23:20:50') ) }
      },
      '1985-04-12T23:20:50Z': {
        run: function() { },
        assert: function() { return new Date(1985,3,12,23,20,50).equals( Date.parse('1985-04-12T23:20:50Z') ) }
      },  
      'Much faster with Date.parseExact("1985-04-12T23:20:50Z", "yyyy-MM-ddTHH:mm:ssZ")': {
        run: function() { },
        assert: function() { return new Date(1985,3,12,23,20,50).equals( Date.parseExact('1985-04-12T23:20:50Z', "yyyy-MM-ddTHH:mm:ssZ") ) }
      }         

  },
  'Quriks: Date.parse cannot handle ISO Dates with milliseconds and tz data, use new Date() instead': {
       '1997-07-16T19:20:30.045+01:00 : "YYYY-MM-DDThh:mm:ss.sTZD"': {
        run: function() { 
            var ISOString = '1997-07-16T19:20:30.045+0100';
            this.date = new Date(1997,6,16,19,20,30,45).setTimezoneOffset('+0100');
            this.shouldBeNull = Date.parse(ISOString);
            this.fromNew = new Date(ISOString);
        },
        assert: function() { 
          return this.shouldBeNull === null && this.date.equals(this.fromNew);
        }
      }    
},
});

