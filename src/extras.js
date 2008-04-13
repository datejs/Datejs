/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-04-04
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
 
(function () {
    var $D = Date, 
        $P = $D.prototype, 
        $C = $D.CultureInfo,
        p = function(s, l) {
            if (!l) {
                l = 2;
            }
            return ("000" + s).slice(l * -1);
        };
        
    /**
     * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
     *
     * Format Specifiers
     <pre>
     Format  Description                                                                  Example
     ------  ---------------------------------------------------------------------------  -----------------------
       d     Day of the month, 2 digits with leading zeros                                01 to 31
     </pre>
    
     *  NOT SUPPORTED
     *  e  	Timezone identifier Examples: UTC, GMT, Atlantic/Azores
     * @param {String}   A format string consisting of one or more format spcifiers [Optional].
     * @return {String}  A string representation of the current Date object.
     */
    $P.$format = function(format) { 
        var x = this, 
            y,
            p = function p(s) {
                return s < 10 ? '0' + s : s;
            };
        
        x.t = x.toString;

        return format ? format.replace(/(%|\\)?[a-zA-Z]|%%/g, 
        function (m) {
            if (m.charAt(0) === "\\" || m.substring(0, 2) === "%%") {
                return m.replace("\\", "").replace("%%", "%");
            }
            switch (m) {
            case "d":
            case "%d":
                return x.t("dd");
            case "D":
            case "%a":
                return x.t("ddd");
            case "j":
            case "%e":
                return x.t("d");
            case "l":
            case "%A":
                return x.t("dddd");
            case "N":
            case "%u":
                return x.getDay() + 1;
            case "S":
                return x.t("S");
            case "w":
            case "%w":
                return x.getDay();
            case "z":
                return x.getOrdinalNumber();
            case "%j":
                return p(x.getOrdinalNumber(), 3);
            case "%U":
                var d1 = x.clone().set({month: 0, day: 1}).addDays(-1).moveToDayOfWeek(0);
                var d2 = x.clone().addDays(1).moveToDayOfWeek(0, -1);
                return (d2 < d1) ? "00" : p((d2.getOrdinalNumber() - d1.getOrdinalNumber()) / 7 + 1);                
            case "W":
            case "%V":
                return x.getISOWeek();
            case "%W":
                return p(x.getWeek());
            case "F":
            case "%B":
                return x.t("MMMM");
            case "m":
            case "%m":            
                return x.t("MM");
            case "M":
            case "%b":
            case "%h":
                return x.t("MMM");
            case "n":
                return x.t("M");
            case "t":
                return $D.getDaysInMonth(x.getFullYear(), x.getMonth());
            case "n":
                return x.t("M");
            case "L":
                return ($D.isLeapYear(x.getFullYear())) ? 1 : 0;
            case "o":
            case "%G":
                return x.setWeek(x.getISOWeek()).t("yyyy");
            case "%g":
                return x.$format("%G").slice(-2);
            case "Y":
            case "%Y":
                return x.t("yyyy");
            case "y":
            case "%y":
                return x.t("yy");
            case "a":
            case "%p":
                return x.t("tt").toLowerCase();
            case "%r":
                y = x.$format("%p");
                return (y.indexOf(".") > -1) ? y : y.charAt(0) + "." + y.charAt(1) + ".";
            case "A":
                return x.t("tt").toUpperCase();
            case "g":
            case "%I":
                return x.t("h");
            case "G":
                return x.t("H");
            case "h":
                return x.t("hh");
            case "H":
            case "%H":
                return x.t("HH");
            case "i":
            case "%M":
                return x.t("mm");
            case "s":
            case "%S":
                return x.t("ss");
            case "u":
                return p(x.getMilliseconds(), 3);
            case "I":
                return (x.isDaylightSavingTime()) ? 1 : 0;
            case "O":
                return x.getUTCOffset();
            case "P":
                y = x.getUTCOffset();
                return y.substring(0, y.length - 2) + ":" + y.substring(y.length - 2);
            case "T":
                return x.getTimezone();
            case "Z":
                return x.getTimezoneOffset() * -60;
            case "c":
                return x.toISOString();
            case "U":
                return Math.round(x.getTime()/1000);
            case "%c":
                return x.t("d") + " " + x.t("t");
            case "%C":
                return Math.floor(x.getFullYear() / 100 + 1);
            case "%D":
                return x.t("mm/dd/yy");
            case "%n":
                return "\\n";
            case "%t":
                return "\\t";
            case "%R":
                return x.t("HH:mm");
            case "%T":
                return x.t("HH:mm:ss");
            case "%x":
                return x.t("d");
            case "%X":
                return x.t("t");
			default:
				return m;
            }
        }
        ) : this._toString();
    };
    
    if (!$P.format) {
        $P.format = $P.$format;
    }
}());    