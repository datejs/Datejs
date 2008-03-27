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
      this.baseline = new Date(2008,6,1);
    },
    'Jan 2008': {
      run: function() { this.date =  Date.parse('Jan 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    },
    'January 2008': {
      run: function() { this.date =  Date.parse('January 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    },
    'Feb 2008': {
      run: function() { this.date =  Date.parse('Feb 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    },
     'February 2008': {
      run: function() { this.date =  Date.parse('February 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    },
     'Mar 2008': {
      run: function() { this.date =  Date.parse('Mar 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    },
     'March 2008': {
      run: function() { this.date =  Date.parse('March 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    },
     'Apr 2008': {
      run: function() { this.date =  Date.parse('Apr 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    },
     'April 2008': {
      run: function() { this.date =  Date.parse('April 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    },
     'May 2008': {
      run: function() { this.date =  Date.parse('May 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    },
     'Jun 2008': {
      run: function() { this.date =  Date.parse('Jun 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    },
     'June 2008': {
      run: function() { this.date =  Date.parse('June 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    },
     'Jul 2008': {
      run: function() { this.date =  Date.parse('Jul 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    },
     'July 2008': {
      run: function() { this.date =  Date.parse('July 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    },
     'Aug 2008': {
      run: function() { this.date =  Date.parse('Aug 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
     'August 2008': {
      run: function() { this.date =  Date.parse('August 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
     'Sep 2008': {
      run: function() { this.date =  Date.parse('Sep 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    },
     'Sept 2008': {
      run: function() { this.date =  Date.parse('Sept 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    },
     'September 2008': {
      run: function() { this.date =  Date.parse('September 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    },
     'Oct 2008': {
      run: function() { this.date =  Date.parse('Oct 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    },
     'October 2008': {
      run: function() { this.date =  Date.parse('October 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    },
     'Nov 2008': {
      run: function() { this.date =  Date.parse('November 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    },
     'November 2008': {
      run: function() { this.date =  Date.parse('November 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    },
     'Dec 2008': {
      run: function() { this.date =  Date.parse('Dec 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
     'December 2008': {
      run: function() { this.date =  Date.parse('December 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    '1/2008': {
      run: function() { this.date =  Date.parse('1/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2/2008': {
      run: function() { this.date =  Date.parse('2/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '3/2008': {
      run: function() { this.date =  Date.parse('3/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '4/2008': {
      run: function() { this.date =  Date.parse('4/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '5/2008': {
      run: function() { this.date =  Date.parse('5/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '6/2008': {
      run: function() { this.date =  Date.parse('6/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '7/2008': {
      run: function() { this.date =  Date.parse('7/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '8/2008': {
      run: function() { this.date =  Date.parse('8/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '9/2008': {
      run: function() { this.date =  Date.parse('9/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '10/2008': {
      run: function() { this.date =  Date.parse('10/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '11/2008': {
      run: function() { this.date =  Date.parse('11/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '12/2008': {
      run: function() { this.date =  Date.parse('12/2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    }, 

 '1 2008': {
      run: function() { this.date =  Date.parse('1 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2 2008': {
      run: function() { this.date =  Date.parse('2 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '3 2008': {
      run: function() { this.date =  Date.parse('3 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '4 2008': {
      run: function() { this.date =  Date.parse('4 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '5 2008': {
      run: function() { this.date =  Date.parse('5 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '6 2008': {
      run: function() { this.date =  Date.parse('6 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '7 2008': {
      run: function() { this.date =  Date.parse('7 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '8 2008': {
      run: function() { this.date =  Date.parse('8 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '9 2008': {
      run: function() { this.date =  Date.parse('9 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '10 2008': {
      run: function() { this.date =  Date.parse('10 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '11 2008': {
      run: function() { this.date =  Date.parse('11 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '12 2008': {
      run: function() { this.date =  Date.parse('12 2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    
  '1-2008': {
      run: function() { this.date =  Date.parse('1-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2-2008': {
      run: function() { this.date =  Date.parse('2-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '3-2008': {
      run: function() { this.date =  Date.parse('3-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '4-2008': {
      run: function() { this.date =  Date.parse('4-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '5-2008': {
      run: function() { this.date =  Date.parse('5-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '6-2008': {
      run: function() { this.date =  Date.parse('6-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '7-2008': {
      run: function() { this.date =  Date.parse('7-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '8-2008': {
      run: function() { this.date =  Date.parse('8-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '9-2008': {
      run: function() { this.date =  Date.parse('9-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '10-2008': {
      run: function() { this.date =  Date.parse('10-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '11-2008': {
      run: function() { this.date =  Date.parse('11-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '12-2008': {
      run: function() { this.date =  Date.parse('12-2008') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
       
       '2008/1': {
      run: function() { this.date =  Date.parse('2008/1') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2008/2': {
      run: function() { this.date =  Date.parse('2008/2') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '2008/3': {
      run: function() { this.date =  Date.parse('2008/3') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '2008/4': {
      run: function() { this.date =  Date.parse('2008/4') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '2008/5': {
      run: function() { this.date =  Date.parse('2008/5') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '2008/6': {
      run: function() { this.date =  Date.parse('2008/6') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '2008/7': {
      run: function() { this.date =  Date.parse('2008/7') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '2008/8': {
      run: function() { this.date =  Date.parse('2008/8') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '2008/9': {
      run: function() { this.date =  Date.parse('2008/9') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '2008/10': {
      run: function() { this.date =  Date.parse('2008/10') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '2008/11': {
      run: function() { this.date =  Date.parse('2008/11') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '2008/12': {
      run: function() { this.date =  Date.parse('2008/12') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    
        
    '2008-1': {
      run: function() { this.date =  Date.parse('2008-1') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2008-2': {
      run: function() { this.date =  Date.parse('2008-2') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '2008-3': {
      run: function() { this.date =  Date.parse('2008-3') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '2008-4': {
      run: function() { this.date =  Date.parse('2008-4') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '2008-5': {
      run: function() { this.date =  Date.parse('2008-5') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '2008-6': {
      run: function() { this.date =  Date.parse('2008-6') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '2008-7': {
      run: function() { this.date =  Date.parse('2008-7') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '2008-8': {
      run: function() { this.date =  Date.parse('2008-8') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '2008-9': {
      run: function() { this.date =  Date.parse('2008-9') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '2008-10': {
      run: function() { this.date =  Date.parse('2008-10') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '2008-11': {
      run: function() { this.date =  Date.parse('2008-11') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '2008-12': {
      run: function() { this.date =  Date.parse('2008-12') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    },
    
       
    '2008 1': {
      run: function() { this.date =  Date.parse('2008 1') },
      assert: function() { return Date.today().set({year: 2008, month: 0, day: 1}).equals( this.date ) }
    }, 
    '2008 2': {
      run: function() { this.date =  Date.parse('2008 2') },
      assert: function() { return Date.today().set({year: 2008, month: 1, day: 1}).equals( this.date ) }
    }, 
    '2008 3': {
      run: function() { this.date =  Date.parse('2008 3') },
      assert: function() { return Date.today().set({year: 2008, month: 2, day: 1}).equals( this.date ) }
    }, 
    '2008 4': {
      run: function() { this.date =  Date.parse('2008 4') },
      assert: function() { return Date.today().set({year: 2008, month: 3, day: 1}).equals( this.date ) }
    }, 
    '2008 5': {
      run: function() { this.date =  Date.parse('2008 5') },
      assert: function() { return Date.today().set({year: 2008, month: 4, day: 1}).equals( this.date ) }
    }, 
    '2008 6': {
      run: function() { this.date =  Date.parse('2008 6') },
      assert: function() { return Date.today().set({year: 2008, month: 5, day: 1}).equals( this.date ) }
    }, 
    '2008 7': {
      run: function() { this.date =  Date.parse('2008 7') },
      assert: function() { return Date.today().set({year: 2008, month: 6, day: 1}).equals( this.date ) }
    }, 
    '2008 8': {
      run: function() { this.date =  Date.parse('2008 8') },
      assert: function() { return Date.today().set({year: 2008, month: 7, day: 1}).equals( this.date ) }
    },
    '2008 9': {
      run: function() { this.date =  Date.parse('2008 9') },
      assert: function() { return Date.today().set({year: 2008, month: 8, day: 1}).equals( this.date ) }
    }, 
    '2008 10': {
      run: function() { this.date =  Date.parse('2008 10') },
      assert: function() { return Date.today().set({year: 2008, month: 9, day: 1}).equals( this.date ) }
    }, 
    '2008 11': {
      run: function() { this.date =  Date.parse('2008 11') },
      assert: function() { return Date.today().set({year: 2008, month: 10, day: 1}).equals( this.date ) }
    }, 
    '2008 12': {
      run: function() { this.date =  Date.parse('2008 12') },
      assert: function() { return Date.today().set({year: 2008, month: 11, day: 1}).equals( this.date ) }
    }
  },  
  
  
    'No Year or Month': {
    setup: function() { 
      //default to current Year and Month
        this.baseline = new Date(2004,6,1);
        
        this.today = Date.today();
        this.now = new Date();
    },
    '1': {
      run: function() { },
      assert: function() { return Date.today().set({day: 1}).equals(Date.parse('1')) }
    }, 
    '2': {
      run: function() { },
      assert: function() { return Date.today().set({day: 2}).equals(Date.parse('2')) }
    }, 
    '3': {
      run: function() { },
      assert: function() { return Date.today().set({day: 3}).equals(Date.parse('3')) }
    }, 
    '4': {
      run: function() { },
      assert: function() { return Date.today().set({day: 4}).equals(Date.parse('4')) }
    }, 
    '5': {
      run: function() { },
      assert: function() { return Date.today().set({day: 5}).equals(Date.parse('5')) }
    }, 
    '6': {
      run: function() { },
      assert: function() { return Date.today().set({day: 6}).equals(Date.parse('6')) }
    }, 
    '7': {
      run: function() { },
      assert: function() { return Date.today().set({day: 7}).equals(Date.parse('7')) }
    }, 
    '8': {
      run: function() { },
      assert: function() { return Date.today().set({day: 8}).equals(Date.parse('8')) }
    }, 
    '9': {
      run: function() { },
      assert: function() { return Date.today().set({day: 9}).equals(Date.parse('9')) }
    }, 
    '10': {
      run: function() { },
      assert: function() { return Date.today().set({day: 10}).equals(Date.parse('10')) }
    }, 
    '11': {
      run: function() { },
      assert: function() { return Date.today().set({day: 11}).equals(Date.parse('11')) }
    }, 
    '12': {
      run: function() { },
      assert: function() { return Date.today().set({day: 12}).equals(Date.parse('12')) }
    }, 
    '13': {
      run: function() { },
      assert: function() { return Date.today().set({day: 13}).equals(Date.parse('13')) }
    }, 
    '14': {
      run: function() { },
      assert: function() { return Date.today().set({day: 14}).equals(Date.parse('14')) }
    }, 
    '15': {
      run: function() { },
      assert: function() { return Date.today().set({day: 15}).equals(Date.parse('15')) }
    }, 
    '16': {
      run: function() { },
      assert: function() { return Date.today().set({day: 16}).equals(Date.parse('16')) }
    }, 
    '17': {
      run: function() { },
      assert: function() { return Date.today().set({day: 17}).equals(Date.parse('17')) }
    }, 
    '18': {
      run: function() { },
      assert: function() { return Date.today().set({day: 18}).equals(Date.parse('18')) }
    }, 
    '19': {
      run: function() { },
      assert: function() { return Date.today().set({day: 19}).equals(Date.parse('19')) }
    }, 
    '20': {
      run: function() { },
      assert: function() { return Date.today().set({day: 20}).equals(Date.parse('20')) }
    }, 
    '21': {
      run: function() { },
      assert: function() { return Date.today().set({day: 21}).equals(Date.parse('21')) }
    }, 
    '22': {
      run: function() { },
      assert: function() { return Date.today().set({day: 22}).equals(Date.parse('22')) }
    }, 
    '23': {
      run: function() { },
      assert: function() { return Date.today().set({day: 23}).equals(Date.parse('23')) }
    }, 
    '24': {
      run: function() { },
      assert: function() { return Date.today().set({day: 24}).equals(Date.parse('24')) }
    },     
    '25': {
      run: function() { },
      assert: function() { return Date.today().set({day: 25}).equals(Date.parse('25')) }
    }, 
    '26': {
      run: function() { },
      assert: function() { return Date.today().set({day: 26}).equals(Date.parse('26')) }
    }, 
    '27': {
      run: function() { },
      assert: function() { return Date.today().set({day: 27}).equals(Date.parse('27')) }
    }, 
    '28': {
      run: function() { },
      assert: function() { return Date.today().set({day: 28}).equals(Date.parse('28')) }
    }, 
    
	'29 : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('29');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 29 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30 : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('30');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 30 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31 : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('31');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) == 31 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},	
	'32 : Year 1932': {
    run: function() { },
		assert: function() {
            return Date.today().set( { year: 1932 } ).equals( Date.parse('32') );
		}
	},
	
	
	
     '1st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 1}).equals(Date.parse('1st')) }
    }, 
    '2nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 2}).equals(Date.parse('2nd')) }
    }, 
    '3rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 3}).equals(Date.parse('3rd')) }
    }, 
    '4th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 4}).equals(Date.parse('4th')) }
    }, 
    '5th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 5}).equals(Date.parse('5th')) }
    }, 
    '6th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 6}).equals(Date.parse('6th')) }
    }, 
    '7th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 7}).equals(Date.parse('7th')) }
    }, 
    '8th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 8}).equals(Date.parse('8th')) }
    }, 
    '9th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 9}).equals(Date.parse('9th')) }
    }, 
    '10th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 10}).equals(Date.parse('10th')) }
    }, 
    '11th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 11}).equals(Date.parse('11th')) }
    }, 
    '12th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 12}).equals(Date.parse('12th')) }
    }, 
    '13th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 13}).equals(Date.parse('13th')) }
    }, 
    '14th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 14}).equals(Date.parse('14th')) }
    }, 
    '15th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 15}).equals(Date.parse('15th')) }
    }, 
    '16th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 16}).equals(Date.parse('16th')) }
    }, 
    '17th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 17}).equals(Date.parse('17th')) }
    }, 
    '18th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 18}).equals(Date.parse('18th')) }
    }, 
    '19th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 19}).equals(Date.parse('19th')) }
    }, 
    '20th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 20}).equals(Date.parse('20th')) }
    }, 
    '21st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 21}).equals(Date.parse('21st')) }
    }, 
    '22nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 22}).equals(Date.parse('22nd')) }
    }, 
    '23rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 23}).equals(Date.parse('23rd')) }
    }, 
    '24th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 24}).equals(Date.parse('24th')) }
    },     
    '25th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 25}).equals(Date.parse('25th')) }
    }, 
    '26th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 26}).equals(Date.parse('26th')) }
    }, 
    '27th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 27}).equals(Date.parse('27th')) }
    }, 
    '28th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 28}).equals(Date.parse('28th')) }
    },
    
    
       
	'29th : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('29th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 29 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30th : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('30th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 30 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31st : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('31st');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) == 31 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},		
    '1 st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 1}).equals(Date.parse('1 st')) }
    }, 
    '2 nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 2}).equals(Date.parse('2 nd')) }
    }, 
    '3 rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 3}).equals(Date.parse('3 rd')) }
    }, 
    '4 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 4}).equals(Date.parse('4 th')) }
    }, 
    '5 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 5}).equals(Date.parse('5 th')) }
    }, 
    '6 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 6}).equals(Date.parse('6 th')) }
    }, 
    '7 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 7}).equals(Date.parse('7 th')) }
    }, 
    '8 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 8}).equals(Date.parse('8 th')) }
    }, 
    '9 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 9}).equals(Date.parse('9 th')) }
    }, 
    '10 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 10}).equals(Date.parse('10 th')) }
    }, 
    '11 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 11}).equals(Date.parse('11 th')) }
    }, 
    '12 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 12}).equals(Date.parse('12 th')) }
    }, 
    '13 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 13}).equals(Date.parse('13 th')) }
    }, 
    '14 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 14}).equals(Date.parse('14 th')) }
    }, 
    '15 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 15}).equals(Date.parse('15 th')) }
    }, 
    '16 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 16}).equals(Date.parse('16 th')) }
    }, 
    '17 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 17}).equals(Date.parse('17 th')) }
    }, 
    '18 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 18}).equals(Date.parse('18 th')) }
    }, 
    '19 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 19}).equals(Date.parse('19 th')) }
    }, 
    '20 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 20}).equals(Date.parse('20 th')) }
    }, 
    '21 st': {
      run: function() { },
      assert: function() { return Date.today().set({day: 21}).equals(Date.parse('21 st')) }
    }, 
    '22 nd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 22}).equals(Date.parse('22 nd')) }
    }, 
    '23 rd': {
      run: function() { },
      assert: function() { return Date.today().set({day: 23}).equals(Date.parse('23 rd')) }
    }, 
    '24 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 24}).equals(Date.parse('24 th')) }
    },     
    '25 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 25}).equals(Date.parse('25 th')) }
    }, 
    '26 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 26}).equals(Date.parse('26 th')) }
    }, 
    '27 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 27}).equals(Date.parse('27 th')) }
    }, 
    '28 th': {
      run: function() { },
      assert: function() { return Date.today().set({day: 28}).equals(Date.parse('28 th')) }
    },
    
	'29 th : Returns null if current month does not have 29 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('29 th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 29 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 29 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'30 th : Returns null if current month does not have 30 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('30 th');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) >= 30 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 30 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	},
	'31 st : Returns null if current month does not have 31 days': {
    run: function() { },
		assert: function() {
		    this.date = Date.parse('31 st');
		    if( this.date != null && Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) == 31 ) {
		        return true;
		    }
		    if( Date.getDaysInMonth(this.today.getFullYear(), this.today.getMonth()) < 31 && this.date == null ) {
		        return true;
		    }
		    return false;
		}
	}
  }
  
});

$(document).ready( function() { Date.Specification.validate().show() } );