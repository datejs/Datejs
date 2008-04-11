/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-04-04
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
 
(function () {
    var $D = Date, $P = $D.prototype, $C = $D.CultureInfo;
//  NOT SUPPORTED
//  %U - week number of the current year as a decimal number, starting with the first Sunday as the first day of the first week
    /**
     * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
     *
     * Format Specifiers
    <pre>
    Format  Description                                                                  Example
    ------  ---------------------------------------------------------------------------  -----------------------
      d     Day of the month, 2 digits with leading zeros                                01 to 31
    </pre>
     * @param {String}   A format string consisting of one or more format spcifiers [Optional].
     * @return {String}  A string representation of the current Date object.
     */
    $P["$format"] = function(format) { 
        var x = this, temp;
        
        x.t = x.toString;

        var p = function p(s) {
            return s < 10 ? '0' + s : s;
        };
        
        return format ? format.replace(/(%|\\|%%)?[a-zA-Z]/g, 
        function (format) {
            temp = format.charAt(0)
            if (format.charAt(0) === "\\" || format.substring(0, 2) === "%%") {
                return format.replace("\\", "").replace("%%", "%");
            }
            switch (format) {
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
                return x.getOrdinal();
            case "w":
            case "%w":
                return x.getDay();
            case "z":
                return x.getDayOfYear();
            case "%j":
                temp = "00" + x.getDayOfYear();
                return temp.substring(temp.length - 3);
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
                var g = x.$format("%G");
                return g.substring(g.length - 2);
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
                temp = x.$format("%p");
                return (temp.indexOf(".") > -1) ? temp : temp.charAt(0) + "." + temp.charAt(1) + ".";
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
                return x.t("fff");
            case "O":
                return x.getUTCOffset().toString();
            case "P":
                var o = x.getUTCOffset();
                return o.substring(0, o.length - 2) + ":" + o.substring(o.length - 2);
            case "T":
                return x.getTimezone();
            case "Z":
                return x.getTimezoneOffset() * -60;
            case "c":
                return x.toISOString();
            case "U":
                return Math.round(x.getTime()/1000)
            case "%c":
                return x.toShortDateString() + " " + x.toShortTimeString();
            case "%C":
                return Math.floor(x.getFullYear() / 100 + 1);
            case "%D":
                return x.$format("%m/%d/%y");
            case "%n":
                return "\\n";
            case "%t":
                return "\\t";
            case "%R":
                return x.toString("HH:mm");
            case "%T":
                return x.$format("%H:%M:%S");
            case "%x":
                return x.toShortDateString();
            case "%X":
                return x.toShortTimeString();
			default:
				return format;
            }
        }
        ) : this._toString();
    };
    
    if (!$P.format) {
        $P.format = $P.$format;
    }
}());    