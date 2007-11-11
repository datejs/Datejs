/**
 * Version: 1.0 Alpha-1 
 * Release Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 */

/**
 **************************************************************
 ** SugarPak - Domain Specific Language -  Syntactical Sugar **
 **************************************************************
 */
 
/**
 * Gets a date that is set to the current date and time. 
 * @return {Date}    The current date and time.
 */
Date.now = function () {
    return new Date();
};

/** 
 * Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM).
 * @return {Date}    The current date.
 */
Date.today = function () {
    return Date.now().clearTime();
};

// private
Date.prototype._orient = +1;

/** 
 * Moves the date to the next instance of a date as specified by the following date element function (eg. second|minute|hour|day|month|year), month name function (eg. january|jan|march) or day name function (eg. friday|fri|monday).
 * Example
<pre><code>
Date.today().next().friday();
Date.today().next().fri();
Date.today().next().march();
Date.today().next().mar();
Date.today().next().week();
</code></pre>
 * 
 * @return {Date}    this
 */
Date.prototype.next = function () {
    this._orient = +1;
    return this;
};

/** 
 * Moves the date to the previous instance of a date as specified by the following date element function (eg. second|minute|hour|day|month|year), month name function (eg. january|jan|march) or day name function (eg. friday|fri|monday).
 * Example
<pre><code>
Date.today().last().friday();
Date.today().last().fri();
Date.today().last().march();
Date.today().last().mar();
Date.today().last().week();
</code></pre>
 *  
 * @return {Date}    this
 */
Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () {
    this._orient = -1;
    return this;
};

// private
Date.prototype._is = false;
    
/** 
 * Performs a equality check when followed by either a month name or day name function.
 * Example
<pre><code>
Date.today().is().friday(); // true|false
Date.today().is().fri();
Date.today().is().march();
Date.today().is().mar();
</code></pre>
 *  
 * @return {bool}    true|false
 */
Date.prototype.is = function () { 
    this._is = true; 
    return this; 
}; 

// private
Number.prototype._dateElement = "day";

/** 
 * Creates a new Date (Date.now()) and adds this (Number) to the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
 * Example
<pre><code>
// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
(3).days().fromNow();
(6).months().fromNow();

// Declared Number variables do not require parentheses. 
var n = 6;
n.months().fromNow();
</code></pre>
 *  
 * @return {Date}    A new Date instance
 */
Number.prototype.fromNow = function () {
    var c = {};
    c[this._dateElement] = this;
    return Date.now().add(c);
};

/** 
 * Creates a new Date (Date.now()) and subtract this (Number) from the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
 * Example
<pre><code>
// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
(3).days().ago();
(6).months().ago();

// Declared Number variables do not require parentheses. 
var n = 6;
n.months().ago();
</code></pre>
 *  
 * @return {Date}    A new Date instance
 */
Number.prototype.ago = function () {
    var c = {};
    c[this._dateElement] = this * -1;
    return Date.now().add(c);
};

// Build dynamic date element, month name and day name functions.
(function () {
    var $D = Date.prototype, $N = Number.prototype;

    /* Do NOT modify the following string tokens. These tokens are used to build dynamic functions. */
    var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),
        mx = ("january february march april may june july august september october november december").split(/\s/),
        px = ("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),
        de;
    
    // Create day name functions and abbreviated day name functions (eg. monday(), friday(), fri()).
    var df = function (n) {
        return function () { 
            if (this._is) { 
                this._is = false; 
                return this.getDay() == n; 
            }
            return this.moveToDayOfWeek(n, this._orient);
        };
    };
    
    for (var i = 0 ; i < dx.length ; i++) { 
        $D[dx[i]] = $D[dx[i].substring(0, 3)] = df(i);
    }
    
    // Create month name functions and abbreviated month name functions (eg. january(), march(), mar()).
    var mf = function (n) { 
        return function () {
            if (this._is) { 
                this._is = false; 
                return this.getMonth() === n; 
            }
            return this.moveToMonth(n, this._orient); 
        };
    };
    
    for (var j = 0 ; j < mx.length ; j++) { 
        $D[mx[j]] = $D[mx[j].substring(0, 3)] = mf(j);
    }
    
    // Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
    var ef = function (j) { 
        return function () {
            if (j.substring(j.length - 1) != "s") { 
                j += "s"; 
            }
            return this["add" + j](this._orient); 
        };
    };
    
    // Create date element functions and plural date element functions used with Number (eg. day(), days(), months()).
    var nf = function (n) {
        return function () {
            this._dateElement = n;
            return this;
        };
    };
    
    for (var k = 0 ; k < px.length ; k++) {
        de = px[k].toLowerCase();
        $D[de] = $D[de + "s"] = ef(px[k]);
        $N[de] = $N[de + "s"] = nf(de);
    }
}());

