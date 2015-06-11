Date.Specification = new Specification({
'Date Math': {
    setup: function() { 
      var dow = function(dow,orient,date) { 
        date.setDate(date.getDate() + (( dow - date.getDay() ) + ( 7 * orient )) % 7);
        return date;
      };
      
      this.today = new Date().clearTime(); 
      var y = new Date; y.setDate( y.getDate() - 1 ); this.yesterday = y;
      
      this.last_tuesday = dow(2,-1, new Date().clearTime() );
      this.next_tuesday = dow(2,+1, new Date().clearTime() );
      
      this.last_july = new Date().clearTime();
      this.last_july.setMonth(6);
      if(this.today.compareTo(this.last_july) == -1)
          this.last_july.addYears(-1);
          
      this.next_july = new Date().clearTime();
      this.next_july.setMonth(6);
      if(this.today.compareTo(this.next_july) == 1)
          this.next_july.addYears(1);
    }, 
    't': {
      run: function() { this.date = Date.parse('t') },
      assert: function() {  return this.today.equals( this.date) }            
    }, 
    'today+': {
      run: function() { this.date = Date.parse('today+') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }            
    },
    't+': {
      run: function() { this.date = Date.parse('t+') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }            
    }, 

    't+1 d': {
      run: function() { this.date = Date.parse('t+1 d') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }            
    }, 
    't + 1 d': {
      run: function() { this.date = Date.parse('t + 1 d') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }
    }, 
    'today + 1 d': {
      run: function() { this.date = Date.parse('today + 1 d') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }
    },

    't+1 day': {
      run: function() { this.date = Date.parse('t+1 day') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }            
    }, 
    't + 1 day': {
      run: function() { this.date = Date.parse('t + 1 day') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }
    },
    'today + 1 day': {
      run: function() { this.date = Date.parse('today + 1 day') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }
    },     
        
    'today+5': {
      run: function() { this.date = Date.parse('today+5') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    't+5': {
      run: function() { this.date = Date.parse('t+5') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    't + 5': {
      run: function() { this.date = Date.parse('t + 5') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    'today + 5': {
      run: function() { this.date = Date.parse('today + 5') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    },

    't+5d': {
      run: function() { this.date = Date.parse('t+5d') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    't + 5d': {
      run: function() { this.date = Date.parse('t + 5d') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    'today + 5d': {
      run: function() { this.date = Date.parse('today + 5d') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 

    't+5days': {
      run: function() { this.date = Date.parse('t+5days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    't + 5days': {
      run: function() { this.date = Date.parse('t + 5days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    'today + 5days': {
      run: function() { this.date = Date.parse('today + 5days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    },         
    
    't+5 days': {
      run: function() { this.date = Date.parse('t+5 days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    't + 5 days': {
      run: function() { this.date = Date.parse('t + 5 days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    'today + 5 days': {
      run: function() { this.date = Date.parse('today + 5 days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    },    

    't+1 m': {
      run: function() { this.date = Date.parse('t+1 m') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }            
    }, 
    't + 1 m': {
      run: function() { this.date = Date.parse('t + 1 m') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }
    }, 
    'today + 1 m': {
      run: function() { this.date = Date.parse('today + 1 m') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }
    },

    't+1 month': {
      run: function() { this.date = Date.parse('t+1 month') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }            
    }, 
    't + 1 month': {
      run: function() { this.date = Date.parse('t + 1 month') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }
    }, 
    'today + 1 month': {
      run: function() { this.date = Date.parse('today + 1 month') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }
    },     
        
    't+5m': {
      run: function() { this.date = Date.parse('t+5m') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }            
    }, 
    't + 5m': {
      run: function() { this.date = Date.parse('t + 5m') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    }, 
    'today + 5m': {
      run: function() { this.date = Date.parse('today + 5m') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    }, 

    't+5months': {
      run: function() { this.date = Date.parse('t+5months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }            
    }, 
    't + 5months': {
      run: function() { this.date = Date.parse('t + 5months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    }, 
    'today + 5months': {
      run: function() { this.date = Date.parse('today + 5months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    },         
    
    't+5 months': {
      run: function() { this.date = Date.parse('t+5 months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }            
    }, 
    't + 5 months': {
      run: function() { this.date = Date.parse('t + 5 months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    }, 
    'today + 5 months': {
      run: function() { this.date = Date.parse('today + 5 months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    },  
      
    't+1 y': {
      run: function() { this.date = Date.parse('t+1 y') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }            
    }, 
    't + 1 y': {
      run: function() { this.date = Date.parse('t + 1 y') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }
    }, 
    'today + 1 y': {
      run: function() { this.date = Date.parse('today + 1 y') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }
    },

    't+1 year': {
      run: function() { this.date = Date.parse('t+1 year') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }            
    }, 
    't + 1 year': {
      run: function() { this.date = Date.parse('t + 1 year') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }
    }, 
    'today + 1 year': {
      run: function() { this.date = Date.parse('today + 1 year') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }
    },     
        
    't+5y': {
      run: function() { this.date = Date.parse('t+5y') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }            
    }, 
    't + 5y': {
      run: function() { this.date = Date.parse('t + 5y') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    }, 
    'today + 5y': {
      run: function() { this.date = Date.parse('today + 5y') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    }, 

    't+5years': {
      run: function() { this.date = Date.parse('t+5years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }            
    }, 
    't + 5years': {
      run: function() { this.date = Date.parse('t + 5years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    }, 
    'today + 5years': {
      run: function() { this.date = Date.parse('today + 5years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    },         
    
    't+5 years': {
      run: function() { this.date = Date.parse('t+5 years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }            
    }, 
    't + 5 years': {
      run: function() { this.date = Date.parse('t + 5 years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    }, 
    'today + 5 years': {
      run: function() { this.date = Date.parse('today + 5 years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    },
    
    'today-': {
      run: function() { this.date = Date.parse('today-') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }            
    },
    't-': {
      run: function() { this.date = Date.parse('t-') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }            
    }, 

    't-1 d': {
      run: function() { this.date = Date.parse('t-1 d') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }            
    }, 
    't - 1 d': {
      run: function() { this.date = Date.parse('t - 1 d') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }
    }, 
    'today - 1 d': {
      run: function() { this.date = Date.parse('today - 1 d') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }
    },

    't-1 day': {
      run: function() { this.date = Date.parse('t-1 day') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }            
    }, 
    't - 1 day': {
      run: function() { this.date = Date.parse('t - 1 day') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }
    }, 
    'today - 1 day': {
      run: function() { this.date = Date.parse('today - 1 day') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }
    },     
        
    'today-5': {
      run: function() { this.date = Date.parse('today-5') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    't-5': {
      run: function() { this.date = Date.parse('t-5') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    't - 5': {
      run: function() { this.date = Date.parse('t - 5') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    'today - 5': {
      run: function() { this.date = Date.parse('today - 5') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    },

    't-5d': {
      run: function() { this.date = Date.parse('t-5d') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    't - 5d': {
      run: function() { this.date = Date.parse('t - 5d') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    'today - 5d': {
      run: function() { this.date = Date.parse('today - 5d') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 

    't-5days': {
      run: function() { this.date = Date.parse('t-5days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    't - 5days': {
      run: function() { this.date = Date.parse('t - 5days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    'today - 5days': {
      run: function() { this.date = Date.parse('today - 5days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    },         
    
    't-5 days': {
      run: function() { this.date = Date.parse('t-5 days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    't - 5 days': {
      run: function() { this.date = Date.parse('t - 5 days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    'today - 5 days': {
      run: function() { this.date = Date.parse('today - 5 days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    },    
    't-1 m': {
      run: function() { this.date = Date.parse('t-1 m') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }            
    }, 
    't - 1 m': {
      run: function() { this.date = Date.parse('t - 1 m') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }
    }, 
    'today - 1 m': {
      run: function() { this.date = Date.parse('today - 1 m') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }
    },
    't-1 month': {
      run: function() { this.date = Date.parse('t-1 month') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }            
    }, 
    't - 1 month': {
      run: function() { this.date = Date.parse('t - 1 month') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }
    }, 
    'today - 1 month': {
      run: function() { this.date = Date.parse('today - 1 month') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }
    },     
    't-5m': {
      run: function() { this.date = Date.parse('t-5m') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }            
    }, 
    't - 5m': {
      run: function() { this.date = Date.parse('t - 5m') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    }, 
    'today - 5m': {
      run: function() { this.date = Date.parse('today - 5m') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    }, 
    't-5months': {
      run: function() { this.date = Date.parse('t-5months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }            
    }, 
    't - 5months': {
      run: function() { this.date = Date.parse('t - 5months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    }, 
    'today - 5months': {
      run: function() { this.date = Date.parse('today - 5months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    },         
    't-5 months': {
      run: function() { this.date = Date.parse('t-5 months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }            
    }, 
    't - 5 months': {
      run: function() { this.date = Date.parse('t - 5 months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    }, 
    'today - 5 months': {
      run: function() { this.date = Date.parse('today - 5 months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    },  
    't-1 y': {
      run: function() { this.date = Date.parse('t-1 y') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }            
    }, 
    't - 1 y': {
      run: function() { this.date = Date.parse('t - 1 y') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }
    }, 
    'today - 1 y': {
      run: function() { this.date = Date.parse('today - 1 y') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }
    },
    't-1 year': {
      run: function() { this.date = Date.parse('t-1 year') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }            
    }, 
    't - 1 year': {
      run: function() { this.date = Date.parse('t - 1 year') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }
    }, 
    'today - 1 year': {
      run: function() { this.date = Date.parse('today - 1 year') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }
    },     
    't-5y': {
      run: function() { this.date = Date.parse('t-5y') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }            
    }, 
    't - 5y': {
      run: function() { this.date = Date.parse('t - 5y') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    }, 
    'today - 5y': {
      run: function() { this.date = Date.parse('today - 5y') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    }, 

    't-5years': {
      run: function() { this.date = Date.parse('t-5years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }            
    }, 
    't - 5years': {
      run: function() { this.date = Date.parse('t - 5years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    }, 
    'today - 5years': {
      run: function() { this.date = Date.parse('today - 5years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    },         
    
    't-5 years': {
      run: function() { this.date = Date.parse('t-5 years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }            
    }, 
    't - 5 years': {
      run: function() { this.date = Date.parse('t - 5 years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    }, 
    'today - 5 years': {
      run: function() { this.date = Date.parse('today - 5 years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    },
	'+': {
      run: function() { this.date = Date.parse('+') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }            
    }, 

    '+1 d': {
      run: function() { this.date = Date.parse('+1 d') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }            
    }, 
    '+ 1 d': {
      run: function() { this.date = Date.parse('+ 1 d') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }
    }, 
    '+1 day': {
      run: function() { this.date = Date.parse('+1 day') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }            
    }, 
    '+ 1 day': {
      run: function() { this.date = Date.parse('+ 1 day') },
      assert: function() {  return this.today.addDays(1).equals( this.date ) }
    },
    '+5': {
      run: function() { this.date = Date.parse('+5') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    '+ 5': {
      run: function() { this.date = Date.parse('+ 5') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    '+5d': {
      run: function() { this.date = Date.parse('+5d') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    '+ 5d': {
      run: function() { this.date = Date.parse('+ 5d') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    '+5days': {
      run: function() { this.date = Date.parse('+5days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    '+ 5days': {
      run: function() { this.date = Date.parse('+ 5days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    '+5 days': {
      run: function() { this.date = Date.parse('+5 days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }            
    }, 
    '+ 5 days': {
      run: function() { this.date = Date.parse('+ 5 days') },
      assert: function() {  return this.today.addDays(5).equals( this.date ) }
    }, 
    '+1 m': {
      run: function() { this.date = Date.parse('+1 m') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }            
    }, 
    '+ 1 m': {
      run: function() { this.date = Date.parse('+ 1 m') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }
    }, 
    '+1 month': {
      run: function() { this.date = Date.parse('+1 month') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }            
    }, 
    '+ 1 month': {
      run: function() { this.date = Date.parse('+ 1 month') },
      assert: function() {  return this.today.addMonths(1).equals( this.date ) }
    }, 
    '+5m': {
      run: function() { this.date = Date.parse('+5m') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }            
    }, 
    '+ 5m': {
      run: function() { this.date = Date.parse('+ 5m') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    }, 
    '+5months': {
      run: function() { this.date = Date.parse('+5months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }            
    }, 
    '+ 5months': {
      run: function() { this.date = Date.parse('+ 5months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    }, 
    '+5 months': {
      run: function() { this.date = Date.parse('+5 months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }            
    }, 
    '+ 5 months': {
      run: function() { this.date = Date.parse('+ 5 months') },
      assert: function() {  return this.today.addMonths(5).equals( this.date ) }
    }, 
    '+1 y': {
      run: function() { this.date = Date.parse('+1 y') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }            
    }, 
    '+ 1 y': {
      run: function() { this.date = Date.parse('+ 1 y') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }
    }, 
    '+1 year': {
      run: function() { this.date = Date.parse('+1 year') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }            
    }, 
    '+ 1 year': {
      run: function() { this.date = Date.parse('+ 1 year') },
      assert: function() {  return this.today.addYears(1).equals( this.date ) }
    }, 
    '+5y': {
      run: function() { this.date = Date.parse('+5y') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }            
    }, 
    '+ 5y': {
      run: function() { this.date = Date.parse('+ 5y') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    }, 
    '+5years': {
      run: function() { this.date = Date.parse('+5years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }            
    }, 
    '+ 5years': {
      run: function() { this.date = Date.parse('+ 5years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    }, 
    '+5 years': {
      run: function() { this.date = Date.parse('+5 years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }            
    }, 
    '+ 5 years': {
      run: function() { this.date = Date.parse('+ 5 years') },
      assert: function() {  return this.today.addYears(5).equals( this.date ) }
    }, 
    '-': {
      run: function() { this.date = Date.parse('-') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }            
    }, 
    '-1 d': {
      run: function() { this.date = Date.parse('-1 d') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }            
    }, 
    '- 1 d': {
      run: function() { this.date = Date.parse(' - 1 d') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }
    }, 
    '-1 day': {
      run: function() { this.date = Date.parse('-1 day') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }            
    }, 
    '- 1 day': {
      run: function() { this.date = Date.parse(' - 1 day') },
      assert: function() {  return this.today.addDays(-1).equals( this.date ) }
    }, 
    '-5': {
      run: function() { this.date = Date.parse('-5') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    '- 5': {
      run: function() { this.date = Date.parse('- 5') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    '-5d': {
      run: function() { this.date = Date.parse('-5d') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    '- 5d': {
      run: function() { this.date = Date.parse('- 5d') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    '-5days': {
      run: function() { this.date = Date.parse('-5days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    '- 5days': {
      run: function() { this.date = Date.parse('- 5days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    '-5 days': {
      run: function() { this.date = Date.parse('-5 days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }            
    }, 
    '- 5 days': {
      run: function() { this.date = Date.parse('- 5 days') },
      assert: function() {  return this.today.addDays(-5).equals( this.date ) }
    }, 
    '-1 m': {
      run: function() { this.date = Date.parse('-1 m') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }            
    }, 
    '- 1 m': {
      run: function() { this.date = Date.parse('- 1 m') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }
    }, 
    '-1 month': {
      run: function() { this.date = Date.parse('-1 month') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }            
    }, 
    '- 1 month': {
      run: function() { this.date = Date.parse('- 1 month') },
      assert: function() {  return this.today.addMonths(-1).equals( this.date ) }
    }, 
    '-5m': {
      run: function() { this.date = Date.parse('-5m') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }            
    }, 
    '- 5m': {
      run: function() { this.date = Date.parse('- 5m') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    }, 
    '-5months': {
      run: function() { this.date = Date.parse('-5months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }            
    }, 
    '- 5months': {
      run: function() { this.date = Date.parse('- 5months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    }, 
    '-5 months': {
      run: function() { this.date = Date.parse('-5 months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }            
    }, 
    '- 5 months': {
      run: function() { this.date = Date.parse('- 5 months') },
      assert: function() {  return this.today.addMonths(-5).equals( this.date ) }
    }, 
    '-1 y': {
      run: function() { this.date = Date.parse('-1 y') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }            
    }, 
    '- 1 y': {
      run: function() { this.date = Date.parse('- 1 y') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }
    }, 
    '-1 year': {
      run: function() { this.date = Date.parse('-1 year') },
      assert: function() {  return this.today.addYears(-1).equals( this.date ) }            
    }, 
    '-5y': {
      run: function() { this.date = Date.parse('-5y') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }            
    }, 
    '- 5y': {
      run: function() { this.date = Date.parse('- 5y') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    }, 
    '-5years': {
      run: function() { this.date = Date.parse('-5years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }            
    }, 
    '- 5years': {
      run: function() { this.date = Date.parse('- 5years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    },
    '-5 years': {
      run: function() { this.date = Date.parse('-5 years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }            
    }, 
    '- 5 years': {
      run: function() { this.date = Date.parse('- 5 years') },
      assert: function() {  return this.today.addYears(-5).equals( this.date ) }
    }, 
    '+5 second': {
      run: function() { },
      assert: function() {  return new Date().add(5).seconds().set({millisecond: 0}).equals( Date.parse('+5 second').set({millisecond: 0}) ) }
    }, 
    '+5 Second': {
      run: function() { },
      assert: function() {  return new Date().add(5).seconds().set({millisecond: 0}).equals( Date.parse('+5 Second').set({millisecond: 0}) ) }
    }, 
    '-5 second': {
      run: function() { },
      assert: function() {  return new Date().add(-5).seconds().set({millisecond: 0}).equals( Date.parse('-5 second').set({millisecond: 0}) ) }
    }, 
    '-5 Second': {
      run: function() { },
      assert: function() {  return new Date().add(-5).seconds().set({millisecond: 0}).equals( Date.parse('-5 Second').set({millisecond: 0}) ) }
    }, 
    '+5 seconds': {
      run: function() { },
      assert: function() {  return new Date().add(5).seconds().set({millisecond: 0}).equals( Date.parse('+5 seconds').set({millisecond: 0}) ) }
    }, 
    '+5 Seconds': {
      run: function() { },
      assert: function() {  return new Date().add(5).seconds().set({millisecond: 0}).equals( Date.parse('+5 Seconds').set({millisecond: 0}) ) }
    }, 
    '-5 seconds': {
      run: function() { },
      assert: function() {  return new Date().add(-5).seconds().set({millisecond: 0}).equals( Date.parse('-5 seconds').set({millisecond: 0}) ) }
    }, 
    '-5 Seconds': {
      run: function() { },
      assert: function() {  return new Date().add(-5).seconds().set({millisecond: 0}).equals( Date.parse('-5 Seconds').set({millisecond: 0}) ) }
    },


    '+5 minute': {
      run: function() { },
      assert: function() {  return new Date().add(5).minutes().set({millisecond: 0}).equals( Date.parse('+5 minute').set({millisecond: 0}) ) }
    }, 
    '+5 Minute': {
      run: function() { },
      assert: function() {  return new Date().add(5).minutes().set({millisecond: 0}).equals( Date.parse('+5 Minute').set({millisecond: 0}) ) }
    }, 
    '-5 minute': {
      run: function() { },
      assert: function() {  return new Date().add(-5).minutes().set({millisecond: 0}).equals( Date.parse('-5 minute').set({millisecond: 0}) ) }
    }, 
    '-5 Minute': {
      run: function() { },
      assert: function() {  return new Date().add(-5).minutes().set({millisecond: 0}).equals( Date.parse('-5 Minute').set({millisecond: 0}) ) }
    },
    '+5 minutes': {
      run: function() { },
      assert: function() {  return new Date().add(5).minutes().set({millisecond: 0}).equals( Date.parse('+5 minutes').set({millisecond: 0}) ) }
    },     
    '+5 Minutes': {
      run: function() { },
      assert: function() {  return new Date().add(5).minutes().set({millisecond: 0}).equals( Date.parse('+5 Minutes').set({millisecond: 0}) ) }
    }, 
    '-5 minutes': {
      run: function() { },
      assert: function() {  return new Date().add(-5).minutes().set({millisecond: 0}).equals( Date.parse('-5 minutes').set({millisecond: 0}) ) }
    }, 
    '-5 Minutes': {
      run: function() { },
      assert: function() {  return new Date().add(-5).minutes().set({millisecond: 0}).equals( Date.parse('-5 Minutes').set({millisecond: 0}) ) }
    },
    
    '+5 hour': {
      run: function() { },
      assert: function() {  return new Date().add(5).hours().set({millisecond: 0}).equals( Date.parse('+5 hour').set({millisecond: 0}) ) }
    }, 
    '+5 Hour': {
      run: function() { },
      assert: function() {  return new Date().add(5).hours().set({millisecond: 0}).equals( Date.parse('+5 Hour').set({millisecond: 0}) ) }
    }, 
    '-5 hour': {
      run: function() { },
      assert: function() {  return new Date().add(-5).hours().set({millisecond: 0}).equals( Date.parse('-5 hour').set({millisecond: 0}) ) }
    }, 
    '-5 Hour': {
      run: function() { },
      assert: function() {  return new Date().add(-5).hours().set({millisecond: 0}).equals( Date.parse('-5 Hour').set({millisecond: 0}) ) }
    }, 
    '+5 hours': {
      run: function() { },
      assert: function() {  return new Date().add(5).hours().set({millisecond: 0}).equals( Date.parse('+5 hours').set({millisecond: 0}) ) }
    }, 
    '+5 Hours': {
      run: function() { },
      assert: function() {  return new Date().add(5).hours().set({millisecond: 0}).equals( Date.parse('+5 Hours').set({millisecond: 0}) ) }
    }, 
    '-5 hours': {
      run: function() { },
      assert: function() {  return new Date().add(-5).hours().set({millisecond: 0}).equals( Date.parse('-5 hours').set({millisecond: 0}) ) }
    }, 
    '-5 Hours': {
      run: function() { },
      assert: function() {  return new Date().add(-5).hours().set({millisecond: 0}).equals( Date.parse('-5 Hours').set({millisecond: 0}) ) }
    },     
        
    '+5 week': {
      run: function() { },
      assert: function() {  return this.today.add(5).weeks().equals( Date.parse('+5 week') ) }
    }, 
    '+5 Week': {
      run: function() { },
      assert: function() {  return this.today.add(5).weeks().equals( Date.parse('+5 Week') ) }
    }, 
    '-5 week': {
      run: function() { },
      assert: function() {  return this.today.add(-5).weeks().equals( Date.parse('-5 week') ) }
    }, 
    '-5 Week': {
      run: function() { },
      assert: function() {  return this.today.add(-5).weeks().equals( Date.parse('-5 Week') ) }
    }, 
    '+5 weeks': {
      run: function() { },
      assert: function() {  return this.today.add(5).weeks().equals( Date.parse('+5 weeks') ) }
    }, 
    '+5 Weeks': {
      run: function() { },
      assert: function() {  return this.today.add(5).weeks().equals( Date.parse('+5 Weeks') ) }
    }, 
    '-5 weeks': {
      run: function() { },
      assert: function() {  return this.today.add(-5).weeks().equals( Date.parse('-5 weeks') ) }
    }, 
    '-5 Weeks': {
      run: function() { },
      assert: function() {  return this.today.add(-5).weeks().equals( Date.parse('-5 Weeks') ) }
    }
  }
});
