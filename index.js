
/**
 * Convert human readable time string to time
 * @param  {String} str Human readable time @eg: 9am
 * @return {String|Boolean} Formatted time @eg: 09:00:00 OR false
 */
module.exports = function(str) {

	var timeNum, isPM = false;

	//Strip off spaces
	str = str.replace(/\s+/g, '');


	//Do not accept any character that is not 0-9.:amp\s
	if( str.match(/[^0-9\.:apm\s]/g) ) {
		return false;
	}

	//Separate the time(remove am/pm if any)
	timeNum = str.replace(/(a|m|p)+/g, '');

	//Check if am OR pm
	isPM = str.match(/pm|p/g);
	
	
	//User may have entered either of the formats: (0)0 OR (0)0:00 OR (0)0:00:00
	if( timeNum.match( /(\d{1,2})|(\d{1,2}:\d{2})|(\d{1,2}:\d{2}:\d{2})/ ) ) {
		
		//Split time in to hours, mins and seconds
		var arr = timeNum.split(':');
		var h = arr[0], m = '00', s = '00';

		if(isPM) {
			var hNum = Number(h);
			if(hNum < 12) {
				hNum += 12;
			}
			h = hNum;
		}

		if(h.length == 1) {
			h = '0' + arr[0];
		}

		if(arr.length > 1) {
			m = arr[1];
		}

		if(arr.length == 3) {
			s = arr[2];
		}

		//Check if we have some weird numbers
		if(Number(h) > 23 || Number(m) > 59 || Number(s) > 59) {
			return false;
		}

		str = h+':'+m+':'+s;
	}
	
	return str;	

}