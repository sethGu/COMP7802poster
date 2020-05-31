$(document).ready(function(){
	console.log("poster.js is ready");
	
	/* Listeners */
	
	$('#studentname').on('click', function(){
		$('#biographymodal').modal('show');
	})
});