/**
 * Converts the current date instance into a JSON string value.
 * @return {String}  JSON string of date
 */
Date.prototype.toJSONString = function () {
    return this.toString("yyyy-MM-ddThh:mm:ssZ");
};

/**
 * Converts the current date instance to a string using the culture specific shortDatePattern.
 * @return {String}  A string formatted as per the culture specific shortDatePattern
 */
Date.prototype.toShortDateString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);
};

/**
 * Converts the current date instance to a string using the culture specific longDatePattern.
 * @return {String}  A string formatted as per the culture specific longDatePattern
 */
Date.prototype.toLongDateString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);
};

/**
 * Converts the current date instance to a string using the culture specific shortTimePattern.
 * @return {String}  A string formatted as per the culture specific shortTimePattern
 */
Date.prototype.toShortTimeString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);
};

/**
 * Converts the current date instance to a string using the culture specific longTimePattern.
 * @return {String}  A string formatted as per the culture specific longTimePattern
 */
Date.prototype.toLongTimeString = function () {
    return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);
};

/**
 * Gets the number of milliseconds between the current date instance and now.
 * @return {Number}  milliseconds
 */
Date.prototype.getAge = function () {
    return new Date() - this;
};

/**
 * Calculates the age in years from current date instance to today.
 * @return {Number}  The age
 */
Date.prototype.getAgeInYears = function () {
    var t = Date.now(), d1 = t.getDate(), m1 = t.getMonth(), y1 = t.getFullYear();
    var d2 = this.getDate(), m2 = this.getMonth(), y2 = this.getFullYear();
    return (m1 < m2 || m1 == m2 && d1 < d2) ? y1 - y2 - 1 : y1 - y2;
};

/**
 * Get the ordinal suffix of the current day.
 * @return {String}  "st, "nd", "rd" or "th"
 */
Date.prototype.getOrdinal = function () {
    switch (this.getDate()) {
    case 1: 
    case 21: 
    case 31: 
        return "st";
    case 2: 
    case 22: 
        return "nd";
    case 3: 
    case 23: 
        return "rd";
    default: 
        return "th";
    }
};

/**
 * Calculates the number of full time intervals between the current date instance and parameter date.
 * @param {String}   String value representing the time interval to use as the unit of difference [Required]
 * @param {Date}     Second Date value to use in the calculation. Default to "today" if no date value supplied for comparison [Optional]
 * @return {Number}  Number of full time intervals
 */
Date.prototype.diff = function (interval, date) {
    /* .diff() will eventually get refactored out of Date and into TimeSpan class. */
    var ms = this - (date || Date.now());
    switch (interval) {
    case "yyyy":
    case "yy":
    case "y":
        return Math.floor(ms / 31536000000); /* (1000*60*60*24*365) */
    case "qq":
    case "q":
        return Math.floor(ms / 345600000); /* (1000*60*60*24*4) */
    case "mm":
    case "m":
        return this.diff("yyyy", date) * 12 + this.getMonth();
    case "wk":
    case "ww":
    case "w":		
        return Math.floor(ms / 604800000); /* (1000*60*60*24*7) */
    case "hh":
    case "h":		
        return Math.floor(ms / 3600000); /* (1000*60*60) */
    case "mi":
    case "n":
        return Math.floor(ms / 60000); /* (1000*60) */
    case "ss":
    case "s":
        return Math.floor(ms / 1000);
    case "ms":
        return ms;
    default:
        return Math.floor(ms / 86400000); /* (1000*60*60*24) */
    }
};