$(document).ready(function(){

	// for dropdown
	var orgs =["Hindu American Foundation", "Hindu Swayamsevak Sangh", "Vishwa Hindu Parishad"];
	var years = ["2014", "2013", "2012"];

	// 
	_.each(orgs, function(value, index){
		$('#select').append('<option value="'+ value+'">'+value+'</option>')
	})

	_.each(years, function(value, index){
		$('#secondSelect').append('<option value="'+ value+'">'+value+'</option>')
	})

	//the idea here is to make the button do something when both dropdowns are selected

	$('#appbutton').on("click", function(){
		var dropdownValue = $('#select'&&'#secondSelect').val();


       // now trying to loop through each option and spew out the right results.
       //Result 1 will have the Amount
       //Result 2 will have the Reason for expenditure
       //have to create a variable for the corresponding array which will loop through 
       var correspondingArray=_.each(temples, function(value, index){
		if ( orgs == "Hindu Swayamsevak Sangh" && year = 2013){
			return num.Amount==dropdownValue;
				}else{
					return num.Amount==dropdownValue;
				} 
	        }); 

	//var correspondingArray= _.find(temples, function(num){
		//	return num.Amount == dropdownValue;
		//});

	//The results appended to the respective blanks

       $('#result').append(
		correspondingArray.Amount
		);

       //is a string a value? because the reason is a string

		$('#result2').append(value.reason);

		



	})

	

});


	//_.each(temples, function(value,index){
	//	if (orgs=='Hindu American Foundation')
	//})
	
	// action on click

	//$('#appbutton').on("click", function(){
		//var dropdownValue = $('#select').val();
		
		//var correspondingArray = _.find(temples, function(num){
		//	return num.Year == dropdownValue;
		//});

		//$('#result').append(
		//correspondingArray.Organization
		//);

		
		//var descSortedArray = _.sortBy(temples, function(num) {
			    //return -num.Amount;
			//}); 

		//_.each(descSortedArray, function(value, index){
		//	$('#result2').append(value.Amount + " ");
		//});

		// _.each(temples, function(value, index){
		// 	if (TK == TK && year = year){
			
		// 	}
 
		// })


	//})

	

//});
