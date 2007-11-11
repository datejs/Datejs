var Date2 = function(x) {
	this.year = 0; this.month = 0; this.day = 1; 
	this.hour = 0; this.minute = 0; this.second = 0; this.millisecond = 0;
	if ( x instanceof String ) {
		// TODO: convert parse to Date2
		return Date2.parse(x);
	} else if ( x instanceof Object ) {
		this.set(x);
	} else if (arguments.length == 0 ) {
		// TODO: get values from new Date()
	}
};

Date.prototype = {
	toMilliseconds: function() { 
		// TODO: Adjust for timezone ...
		return new Date(this.year, this.month, this.day, 
			this.hour, this.minute, this.second, this.millisecond).getMilliseconds(); 
	},
	toString: function(fmt) {
		if ( fmt !== undefined ) {
			// TODO: format the string
		} else {
			// TODO: implement 'abbreviated' functions
			var datePart = [ this.getAbbreviatedDayOfWeek(), this.getAbbreviatedMonthName(),
				this.getDay(), this.getYear() ].join(' ');
			var timePart = [ this.getHour(), this.getMinute(), this.getSecond() ].join(':');
			return [ datePart, timePart, this.getTimezone() ].join(' ');
		}
	}
};

(function() {
	var capitalize = function(s) { return s.slice(0,1).toUpperCase() + s.slice(1); }
	var getterFn = function(attr) { return function() { return this[attr]; }; };
	var setterFn = function(attr) { return function(val) { this[attr] = val; return this; }; };
	var addFn = function(attr) { return function(val) { this[attr] += val; return this; }; };
	var attributes = 'year month day hour minute second millisecond timezone'.split(/\s+/);
	for ( var i = 0; i < attributes.length ; i++ ) {
		var A = capitalize( attributes[i] ), a = attributes[i];
		Date2.prototype['get'+A] = getterFn(a);
		Date2.prototype['set'+A] = setterFn(a);
		Date2.prototype['add'+A] = addFn(a);
	}
	var bulk = function(name) {
		Date2.prototype[ name ] = function(obj) {
			for ( var i = 0; i < attributes.length ; i++ ) {
				var attribute = capitalize( attributes[i] ); 
				if ( obj[attributes[i]]!= null ) { 
					console.log(name+attribute);
					this[ name + attribute ]( obj[attributes[i]] ); }
			}
			return this;
		};		
	};
	bulk('add'); bulk('set');
}());