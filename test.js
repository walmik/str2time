var assert = require('assert');
var str2time = require('./')


describe('str2time', function(){

	//return false on unwanted characters
	describe('adw3', function(){
		it('should return false when the argument contains unwanted characters', function(){
			assert.equal(str2time('adw3'), false);
		});
	});

	//9:00am
	describe('9:00am', function(){
		it('should return 09:00:00', function(){
			assert.equal(str2time('9:00am'), '09:00:00');
		});
	});

	//9am
	describe('9am', function(){
		it('should return 09:00:00', function(){
			assert.equal(str2time('9am'), '09:00:00');
		});
	});

	//9:30am
	describe('9:30am', function(){
		it('should return 09:30:00', function(){
			assert.equal(str2time('9:30am'), '09:30:00');
		});
	});

	//9:30
	describe('9:30', function(){
		it('should return 09:30:00', function(){
			assert.equal(str2time('9:30'), '09:30:00');
		});
	});

	//9:30:00
	describe('9:30:00', function(){
		it('should return 09:30:00', function(){
			assert.equal(str2time('9:30:00'), '09:30:00');
		});
	});

	//9:30pm
	describe('9:30pm', function(){
		it('should return 21:30:00', function(){
			assert.equal(str2time('9:30pm'), '21:30:00');
		});
	});


	//9pm
	describe('9pm', function(){
		it('should return 21:00:00', function(){
			assert.equal(str2time('9pm'), '21:00:00');
		});
	});

	//9p
	describe('9p', function(){
		it('should return 21:00:00', function(){
			assert.equal(str2time('9p'), '21:00:00');
		});
	});


	//91:30
	describe('91:30', function(){
		it('should return false', function(){
			assert.equal(str2time('91:30'), false);
		});
	});
})