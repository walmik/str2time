/**
 * Convert humanized time like 9am to time format 09:00:00
 * @param  {string} str Human readable time @eg: 9am
 * @return {string} Formatted time @eg: 09:00:00
 */
module.exports = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  // Strip off spaces
  str = str.replace(/\s+/g, '').toLowerCase();

  // Validate input format - only allow digits, single colon/period, and am/pm
  if (!/^\d{1,2}([:.:]?\d{2})?([:.:]?\d{2})?(am?|pm?)?$/i.test(str)) {
    throw new Error(
      'Invalid time format. Expected formats: 9, 9am, 9:30, 9:30pm, etc.'
    );
  }

  // Extract time components
  const timeNum = str.replace(/[amp]/g, '');
  const isPM = /pm?$/.test(str);
  const isAM = /am?$/.test(str);

  // Parse time components
  const arr = timeNum.split(/[:.]/); // Split on either : or .
  let h = parseInt(arr[0], 10);
  let m = parseInt(arr[1] || '0', 10);
  let s = parseInt(arr[2] || '0', 10);

  // Validate ranges before conversion
  if (h > 23 || m > 59 || s > 59) {
    throw new RangeError(
      'Time values out of range (hours: 0-23, minutes/seconds: 0-59)'
    );
  }

  // Handle 12-hour format conversion
  if (isPM || isAM) {
    if (h < 1 || h > 12) {
      throw new RangeError('12-hour format requires hours between 1-12');
    }
    if (isPM && h !== 12) {
      h += 12;
    } else if (isAM && h === 12) {
      h = 0;
    }
  }

  // Validate 24-hour range after conversion
  if (h > 23) {
    throw new RangeError('Hour value out of range (0-23)');
  }

  // Format with zero padding
  const formatTime = (hours, minutes, seconds) => {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return formatTime(h, m, s);
};
