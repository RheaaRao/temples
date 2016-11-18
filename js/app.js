$(document).ready(function(){


     //old logic 
	// for dropdown
	//var orgs =["Hindu American Foundation", "Hindu Swayamsevak Sangh", "Vishwa Hindu Parishad"];

	//console.log(orgs)

	//var years = ["2012", "2013", "2014"];

	//console.log(years)

	


    $('#orgSelect')
    .dropdown();

    $('#yearSelect')
    .dropdown();

     //want the button to run after user input from each field
      $('#appbutton').on("click", function(){
		var org = $('#orgSelect').val();
		var year = $('#yearSelect').val();
		var totalAmount = 0;
		var reasons = "";

		//running through the dataset depending on the organization selected by user

		var dataSet = _.filter(temples,function(item){
				return item.Organization == org
			});

		//looping through the "new dataset" which basically means it is running through the data above based on what is inputted

        var newSet = _.filter(dataSet,function(item){
        	return item.Year == year
        });

        //want to make the reasons into a neat list rather than a long, sloppy line
        //there are two or three different amounts, based on the projects the organizations undertake, so I'm trying the add the amounts instead of list each one. 

		reasons = "1. " + newSet[0].Reason;
		totalAmount = totalAmount + newSet[0].Amount;

		for( var i = 1; i < newSet.length;i++){
 			totalAmount = amount + newSet[i].Amount;
 			num = i + 1;
 			//reasons = "," + num + "." newSet[i].Reason;
		};


		$('#result').append(totalAmount);
		$('#result2').append(reasons);

     });

 

 //old logic

    //$('#appbutton').on("click", function(){
		//var dropdownValue = $('#select').val();
		
		// result box 1: append the Amount
		//var Money = _.find(temples, function(num){
		//	return num.Amount == dropdownValue;
		//});

		//$('#result').append(
		//	Money.Amount
		//);

		// result box 2: Here I want to put the reasons they're spending the money
		



	

	//more old logic

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

	


		

		

 


	
	

	