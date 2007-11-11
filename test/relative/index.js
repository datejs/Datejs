Date.Specification = new Specification({
  'Overview': {
    setup: function() { },
    'Now': {
      run: function() { this.date = Date.parse('Now') },
      assert: function() { 
        // clear milliseconds since there is a delay between parsing and testing
        if(this.date != null)
            return this.date.setMilliseconds(0) == ( Date.now() ).setMilliseconds(0) 
        else
            return false;
        }
    },
    'Today': {
      run: function() { this.date = Date.parse('Today'); },
      assert: function() { return Date.today().equals( this.date ) }
    },
    'Yesterday': {
      run: function() { this.date = Date.parse('Yesterday') },
      assert: function() {  return Date.today().addDays(-1).equals( this.date ) }      
    },
    'Tomorrow': {
      run: function() { this.date = Date.parse('Tomorrow') },
      assert: function() { return Date.today().addDays(1).equals( this.date ) }
    },   
    'Last Tuesday': {
      run: function() { this.date = Date.parse('last tuesday') },
      assert: function() {  return Date.today().last().tuesday().equals( this.date ) }            
    },
    'Next Tuesday': {
      run: function() { this.date = Date.parse('next tuesday') },
      assert: function() {  return Date.today().next().tuesday().equals( this.date ) }            
    },

    'Last July': {
      run: function() { this.date = Date.parse('Last July') },
      assert: function() { return Date.today().last().july().equals( this.date ) }
    },
    'Next July': {
      run: function() { this.date = Date.parse('Next July') },
      assert: function() { return Date.today().next().july().equals( this.date ) }
    },    
    
    'Next Week': {
      run: function() { this.date = Date.parse('Next Week') },
      assert: function() { return Date.today().next().week().equals( this.date ) }
    }, 
    'Last Week': {
      run: function() { this.date = Date.parse('Last Week') },
      assert: function() { return Date.today().last().week().equals( this.date ) }
    }, 
    'Next Month': {
      run: function() { this.date = Date.parse('Next Month') },
      assert: function() { return Date.today().next().month().equals( this.date ) }
    }, 
    'Last Month': {
      run: function() { this.date = Date.parse('Last Month') },
      assert: function() { return Date.today().last().month().equals( this.date ) }
    },
    'Next Year': {
      run: function() { this.date = Date.parse('Next Year') },
      assert: function() { return Date.today().next().year().equals( this.date ) }
    }, 
    'Last Year': {
      run: function() { this.date = Date.parse('Last Year') },
      assert: function() { return Date.today().last().year().equals( this.date ) }            
    }
        
  },
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
    }
  }   
});

$(document).ready( function() { Date.Specification.validate().show() } );