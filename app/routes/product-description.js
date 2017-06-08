import Ember from 'ember';

export default Ember.Route.extend({
	

	model : function(params){
		console.log("userindex route", params);
		let temp={};
		let product = [{
			"id":"gas-electricity",
			"title": "Gas & electricity",	
			"link": "/business/gas-and-electricity",
			"descriptionContent": "Description-1"
		},
		{
			"id":"energy-services",
			"title": "Energy services",	
			"link": "/business/energy-services",
			"descriptionContent": "Description-2"
		},
		{
			"id":"smarter-working",
			"title": "Smarter working",	
			"link": "/business/smarter-working",
			"descriptionContent": "Description-3"
		},
		{
		"id":"smarter-meter",
		"title": "Smarter working",	
		"link": "/business/smarter-working",
		"descriptionContent": "Description-4"
	}];
		product.forEach(function(item) {
			if(params.id===item.id){
				temp = item;
			}
		});
		
		return temp;

	}
});
