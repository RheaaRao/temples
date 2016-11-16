$(document).ready(function(){

	// for dropdown
	//var orgs =["Hindu American Foundation", "Hindu Swayamsevak Sangh", "Vishwa Hindu Parishad"];

	//console.log(orgs)

	//var years = ["2012", "2013", "2014"];

	//console.log(years)

	


    $('#select')
    .dropdown();

    $('#secondSelect')
    .dropdown();

    $('#appbutton').on("click", function(){
		var dropdownValue = $('#select').val();
		
		// result box 1: append the Amount
		var Money = _.find(temples, function(num){
			return num.Amount == dropdownValue;
		});

		$('#result').append(
			Money.Amount
		);

		// result box 2: Here I want to put the reasons they're spending the money
		



	})

	

});

	

   //$('#appbutton').on("click", function(){
	//	var dropdownValue = $('#select').val();

		//if('#select'== 'Hindu American Foundation' && '#secondSelect' == 2014) {
			//$('#result').html( "182009, 182009, 189086")
		//}
		
		// result box 1: append the value of the food group
		

		// $('#appbutton').on("click", function(){
		//var dropdownValue = $('#select').val();

		// result box 2: append all items after you've sorted them
		// make a new array by sorting other data
		//var Money = _.find(temples, function(num){
			//$('#result2').append(value.Reason + " ");
		//});
		



	//});



	//})

	

//});

	


		

		

 


	
	

	