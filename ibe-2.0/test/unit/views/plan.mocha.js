describe('plan controller', function(){
	'user strict';

	var plan;

	beforeEach(module(window._pegsIbeEnv.moduleName));

	var plan;

	beforeEach(inject(function(_plan_) {
		plan = _plan_;
	}));

	describe('date inputs', function() {
		it('check-in date required', function() {

		});

		it('check-in date defaults to todays date', function(){
			// this should work with chai-datetime for better handling but 
			// getting function undefined error.
			var actual = plan.data.check_in;
			var expected = new Date();

			actual.setHours(0, 0, 0, 0).should.equal(expected.setHours(0, 0, 0, 0));
		});

		it('check-out date required', function(){

		});

		it('check-out date defaults to today + 1', function(){
			// this should work with chai-datetime for better handling but 
			// getting function undefined error.
			var actual = plan.data.check_in;
			var expected = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));

			actual.setHours(0, 0, 0, 0).should.equal(expected.setHours(0, 0, 0, 0));

		});

		it('tap anywhere on dates to show date picker', function(){

		});
	});

	describe('occupant inputs', function() {
		it('displays correct occupant options from api data', function() {

		});

		// Can very based on api. Example is required child's age
		it('implements correct requirement conditions from api data', function() {

		});

		// Example is childs age
		it('should display occupant information selects if required', function() {

		});

		it('should scroll to display any occupant option select inputs', function() {

		});

		it('plus buttons increment by +1', function() {

		});

		it('minus buttons increment by -1', function() {

		});
	});

	// describe('rate code', function() 
	// {
	// 	it('should be able to click special rate code button to navigate to special code module', function() {

	// 	});

	// 	it('should display code has been applied if code was applied', function() {

	// 	});

	// 	it('should display "edit rate code" if code has been entered', function() {

	// 	});

	// });

	// describe('check availability', function() {
	// 	it('should click check availability button to continue', function() {

	// 	});

	// 	it('should display "no availability" if nothing is available', function() {

	// 	});

	// 	it('should get hotel room data on user click', function() {

	// 	});
	// });

	// describe('multiple rooms', function() {
	// 	it('multiple rooms checkbox exists if allowed', function() {

	// 	});

	// 	it('should only display message an no occupant inputs if selected', function() {

	// 	});
	// });
	
})