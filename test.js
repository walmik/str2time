var assert = require('assert');
var should = require('should');
var str2time = require('./')


describe('str2time', function(){

	//throw error on unwanted characters
	describe('adw3', function(){
		it('should throw error when the argument contains unwanted characters', function(){
			//assert.equal(str2time('adw3'), false);
			(function(){
				str2time('adw3');
			}).should.throw();
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


	//9:30:00am
	describe('9:30:00am', function(){
		it('should return 09:30:00', function(){
			assert.equal(str2time('9:30:00am'), '09:30:00');
		});
	});


	//9:30:00a
	describe('9:30:00a', function(){
		it('should return 09:30:00', function(){
			assert.equal(str2time('9:30:00a'), '09:30:00');
		});
	});

	//9:30:00p
	describe('9:30:00p', function(){
		it('should return 21:30:00', function(){
			assert.equal(str2time('9:30:00p'), '21:30:00');
		});
	});

	//9:30pm
	describe('9:30pm', function(){
		it('should return 21:30:00', function(){
			assert.equal(str2time('9:30pm'), '21:30:00');
		});
	});

	//9:30p
	describe('9:30p', function(){
		it('should return 21:30:00', function(){
			assert.equal(str2time('9:30p'), '21:30:00');
		});
	});


	//9pm
	describe('9pm', function(){
		it('should return 21:00:00', function(){
			assert.equal(str2time('9pm'), '21:00:00');
		});
	});


	//23:14:03
	describe('23:14:03', function(){
		it('should return 23:14:03', function(){
			assert.equal(str2time('23:14:03'), '23:14:03');
		});
	});


	//9p
	describe('9p', function(){
		it('should return 21:00:00', function(){
			assert.equal(str2time('9p'), '21:00:00');
		});
	});


	//throw range error on out of bound numbers
	describe('91:30', function(){
		it('should throw RangeError on out of bound numbers', function(){
			(function(){
				str2time('91:30');
			}).should.throw();
		});
	});
})