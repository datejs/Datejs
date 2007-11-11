/**
 * Version: 1.0 Alpha 1 
 * Release Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 */
 
/* 
 * TimeSpan(days, hours, minutes, seconds);
 * TimeSpan(milliseconds);
 * TimeSpan(timeString); //1.10:15:45
 * TimeSpan(formattedTimeString, timeFormat, designatorArray); 
 */
TimeSpan = function(days, hours, minutes, seconds) {
    var argLength = arguments.length;
	this.addProperty = function(name, value, createSetMethod) { 
		this[name] = value;				
		var functionSuffix = name.charAt(0).toUpperCase() + name.substring(1, name.length);
		this["get" + functionSuffix] = function(){return this[name];};
		if(createSetMethod){this["set" + functionSuffix] = function(vNewValue){this[name] = vNewValue;};}
	};
	
	this.isNumeric = function(value) { 
		var digits="1234567890";
	    for (var i=0; i < value.length; i++) { if (digits.indexOf(value.charAt(i))==-1) { return false; }}
	    return true;
	};
	
    var _days, _hours, _minutes, _seconds, tempTime;
    if(argLength == 4) { _days = days; _hours = hours; _minutes = minutes; _seconds = seconds; }
    else if(argLength == 1 && typeof(days) == "number") {
        var milliseconds = days;
        if(milliseconds < 0) { milliseconds += (24*60*60*1000); }
        var diff = Math.abs(milliseconds);
        var dMod, hMod, mMod;
        _days = Math.floor(diff/(24*60*60*1000));
        dMod = diff % (24*60*60*1000);
        if(dMod && this.isNumeric(dMod))
        {
            _hours = Math.floor(dMod/(60*60*1000));
            hMod = dMod % (60*60*1000);
            if(hMod && this.isNumeric(hMod))
            {
                _minutes = Math.floor(hMod/(60*1000));
                mMod = hMod % (60*1000);
                if(mMod && this.isNumeric(mMod)) { _seconds = Math.floor(mMod/(1000)); }
            }
        }
    }     
    else if(argLength == 1 && typeof(days) == "string") { tempTime = this.parse(days); }
    else if(argLength == 3 && typeof(days) == "string" && typeof(hours) == "string") { tempTime = this.parse(days, hours, minutes); }    
    if(tempTime != null) {
        _days = tempTime.getDays();
        _hours = tempTime.getHours();
        _minutes = tempTime.getMinutes();
        _seconds = tempTime.getSeconds();
    }
	this.addProperty("days", (_days) ? _days: 0, true);
	this.addProperty("hours", (_hours) ? _hours : 0, true);
	this.addProperty("minutes", (_minutes) ? _minutes : 0, true);
	this.addProperty("seconds", (_seconds) ? _seconds : 0, true);
	
	var mFact = Math.floor(this.getSeconds()/60);
	if(mFact > 0) {
	    this.setMinutes(1*this.getMinutes() + mFact);
	    this.setSeconds(1*this.getSeconds() - (mFact*60));
	}
	var hFact = Math.floor(_minutes/60);
	if(hFact > 0) {
	    this.setHours(1*this.getHours() + hFact);
	    this.setMinutes(1*this.getMinutes() - (hFact*60));
	}
    var dFact = Math.floor(_hours/24);
	if(dFact > 0) {
	    this.setDays(1*this.getDays() + dFact);
	    this.setHours(1*this.getHours() - (dFact*24));
	}	
};

TimeSpan.prototype.compare = function(timeSpan) {
    var t1 = new Date(1970,1,1, this.getHours(), this.getMinutes(), this.getSeconds()),t2;
    if(timeSpan == null) { t2 = new Date(1970,1,1,0,0,0); }
    else { t2 = new Date(1970,1,1, timeSpan.getHours(), timeSpan.getMinutes(), timeSpan.getSeconds()); /* t2 = t2.addDays(timeSpan.getDays()); */ }
    return (t1 > t2) ? 1 : (t1 < t2) ? -1 : 0;
};

TimeSpan.prototype.add = function(timeSpan) { return (timeSpan == null) ? this : this.addSeconds(timeSpan.getMilliseconds()/1000); };
TimeSpan.prototype.subtract = function(timeSpan) { return (timeSpan == null) ? this : this.addSeconds(-timeSpan.getMilliseconds()/1000); };
TimeSpan.prototype.addDays = function(number) { return new TimeSpan(this.getMilliseconds() + parseInt(number)*(24*60*60*1000)); };
TimeSpan.prototype.addHours = function(number) { return new TimeSpan(this.getMilliseconds() + parseInt(number)*(60*60*1000)); };
TimeSpan.prototype.addMinutes = function(number) { return new TimeSpan(this.getMilliseconds() + parseInt(number)*(60*1000)); };
TimeSpan.prototype.addSeconds = function(number) { return new TimeSpan(this.getMilliseconds() + parseInt(number)*1000); };
TimeSpan.prototype.addMilliseconds = function(number) { return new TimeSpan(this.getMilliseconds() + parseInt(number)); };
TimeSpan.prototype.getMilliseconds = function() { return (this.getDays() * (24*60*60*1000)) + (this.getHours() * (60*60*1000)) + (this.getMinutes() * (60*1000)) + (this.getSeconds() * (1000)); };
TimeSpan.prototype.get12HourHour = function() { return ((h = this.getHours() % 12) ? h : 12); };
TimeSpan.prototype.getDesignator = function() { return (this.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator };

TimeSpan.prototype.toString = function(format) {
    var self = this;
    return format ? format.replace(/d|dd|HH|H|hh|h|mm|m|ss|s|tt|t/g, 
    function(format) {
        switch(format) {
            case "d":	return self.getDays();
			case "dd":	return p(self.getDays());
			case "H":	return self.getHours();
			case "HH":	return p(self.getHours());
			case "h":	return self.get12HourHour();
			case "hh":	return p(self.get12HourHour());
			case "m":	return self.getMinutes();
			case "mm":	return p(self.getMinutes());
			case "s":	return self.getSeconds();
			case "ss":	return p(self.getSeconds());
			case "t":	return self.getDesignator(amDesignator, pmDesignator).substring(0,1);
			case "tt":	return self.getDesignator(amDesignator, pmDesignator);
        }
    }
    ) : this._toString();
    function _toString() {
        if(this.getDays() != null && this.getDays() > 0) { return this.getDays() + "." + this.getHours() + ":" + p(this.getMinutes()) + ":" + p(this.getSeconds()); }
        else { return this.getHours() + ":" + p(this.getMinutes()) + ":" + p(this.getSeconds()); }
    };
    function p(s) {
        return (s.toString().length < 2) ? "0" + s : s;
    };  
};