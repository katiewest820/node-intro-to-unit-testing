const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should verify if value is a number', function(){
		const isNumCheck = [
			{a: 12, expected: 'string'},
			{a: 112, expected: 'number'},
			{a: 30, expected: 'string'},
			{a: 60, expected: 'string'},
			{a: 2.54, expected: 'number'}
		];

		isNumCheck.forEach(function(val){
			const answer = fizzBuzzer(val.a);
			answer.should.be.a(val.expected);
		});
	});
	it('should throw error if value is not a number', function(){
		const isNotNumCheck = [
			['hello'],
			[' '], 
			[true], 
			['false'], 
			[undefined]
		];

		isNotNumCheck.forEach(function(val){
			(function(){
				fizzBuzzer(val[0])
			}).should.throw(Error);
		});

	});
	it('should verify if value is divisible by 15, 5 and 3', function(){
		const isDivisible = [
			{a: 2.5, expected: 2.5},
			{a: 3, expected: 'fizz'},
			{a: 12, expected: 'fizz'},
			{a: 70, expected: 'buzz'},
			{a: 112, expected: 112},
			{a: 30, expected: 'fizz-buzz'},
			{a: 25, expected: 'buzz'},
			{a: 15, expected: 'fizz-buzz'},
			{a: 103, expected: 103}
		];
		isDivisible.forEach(function(val){
			const answer = fizzBuzzer(val.a);
			answer.should.equal(val.expected);
		});
	});
});	