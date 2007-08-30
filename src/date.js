// date.js v0.1.1 2007-08-28 
// Copyright (c) 2007 Christian Romney <christian@kipdigitalmedia.com>
// Distributed under the terms of the BSD License see COPYING for details

Date.prototype._getMonth = Date.prototype.getMonth;
Date.prototype._setMonth = Date.prototype.setMonth;

Object.extend(Date.prototype, {            	
	clone: function() {
    return new Date(this.getTime());
  },

	getMonth: function() {
		return this._getMonth() + 1;
	},	
	
	setMonth: function(month) {
		this._setMonth(month - 1);
	},	
	
	leapYear: function() {
		if (0 == this.getFullYear() % 400) return true;
		if (0 == this.getFullYear() % 100) return false;
		return (0 == this.getFullYear() % 4) ? true : false;
	}, 
	
  atNoon: function() {
    var dt = this.clone();
    dt.setHours(12);
    dt.setMinutes(0);
    dt.setSeconds(0);
		dt.setMilliseconds(0);
    return dt;
  },

	atBeginningOfDay: function() {
		var dt = this.clone();
		dt.setHours(0);
		dt.setMinutes(0);
		dt.setSeconds(0);
		dt.setMilliseconds(0);		
		return dt;
	},	
	
	addDays: function(days) {
		var dt = this.clone();
		dt.setDate(this.getDate() + days);
		return dt;
	},	
	
	subtractDays: function(days) {
		return this.addDays(-days);
	},	
	
	addYears: function(years) {
		var dt = this.clone();
    dt.setFullYear(this.getFullYear() + years);
    return dt;
	}, 
	
  subtractYears: function(years) {
		return this.addYears(-years);
  },  

	nextYear: function() {
		return this.addYears(1);
	}, 	
	
	previousYear: function() {
		return this.subtractYears(1);
	},
	
	nextDay: function() {
		return this.addDays(1);
	},	
	
	previousDay: function() {
		return this.subtractDays(1);
	},
	
	before: function(other) {
		return (this.getTime() < other.getTime());
	},	
	
	after: function(other) {
		return (this.getTime() > other.getTime());
	},	
	
	onOrBefore: function(other) {
		return (this.getTime() <= other.getTime());
	},	
	
	onOrAfter: function(other) {
		return (this.getTime() >= other.getTime());
	},	
	
	equals: function(other) {
		return (this.getTime() == other.getTime());
	}
});

Object.extend(Date, {
	now: function() {
		return new Date();
	},	
	
  today: function () {
    return new Date().atBeginningOfDay();
  },

  tomorrow: function () {
    return new Date().nextDay().atBeginningOfDay();
  },

	yesterday: function() {
		return new Date().previousDay().atBeginningOfDay();
	},
	
	nextYear: function() {
		return new Date().nextYear().atBeginningOfDay();
	},
	
	lastYear: function() {
		return new Date().previousYear().atBeginningOfDay();
	},
	
  on: function(year, month, day) {
    var dt = new Date();
    dt.setFullYear(year);
    dt.setMonth(month);
    dt.setDate(day);
    return dt.atBeginningOfDay();
  }            
});

var TimeSpan = Class.create({
  initialize: function(magnitude, lambda) {
    this.magnitude = magnitude;
    this.lambda = lambda;
  },
  
  fromNow: function() {
    return this.lambda.apply(Date.now(), [this.magnitude]);
  },
  
  ago: function() {
    return this.lambda.apply(Date.now(), [-this.magnitude]);
  }
});

Object.extend(Number.prototype, {
  years: function() {
    return new TimeSpan(this, Date.prototype.addYears);
  },

  days: function() {
    return new TimeSpan(this, Date.prototype.addDays);
  }
});

Object.extend(Number.prototype, {
  year:         Number.prototype.years,
  day:          Number.prototype.days
});